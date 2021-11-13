import TileMap from "./TileMap.js";
import Tabby from "./tabby.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileSize = 45;

const tileMap = new TileMap(tileSize);
const map = tileMap.map
const objects = tileMap.objects;
const tabby = new Tabby(map, objects);

function gameLoop() {
  tileMap.draw(canvas, ctx);
  tabby.draw(ctx);
}

setInterval(gameLoop, 1000 / 60);

function hideShow(){
  var x = document.getElementById("game");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else {
    x.style.display = "none";
  }
}

hideShow();

document.onkeydown = function (e){
  if (!tabby) return ;

  switch (e.key){
    case 'ArrowLeft':
    tabby.moveLeft();
    break;
    case 'ArrowRight':
    tabby.moveRight();
    break;
    case 'ArrowUp':
    tabby.moveUp();
    break;
    case 'ArrowDown':
    tabby.moveDown();
    break;
  }
}

