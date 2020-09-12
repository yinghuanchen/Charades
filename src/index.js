import Drawing from './drawing';
import Game from './game';
import "@babel/polyfill";
import Round from './round';
import "./styles/index.scss";
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("draw");
  new Drawing(canvas);
  new Game();
  //new Round("owl");
});