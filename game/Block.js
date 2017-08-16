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
  }
  o.kill = function(){
    o.alive = false
  }

  o.collide = function(b) {
      return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
  }
    return o
}
