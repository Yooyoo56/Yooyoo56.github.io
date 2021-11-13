// Draw the tile map
export default class TileMap {
    constructor(tileSize) {
      this.tileSize = tileSize;
      this.wall = this.createImage("wall.png");
      this.floor = this.createImage("floor.png");
      this.mom = this.createImage("mom.png");
      this.cookie = this.createImage("cookie.png");
      this.friend = this.createImage("friend.png");
      this.pudding = this.createImage("pudding.png");

    }

    createImage(fileName) {
      const img = new Image();
      img.src = `images/${fileName}`;
      return img; // <img src="">
    }
  
    // 1 - wall
    // 0 - floor

    map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    // 2 - friend
    // 3 - mom
    // 4 - cookie
    // 5 - pudding
    objects = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 4, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 2, 4, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 5, 0, 1, 1, 0, 4, 1, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 4, 1, 1, 0, 5, 0, 0, 4, 1, 4, 0, 0, 0, 0, 1, 1, 1, 0, 4, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 4, 0, 1, 1, 1, 5, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 4, 0, 2, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 0, 4, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 1],
      [1, 1, 4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 5, 0, 0, 4, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 4, 0, 0, 0, 1],
      [1, 2, 4, 0, 1, 1, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 1, 1, 1, 0, 1],
      [1, 0, 5, 1, 0, 0, 0, 5, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 4, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 5, 0, 1, 1],
      [1, 1, 4, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 4, 0, 1, 0, 2, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  
    draw(canvas, ctx) {
      if (!this.tileSize) return;
      this.setCanvasSize(canvas);
      this.clearCanvas(canvas, ctx);
      this.drawMap(ctx);
      this.drawObjects(ctx);
  
    }

    drawMap(ctx) {
      for (let row = 0; row < this.map.length; row++) {
        for (let column = 0; column < this.map[row].length; column++) {
          const maptile = this.map[row][column];
          let bgimage = null;
          switch (maptile) {
            case 1:
              bgimage = this.wall;
              break;
            case 0:
              bgimage = this.floor;
              break;
          }
            if (bgimage!= null){
              ctx.drawImage(
                bgimage,
                column * this.tileSize,
                row * this.tileSize,
                this.tileSize,
                this.tileSize
              );
            }
        }
      }
    }

// drawing objects (cookie, mom, friend)
    drawObjects (ctx) {
      for (let row = 0; row < this.objects.length; row++) {
        for (let column = 0; column < this.objects[row].length; column++) {
          const objectstile = this.objects[row][column];
          let fgimage = null;

          switch (objectstile){
            case 2:
              fgimage = this.friend;
              break;
            case 3:
              fgimage = this.mom;
              break;
            case 4:
              fgimage = this.cookie;
              break;
            case 5:
              fgimage = this.pudding;
              break;
          }
            // friend ou mom ou cookie
            if (fgimage != null){
              ctx.drawImage(
                fgimage,
                column * this.tileSize,
                row * this.tileSize,
                this.tileSize,
                this.tileSize
              );
            }
            
        }
      }
    }
    clearCanvas(canvas, ctx) {
     // ctx.fillStyle = "rgba(255, 255, 255, 0)"; //not necessarily needed! 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
    }
  
    setCanvasSize(canvas) {
      canvas.height = this.map.length * this.tileSize;
      canvas.width = this.map[0].length * this.tileSize;
    }
}