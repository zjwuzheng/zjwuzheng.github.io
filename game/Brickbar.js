var Brickbar = function(fps){
  var g = {
    actions:{},
    keydowns:{},
  }
  var canvas = document.querySelector('#id-canvas')
  var context = canvas.getContext('2d')
  g.canvas = canvas
  g.context = context

  g.drawImage = function(gameimage){
    g.context.drawImage(gameimage.image, gameimage.x, gameimage.y)
  }

  window.addEventListener('keydown',function(event){
    g.keydowns[event.key] = true
  })

  window.addEventListener('keyup',function(event){
    g.keydowns[event.key] = false
  })

  g.registerAction = function(key, callback){
    g.actions[key] = callback
  }

  window.fps = 30
  var runloop = function() {
      // events
      var actions = Object.keys(g.actions)
      for (var i = 0; i < actions.length; i++) {
          var key = actions[i]
          if(g.keydowns[key]) {
              // 如果按键被按下, 调用注册的 action
              g.actions[key]()
          }
      }
      // update
      g.update()
      // clear
      context.clearRect(0, 0, canvas.width, canvas.height)
      // draw
      g.draw()
      // next run loop
      setTimeout(function(){
          runloop()
      }, 1000/window.fps)
  }

  setTimeout(function(){
      runloop()
  }, 1000/fps)

  return g
}
