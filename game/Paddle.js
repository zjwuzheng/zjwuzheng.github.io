var Paddle = function () {
  var image = imagepath('image/paddle.png')
  var o = {
    image: image,
    x: 150,
    y: 250,
    v: 3,
  }
  o.moveLeft = function(){
    if(o.x>0){
      o.x -= o.v
    }
  }
  o.moveRight = function(){
    if((o.x+o.image.width)<400){
      o.x += o.v
    }
  }

  o.collide = function(ball){
    if (ball.y + ball.image.height >o.y ){
      if (ball.x > o.x && ball.x < o.x + o.image.width){
      return true
    }
  }
      return false
    }
  return o
}
