import type { Landmark } from "@mediapipe/tasks-vision";

export const LM = {
  WRIST: 0,
  THUMB_CMC: 1,
  THUMB_MCP: 2,
  THUMB_IP: 3,
  THUMB_TIP: 4,
  INDEX_MCP: 5,
  INDEX_PIP: 6,
  INDEX_DIP: 7,
  INDEX_TIP: 8,
  MIDDLE_MCP: 9,
  MIDDLE_PIP: 10,
  MIDDLE_DIP: 11,
  MIDDLE_TIP: 12,
  RING_MCP: 13,
  RING_PIP: 14,
  RING_DIP: 15,
  RING_TIP: 16,
  PINKY_MCP: 17,
  PINKY_PIP: 18,
  PINKY_DIP: 19,
  PINKY_TIP: 20
} as const;

export type LM = (typeof LM)[keyof typeof LM];

export const LM_FINGERS_ALL = [
  [LM.THUMB_CMC, LM.THUMB_MCP, LM.THUMB_IP, LM.THUMB_TIP],
  [LM.INDEX_MCP, LM.INDEX_PIP, LM.INDEX_DIP, LM.INDEX_TIP],
  [LM.MIDDLE_MCP, LM.MIDDLE_PIP, LM.MIDDLE_DIP, LM.MIDDLE_TIP],
  [LM.RING_MCP, LM.RING_PIP, LM.RING_DIP, LM.RING_TIP],
  [LM.PINKY_MCP, LM.PINKY_PIP, LM.PINKY_DIP, LM.PINKY_TIP]
] as const;
export const LM_FINGERS = [
  LM_FINGERS_ALL[1],
  LM_FINGERS_ALL[2],
  LM_FINGERS_ALL[3],
  LM_FINGERS_ALL[4]
] as const;

export const LM_MCPS = LM_FINGERS_ALL.map((f) => f[0]) as readonly LM[];
export const LM_TIPS = LM_FINGERS_ALL.map((f) => f[3]) as readonly LM[];
export const LM_FINGERTIPS = LM_FINGERS.map((f) => f[3]) as readonly LM[];

export const NUM_LMS = Object.values(LM).length;

export const FINGERS = {
  THUMB: 0,
  INDEX: 1,
  MIDDLE: 2,
  RING: 3,
  PINKY: 4
} as const;

export type Finger = (typeof FINGERS)[keyof typeof FINGERS];

export function lmDistance(landmarks: Landmark[], a: LM, b: LM) {
  const dx = landmarks[a].x - landmarks[b].x;
  const dy = landmarks[a].y - landmarks[b].y;
  const dz = landmarks[a].z - landmarks[b].z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function lmDistance2D(landmarks: Landmark[], a: LM, b: LM) {
  const dx = landmarks[a].x - landmarks[b].x;
  const dy = landmarks[a].y - landmarks[b].y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function lmAverage(landmarks: Landmark[], indices?: LM[]): Landmark {
  return indices
    ? indices.reduce(
        (acc, i) => ({
          x: acc.x + landmarks[i].x / indices.length,
          y: acc.y + landmarks[i].y / indices.length,
          z: acc.z + landmarks[i].z / indices.length,
          visibility: acc.visibility
        }),
        { x: 0, y: 0, z: 0, visibility: 1 }
      )
    : landmarks.reduce(
        (acc, lm) => ({
          x: acc.x + lm.x / landmarks.length,
          y: acc.y + lm.y / landmarks.length,
          z: acc.z + lm.z / landmarks.length,
          visibility: acc.visibility
        }),
        { x: 0, y: 0, z: 0, visibility: 1 }
      );
}

export function lmAdd(a: Landmark, b: Landmark): Landmark {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z, visibility: a.visibility || b.visibility };
}
export function lmSub(a: Landmark, b: Landmark): Landmark {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z, visibility: a.visibility || b.visibility };
}
export function lmDot(a: Landmark, b: Landmark): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}
export function lmCross(a: Landmark, b: Landmark): Landmark {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
    visibility: a.visibility || b.visibility
  };
}
export function lmMag(a: Landmark): number {
  return Math.sqrt(lmDot(a, a));
}
export function lmNormalize(a: Landmark): Landmark {
  const mag = lmMag(a);
  return { x: a.x / mag, y: a.y / mag, z: a.z / mag, visibility: a.visibility };
}
export function lmAngle(a: Landmark, b: Landmark, c: Landmark): number {
  const BA = lmSub(a, b);
  const BC = lmSub(c, b);
  const cosAngle = lmDot(BA, BC) / (lmMag(BA) * lmMag(BC));
  return (Math.acos(cosAngle) * 180) / Math.PI;
}
