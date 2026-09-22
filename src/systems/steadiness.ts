// Core steadiness constants — see "Unhurried — Production Brief" (not in
// version control). Values are locked from the playtested prototype; do not
// tune without re-testing against it.

export const SAFE_SPEED = 2.2; // px/frame; below this + low jerk, steadiness recovers
export const HARSH_SPEED = 11; // px/frame; above this, steadiness collapses fast
export const JERK_LIMIT = 3.5; // sudden direction/speed changes penalized even under HARSH_SPEED

export const FOLLOW_EASE = 0.22; // candle eases toward pointer at this fraction of remaining distance/frame

export const RECOVERY_RATE = 0.006; // per frame, scaled by dtScale, when calm
export const PENALTY_BASE = 0.012;
export const PENALTY_OVER_SPEED = 0.05;
export const PENALTY_OVER_JERK = 0.04;

export const EXTINGUISH_THRESHOLD = 0.015;
export const RELIGHT_STEADINESS = 0.22;
