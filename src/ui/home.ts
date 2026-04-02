class Home {
  private container: HTMLElement;
  private btn: HTMLButtonElement;
  private btnLabel: HTMLElement;
  private errorNode: HTMLElement;
  tryStart?: () => void;

  constructor() {
    this.container = document.getElementById("home-container") as HTMLElement;
    this.btn = document.getElementById("home-btn") as HTMLButtonElement;
    this.btnLabel = document.getElementById("home-btn-label") as HTMLElement;
    this.errorNode = document.getElementById("home-error") as HTMLElement;

    this.btn.addEventListener("click", async () => {
      this.setLoading(true);
      this.setError(null);
      try {
        await this.tryStart?.();
        this.dismiss();
      } catch (err) {
        console.log(err);
        const name = err instanceof Error ? err.name : "UnknownError";
        if (name === "NotAllowedError" || name === "PermissionDeniedError") {
          this.setError("Camera permission denied — please allow access and try again.");
        } else if (name === "NotFoundError" || name === "DevicesNotFoundError") {
          this.setError("No camera detected on this device.");
        } else if (name === "NotReadableError") {
          this.setError("Camera is in use by another application.");
        } else {
          this.setError("Could not access camera. Please check your browser settings.");
        }
      } finally {
        this.setLoading(false);
      }
    });
  }

  setError(msg: string | null) {
    if (msg == null) {
      this.errorNode.textContent = "";
      this.errorNode.classList.remove("visible");
      return;
    } else {
      this.errorNode.textContent = msg;
      this.errorNode.classList.add("visible");
      this.btnLabel.textContent = "Try again";
    }
  }

  setLoading(state: boolean) {
    this.btn.classList.toggle("loading", state);
    this.btn.disabled = state;
    if (state) this.btnLabel.textContent = "Requesting access...";
  }

  dismiss() {
    this.container.classList.add("fade-out");
    this.container.addEventListener(
      "transitionend",
      () => {
        this.container.remove();
      },
      { once: true }
    );
  }
}

export { Home };
