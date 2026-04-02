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

export const LM_FINGERS = {
  THUMB: [LM.THUMB_CMC, LM.THUMB_MCP, LM.THUMB_IP, LM.THUMB_TIP],
  INDEX: [LM.INDEX_MCP, LM.INDEX_PIP, LM.INDEX_DIP, LM.INDEX_TIP],
  MIDDLE: [LM.MIDDLE_MCP, LM.MIDDLE_PIP, LM.MIDDLE_DIP, LM.MIDDLE_TIP],
  RING: [LM.RING_MCP, LM.RING_PIP, LM.RING_DIP, LM.RING_TIP],
  PINKY: [LM.PINKY_MCP, LM.PINKY_PIP, LM.PINKY_DIP, LM.PINKY_TIP]
} as const satisfies Record<string, readonly LM[]>;

export const LM_MCPS = Object.values(LM_FINGERS).map((f) => f[0]) as readonly LM[];
export const LM_TIPS = Object.values(LM_FINGERS).map((f) => f[3]) as readonly LM[];
export const LM_FINGERTIPS = Object.values(LM_FINGERS)
  .slice(1)
  .map((f) => f[3]) as readonly LM[];

export const NUM_LMS = Object.values(LM).length;

export const FINGERS = {
  THUMB: 0,
  INDEX: 1,
  MIDDLE: 2,
  RING: 3,
  PINKY: 4
} as const;

export type Finger = keyof typeof FINGERS;

export function handScale(landmarks: Landmark[]) {
  // Get hand scale in 3D space based on palm size from landmarks
  const palmWidth = lmDistance(landmarks, LM.INDEX_MCP, LM.PINKY_MCP);
  const palmLength = lmDistance(landmarks, LM.WRIST, LM.MIDDLE_MCP);

  // When palm is facing camera (both width and length are maximized), length = RATIO * width.
  const PALM_RATIO = 1.58;
  // Correct for this factor
  return Math.max(palmWidth * PALM_RATIO, palmLength, 0.01);
}

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
