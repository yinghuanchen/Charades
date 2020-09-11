
export default class Drawing  {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.pos = { x: 0, y: 0 };
      // bind function 
      this.draw = this.draw.bind(this);
      this.setPosition = this.setPosition.bind(this);
      // addEventListener
      this.canvas.addEventListener("mousemove", this.draw);
      this.canvas.addEventListener("mousedown", this.setPosition);
      this.canvas.addEventListener("mouseenter", this.setPosition);
      const clearBtn = document.getElementById("clear");
      clearBtn.addEventListener("click", () =>
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
      );
      const colorBtns = document.getElementsByClassName("color-btn");
      for (let i = 0; i < colorBtns.length; i++) {
        colorBtns.item(i).addEventListener("click", () => {
          this.strokeStyle = colorBtns.item(i).id;
          this.lineWidth = 5;
          if (colorBtns.item(i).id == "#e0cab3") this.lineWidth = 25;
        });
      }

      // default styling
      this.lineWidth = 5;
      this.strokeStyle = '#A72C21';
    }

    setPosition(e) {
        this.pos.x = e.clientX - this.canvas.offsetLeft-520;
        this.pos.y = e.clientY - this.canvas.offsetTop - 170;
    }

    setColor(color) {
        this.strokeStyle = color; 
    }

    draw(e) {
        // mouse left button must be pressed
        if (e.buttons !== 1) return;

        this.ctx.beginPath(); // begin

        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = this.strokeStyle;

        this.ctx.moveTo(this.pos.x, this.pos.y); // from
        this.setPosition(e);
        this.ctx.lineTo(this.pos.x, this.pos.y); // to

        this.ctx.stroke(); // draw it!
    }
}
