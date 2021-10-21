export default class DrawSnow {
    constructor(count) {
      this.canvas = document.getElementById('canvas');
      this.content = this.canvas.getContext('2d')
      this.width = this.canvas.width = 1200;
      this.height = this.canvas.height = 1000;
      this.r = 2.5;
  
      this.timer = null;
      this.snowArray= [];
      this.count = count;
  
      this.useOffCanvas = false; // 是否使用离屏渲染
      this.init()
    }

    init() {
        let OffScreen = '';
    
        if (this.useOffCanvas) {
          OffScreen = new OffScreen();
        }
    
        for (let i = 0; i < this.count; i++) {
          let x = this.width * Math.random();
          let y = this.height * Math.random();
    
          this.snowArray.push({
            x: x,
            y: y
          });
        this.draw(x, y);
        }
        this.animate();
      }

      draw(x, y) {
          this.content.beginPath();
          this.content.arc(x, y, 10, 0, Math.PI * 2);
          this.content.fillStyle = 'white';
          this.content.fill();
      }

      animate() {
        this.content.clearRect(0, 0, this.width, this.height);
    
        for (let i in this.snowArray) {
          let snow = this.snowArray[i];
    
          snow.y += 2;
          if (snow.y >= this.height + 10) {
            snow.y = Math.random() * 50;
          }
    
          this.draw(snow.x, snow.y);
        }
        this.timer = requestAnimationFrame(() => {
          this.animate();
        });
      }
    
    
  }
  