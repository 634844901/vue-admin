function MyLizi() {
  const oncanvas = document.querySelector('.bubble')
  console.log(oncanvas)
  const w = window.innerWidth
  const h = window.innerHeight
  const colorArray = ['#e08031', '#c7ceb2', '#199475', '#0b6148', '#044d22']
  var canCon = oncanvas.getContext('2d')
  function ramdow(min, max) {
    return Math.random() * (max - min) + min
  }
  function Dall() {}
  // 小泡泡的初始化
  Dall.prototype = {
    init() {
      this.x = ramdow(0, w)
      this.y = ramdow(0, h)
      this.r = ramdow(0, 3)
      this.color = colorArray[Math.floor(ramdow(0, 5))]// color
      this.xr = ramdow(-1, 1)
      this.xy = ramdow(-1, 1)
      this.D = 50// 鼠标周围50个小泡泡
    },
    drow() {
      canCon.beginPath()
      canCon.fillStyle = this.color
      canCon.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      canCon.fill()
    },
    updata() {
      this.x += this.xr
      this.y += this.xy
      if (this.x - this.r < 0 || this.x + this.r > w) {
        this.xr = -this.xr
      }
      if (this.y - this.r < 0 || this.y + this.r > h) {
        this.xy = -this.xy
      }
      this.xD = (positionX - this.x) < 0 ? -(positionX - this.x) : (positionX - this.x)

      this.yD = (positionY - this.y) < 0 ? -(positionY - this.y) : (positionY - this.y)
      if (this.xD < this.D && this.yD < this.D) {
        this.xr += 0.1
        this.xy += 0.1
      } else if (this.xr > 0.1 && this.xy > 0.1 && this.xD > this.D && this.yD > this.D) {
        this.xr -= 0.1
        this.xy -= 0.1
      }
      this.drow()
    }
  }
  const ballArray = []
  function createBall() {
    var Ball = new Dall()
    Ball.init()
    Ball.drow()
    ballArray.push(Ball)
  }
  function numberball(num) {
    for (var i = 0; i <= num; i++) {
      createBall()
    }
  }
  numberball(3000)
  setInterval(() => {
    canCon.clearRect(0, 0, w, h)
    for (const i of ballArray) {
      i.updata()
    }
  }, 1000 / 60)
  let positionX, positionY
  oncanvas.onmousemove = function() {
    const ev = window.event
    positionX = ev.clientX
    positionY = ev.clientY
  }
}
export default MyLizi
