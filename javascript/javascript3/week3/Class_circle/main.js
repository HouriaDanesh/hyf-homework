class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) 
    {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
      }
      draw () {
        const canvas = document.getElementById ('myCanvas');
        const getCtx = canvas.getContext ('2d');
        getCtx.beginPath ();
        getCtx.arc (this.x, this.y, this.radius, this.startAngle, this.endAngle, this.fillColor);
        getCtx.fillStyle = this.fillColor;
        getCtx.fill();
      }
    }
    const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');

    c1.draw();
  
  



  
