import "./style.css";

const canvas = document.querySelector<HTMLCanvasElement>("#scene")!;
const ctx = canvas.getContext("2d")!;

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

// Cursor stays visible until tracking has actually begun — hiding it
// unconditionally from load makes a resting mouse look like a broken page.
function beginTracking(x: number, y: number) {
  canvas.classList.add("tracking");
  pointer.x = x;
  pointer.y = y;
}

const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

canvas.addEventListener("pointermove", (e) => beginTracking(e.clientX, e.clientY));
canvas.addEventListener("pointerenter", (e) => beginTracking(e.clientX, e.clientY));

function frame() {
  try {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Game systems (steadiness, rooms, lanterns, doorway, wind) hook in here.
  } catch (err) {
    // A single bad value inside this callback must not hard-freeze the page
    // silently — see "NaN crash" in the production brief.
    console.error("Unhurried: render loop error", err);
  }
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
