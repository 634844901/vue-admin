class DrawParticle {
  constructor(obj = {}) {
    this.obj = obj
    this.canvas = obj.el
    this.ctx = this.canvas.getContext('2d')

    this.width = obj.el.clientWidth
    this.height = obj.el.clientHeight
    this.canvas.width = this.width
    this.canvas.height = this.height

    this.timer = null

    this.mouseX = -1
    this.mouseY = -1
    this.ponitArr = [] // 点的数组

    this.zoom = this.getZoom()

    this.initSCreen() // 初始化画布大小
  }

  initSCreen() {
    // console.log(this.obj)
    const num = this.obj.number || 200
    for (var i = 0; i < num; i++) {
      this.ponitArr.push(this.creatPoint())
    }

    // 开始绘制线条点
    this.ctx.fillStyle = 'rgba(66,172,125,0.1)'
    this.ctx.strokeStyle = '#fff'
    this.ctx.lineWidth = 1 * this.zoom
    // this.ctx.fillRect(0,0,this.width,this.height);
    this.drawCanvas(this.ctx)
    // 修改鼠标
    this.canvas.addEventListener('mousemove', (e) => {
      e = e || event
      this.mouseX = e.offsetX
      this.mouseY = e.offsetY
    })
  }

  drawCanvas(ctx) {
    ctx.clearRect(0, 0, this.width, this.height)
    // ctx.fillRect(0,0,this.width,this.height);
    this.ponitArr.forEach((item, index) => {
      ctx.beginPath()
      // 移动圆点
      item.x += item.xsKew
      item.y += item.ysKew
      // 处理边缘碰撞
      if (item.x <= item.r || item.x >= this.width - item.r) {
        item.xsKew = -item.xsKew
        item.x = item.x + item.xsKew
      }
      if (item.y <= item.r || item.y >= this.height - item.r) {
        item.ysKew = -item.ysKew
        item.y = item.y + item.ysKew
      }

      ctx.arc(item.x, item.y, item.r, 0, 2 * Math.PI)

      ctx.fill()

      this.ponitArr.forEach((_item, _index) => {
        if (index !== _index) {
          this.drawLine(ctx, _item.x, _item.y, item.x, item.y)
        }
        // this.drawLine(ctx, item.x, item.y, _item.x, _item.y);
      })

      if (this.mouseX > 0 && this.mouseY > 0) {
        this.drawLine(ctx, this.mouseX, this.mouseY, item.x, item.y)
      }
    })

    if (window.requestAnimationFrame) this.timer = window.requestAnimationFrame(this.drawCanvas.bind(this, ctx))
    else if (window.msRequestAnimationFrame) this.timer = window.msRequestAnimationFrame(this.drawCanvas.bind(this, ctx))
    else if (window.mozRequestAnimationFrame) this.timer = window.mozRequestAnimationFrame(this.drawCanvas.bind(this, ctx))
    else if (window.webkitRequestAnimationFrame) this.timer = window.webkitRequestAnimationFrame(this.drawCanvas.bind(this, ctx))
  }

  drawLine(ctx, p1x, p1y, p2x, p2y) {
    var xDistance = Math.abs(p1x - p2x)// 计算两点间的x距离
    var yDistance = Math.abs(p1y - p2y)// 计算两点间的y距离
    var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance)
    // 随机颜色
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    if (distance <= 120) {
      ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'// 解决窗口缩放时圆点变黑
      ctx.strokeStyle = 'rgba(255,255,255,' + (1 - distance / 120) + ')'
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(p1x, p1y)
      ctx.lineTo(p2x, p2y)
      ctx.stroke()
      ctx.restore()
    }
  }

  creatPoint() {
    const xsKew = (Math.random() - 0.7) * this.zoom * 2 // 偏移量
    const ysKew = (Math.random() - 0.7) * this.zoom * 2

    const r = ~~(Math.random() * 5 * this.zoom)
    const x = ~~(Math.random() * (this.width - r)) + 2 * r // x轴位置
    const y = ~~(Math.random() * (this.height - r)) + 2 * r // y轴位置
    return {
      x, y, r, xsKew, ysKew
    }
  }

  getZoom() {
    return window.innerWidth / window.screen.width
  }
}

export default DrawParticle
