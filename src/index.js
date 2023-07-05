const canvas = document.getElementById("jump");
const contexto = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 200;

const sccaleRatio = null;

function setScreen() {
  scaleRatio = getScaleRatio();
}

function getScaleRatio() {
  const screenHeight = Math.min(
    window.innerHeight, document.documentElement.clientHeight
  );

  const screenWidth = Math.min(
    window.innertWidh, document.documentElement.clientWidth
  );
}
// minuto 7:18
