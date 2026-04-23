import { clamp } from "../utils/math";
import type { Handedness, Hands } from "./mediapipe";
import { LM, LM_TIPS, handLmAverage, type Finger } from "./landmarks";
import type { HandState } from "./handState";

export type Gesture = HandGesture | MotionGesture;

export class HandGesture {
  id: string;
  conditionFn: (hand: HandState, state: any) => boolean;
  activationThreshold: number;
  activeCooldown: number;

  onUpdate: (hand: HandState, state: any) => void;
  onStart: (hand: HandState, state: any) => void;
  onEnd: (hand: HandState, state: any) => void;
  onActive: (hand: HandState, state: any) => void;

  state: Hands<any>;
  lastActiveTime: Hands<number>;
  confidence: Hands<number>;
  isActive: Hands<boolean>;

  constructor(
    id: string,
    conditionFn: (hand: HandState, state: any) => boolean,
    activationThreshold = 5,
    activeCooldown = 33
  ) {
    this.id = id;
    this.conditionFn = conditionFn;
    this.activationThreshold = activationThreshold;
    this.activeCooldown = activeCooldown;

    this.onUpdate = () => {};
    this.onStart = () => {};
    this.onEnd = () => {};
    this.onActive = () => {};

    this.state = { left: {}, right: {} };

    this.lastActiveTime = { left: 0, right: 0 };
    this.confidence = { left: 0, right: 0 };
    this.isActive = { left: false, right: false };
  }

  update(hand: HandState, h: Handedness, silent = false, timestamp = Date.now()) {
    const state = this.state[h];
    const conditionMet = this.conditionFn(hand, state);

    // Increase/decrease confidence based on condition, update
    this.confidence[h] += conditionMet ? 1 : -1.5;
    this.confidence[h] = clamp(this.confidence[h], 0, this.activationThreshold);
    this._onUpdate(hand, h);

    if (silent) return false;

    if (!this.isActive[h] && this.confidence[h] >= this.activationThreshold) {
      this.isActive[h] = true;
      this._onStart(hand, state);
    } else if (this.isActive[h] && this.confidence[h] == 0) {
      this.isActive[h] = false;
      this._onEnd(hand, state);
    }

    if (this.isActive[h] && timestamp - this.lastActiveTime[h] > this.activeCooldown) {
      this.lastActiveTime[h] = timestamp;
      this._onActive(hand, state);
    }

    return this.isActive[h];
  }

  protected _onUpdate(hand: HandState, state: any) {
    this.onUpdate(hand, state);
  }
  protected _onStart(hand: HandState, state: any) {
    this.onStart(hand, state);
  }
  protected _onEnd(hand: HandState, state: any) {
    this.onEnd(hand, state);
  }
  protected _onActive(hand: HandState, state: any) {
    this.onActive(hand, state);
  }
}

export class HandGesturePair {
  id: string;
  leftGesture: HandGesture;
  rightGesture: HandGesture;

  onStart: (hands: Hands<HandState>, state: any) => void;
  onEnd: (hands: Hands<HandState>, state: any) => void;
  onActive: (hands: Hands<HandState>, state: any) => void;

  isActive: boolean;
  state: any;

  constructor(id: string, leftGesture: HandGesture, rightGesture?: HandGesture) {
    this.id = id;
    this.leftGesture = leftGesture;
    this.rightGesture = rightGesture ?? leftGesture;
    this.isActive = false;

    this.onStart = () => {};
    this.onEnd = () => {};
    this.onActive = () => {};
  }

  update(hands: Hands<HandState>, silent = false) {
    if (silent) return false;

    const nowActive = this.leftGesture.isActive.left && this.rightGesture.isActive.right;
    if (!this.isActive && nowActive) {
      this.isActive = true;
      this._onStart(hands, this.state);
    } else if (this.isActive && !nowActive) {
      this.isActive = false;
      this._onEnd(hands, this.state);
    }
    if (this.isActive) {
      this._onActive(hands, this.state);
    }

    return this.isActive;
  }
  protected _onStart(hands: Hands<HandState>, state: any) {
    this.onStart(hands, state);
  }
  protected _onEnd(hands: Hands<HandState>, state: any) {
    this.onEnd(hands, state);
  }
  protected _onActive(hands: Hands<HandState>, state: any) {
    this.onActive(hands, state);
  }
}

