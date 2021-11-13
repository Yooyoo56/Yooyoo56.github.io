export default class Tabby {
constructor(map, objects) {
    this.map = map;
    this.objects = objects;
    this.eatenCookies = 0;
    this.girlFriend = 0;
    this.pudding = 0;
    const img = document.createElement("img");
    
    //load the image of tabby
    img.onload = () => {
    this.img = img;
    this.w = 45;
    this.h = 45;
    this.pixelSize = 45;
    this.x = 1;
    this.y = 1;
    };
    img.src = "images/front_1.png";
}

countRemainingCookies() {
     // compte les cookies dans this.objects
    var count = 0;
    for (let row = 0; row < this.objects.length; row++){
        for (let column = 0; column < this.objects[row].length; column++){
            if (this.objects[row][column] === 4){
                count++;
            }
        }
    }
      // return 
    return count;
}

draw(ctx) {
    if (!this.img) return;
    // if this img is not loaded yet, don't draw
    ctx.drawImage(
    this.img,
    this.x * this.pixelSize,
    this.y * this.pixelSize,
    this.w,
    this.h
    );
}

//tabby's action when he sees cookies, mom and girlfriend
action() {
    //current position de tabby
    const currentTabbyObject = this.objects[this.y][this.x];
    // when tabby eats cookie
    if (currentTabbyObject === 4) {
    this.eatCookie(this.y, this.x);
    }
    // when tabby meets friends
    if (currentTabbyObject === 2) {
    this.seeFriend(this.y, this.x);
    }
    //when tabby meets mom : two cases (pick all the cookies and not pick all the cookies)
    if (currentTabbyObject === 3) {
    this.pickCookie(this.y, this.x);
    }
    if (currentTabbyObject === 5){
    this.eatPudding(this.y, this.x);
    }
}

  //tabbymoves
moveLeft() {
    if (this.map[this.y][this.x - 1] !== 1) {
      // tabby n'est pas dans un mur
    this.x -= 1;
    this.action();
    }
}
moveRight() {
    if (this.map[0].length > this.x + 1) {
    if (this.map[this.y][this.x + 1] !== 1) {
        this.x += 1;
        this.action();
    }
    }
}
moveUp() {
    if (this.y - 1 > 0) {
    if (this.map[this.y - 1][this.x] !== 1) {
        this.y -= 1;
        this.action();
    }
    }
}
moveDown() {
    if (this.y + 1 > 0) {
    if (this.map[this.y + 1][this.x] !== 1) {
        this.y += 1;
        this.action();
    }
    }
}

  // If tabby sees a girlfriend, tabby disappear and  GameOver!
seeFriend(nextY, nextX) {
    this.girlFriend += 1;
    this.objects[nextY][nextX] = 0;
    this.img = 0;
    Swal.fire({
        title: 'GAME OVER!',
        text: 'Tabby decided to hangout with his girlfirend!',
        icon: 'error',
        confirmButtonText: 'Game Over!'
    }).then(function (){
        document.location.reload();
        clearInterval(gameLoop, 1000 / 60);
})
}

  //pick all cookies
eatCookie(nextY, nextX) {
    this.eatenCookies += 4;
    this.objects[nextY][nextX] = 0;
    this.objects.cookie = 0;
    var pointsEl = document.querySelector('span#points');
    pointsEl.innerHTML = `${this.eatenCookies}`;
}

//eat Pudding = gameover
eatPudding(nextY, nextX){
    this.pudding += 1;
    this.img = 0;
    this.objects[nextY][nextX] = 0;
    Swal.fire({
        title: 'GAME OVER!',
        text: 'Tabby ate magical pudding: tabby forgot his errands!',
        icon: 'error',
        confirmButtonText: 'Game Over!'
    }).then (function (){
        document.location.reload();
        clearInterval(gameLoop, 1000 / 60);
    })
}

//pick cookies and go to mom => 2 cases
pickCookie(nextY, nextX) {
    if (this.countRemainingCookies() >= 1) {
        Swal.fire({
            title: 'Game has not finished yet!',
            text: 'Tabby, please take all the cookies!🍪🍪🍪',
            icon: 'warning',
            confirmButtonText: 'Go get Cookies!'
        })
    }
    else if (this.countRemainingCookies() === 0) {
        this.objects[nextY][nextX] = 0;
        this.img = 0;
        Swal.fire({
            title: 'Game finished!',
            text: 'Tabby, thankyou for the cookies! Lets go home!',
            icon: 'success',
            confirmButtonText: 'Lets go home!'
        })
    }
}
}
