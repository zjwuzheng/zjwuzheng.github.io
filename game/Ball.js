var Ball = function () {
  var image = imagepath('image/ball.png')
  var o = {
    image: image,
    x: 150,
    y: 150,
    vx: 3.5,
    vy: 3.5,
    fired: false,
  }

  o.ft =function(){
    o.vy *=-1
  }

  o.fire = function(){
    o.fired = true
  }
  o.move = function(){
    if (o.fired){
      if(o.x <0 || o.x >400){
        o.vx *=-1
      }
      if(o.y <0 || o.y >300){
        o.vy *=-1
      }
    o.x +=o.vx
    o.y +=o.vy
  }
  }
  return o
}
