function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 100;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function (){
        this.top +=100;
        console.log('ok:'  +this.top)
    }
    this.moveLeft =function (){
        this.left -=100;
        console.log('ok:' +this.left);
    }
    this.moveTop =function (){
        this.top -=100;
        console.log('ok:' +this.top);
    }

}

var hero = new Hero('meo.png', 20, 30, 200);
var a=true;
function start(){
    if (a===true) {
        if (hero.left < window.innerWidth - hero.size) {
            hero.moveRight();
        } else if (hero.top < window.innerHeight - hero.size) {
            hero.moveDown();
        } else {
            a = false;
        }
    }else {
            if (hero.left >0) {
                hero.moveLeft();
            } else if (hero.top >0) {
                hero.moveTop();
            }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();