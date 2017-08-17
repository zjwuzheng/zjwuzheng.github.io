var Block = function (position) {
  var image = imagepath('image/block.png')
  var p = position
  var o = {
    image: image,
    x: p[0],
    y: p[1],
    w: 50,
    h: 20,
    alive: true,
    healthy: p[2] || 1,
  }
  o.kill = function(){
    o.healthy -=1
    if(o.healthy < 1){
      o.alive = false
    }
  }

  o.collide = function(b) {
      return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
  }
    return o
}