export class MotionGesture {
  id: string;
  conditionFnA: (hand: HandState) => boolean;
  conditionFnB: (hand: HandState) => boolean;
  maxTimeInterval: number;
  triggerCooldown: number;

  onTriggerAB: (self: MotionGesture, hand: HandState, h: Handedness) => void;
  onTriggerBA: (self: MotionGesture, hand: HandState, h: Handedness) => void;

  lastActivationA: Hands<number>;
  lastActivationB: Hands<number>;
  lastTrigger: Hands<number>;

  constructor(
    id: string,
    conditionFnA: (hand: HandState) => boolean,
    conditionFnB: (hand: HandState) => boolean,
    maxTimeInterval = 500,
    triggerCooldown = 500
  ) {
    this.id = id;
    this.conditionFnA = conditionFnA;
    this.conditionFnB = conditionFnB;
    this.maxTimeInterval = maxTimeInterval;
    this.triggerCooldown = triggerCooldown;

    this.onTriggerAB = () => {};
    this.onTriggerBA = () => {};

    this.lastActivationA = {
      left: 0,
      right: 0
    };
    this.lastActivationB = {
      left: 0,
      right: 0
    };
    this.lastTrigger = {
      left: 0,
      right: 0
    };
  }

  update(hand: HandState, h: Handedness, silent = false, timestamp = Date.now()) {
    if (silent || timestamp - this.lastTrigger[h] < this.triggerCooldown) return;

    if (this.conditionFnB(hand)) {
      if (timestamp - this.lastActivationA[h] < this.maxTimeInterval) {
        this._onTriggerAB(hand, h);
        this.lastTrigger[h] = timestamp;
      }
      this.lastActivationB[h] = timestamp;
    }
    if (this.conditionFnA(hand)) {
      if (timestamp - this.lastActivationB[h] < this.maxTimeInterval) {
        this._onTriggerBA(hand, h);
        this.lastTrigger[h] = timestamp;
      }
      this.lastActivationA[h] = timestamp;
    }
  }

  protected _onTriggerAB(hand: HandState, h: Handedness) {
    this.onTriggerAB(this, hand, h);
  }
  protected _onTriggerBA(hand: HandState, h: Handedness) {
    this.onTriggerBA(this, hand, h);
  }
}

export class PinchGesture extends HandGesture {
  finger: Finger;

  constructor(
    id: string,
    finger: Finger,
    maxDistance: number,
    activationThreshold = 2,
    activeCooldown = 33
  ) {
    let detectPinch = (hand: HandState) => {
      return hand.metrics.pinchDistance[finger - 1] < maxDistance;
    };

    super(id, detectPinch, activationThreshold, activeCooldown);
    this.finger = finger;
  }

  updateState(hand: HandState, h: Handedness) {
    const newState = handLmAverage(hand.sceneLandmarks, [LM.THUMB_TIP, LM_TIPS[this.finger]]);
    this.state[h] = { ...this.state[h], ...newState };
  }

  protected _onStart(hand: HandState, h: Handedness) {
    this.state[h].duration = 0;
    super._onStart(hand, h);
  }

  protected _onEnd(hand: HandState, h: Handedness) {
    this.state[h].duration = 0;
    super._onEnd(hand, h);
  }

  protected _onActive(hand: HandState, h: Handedness): void {
    this.state[h].duration += 1;
    super._onActive(hand, h);
  }

  protected _onUpdate(hand: HandState, h: Handedness) {
    this.updateState(hand, h);
    super._onUpdate(hand, h);
  }
}
