
export default class Drawing  {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pos = { x: 0, y: 0 };
        this.canvas.addEventListener('mousemove', this.draw);
        this.canvas.addEventListener('mousedown', this.setPosition);
        this.canvas.addEventListener('mouseenter', this.setPosition);
        const btn = document.getElementById("clear");
        btn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
        this.draw = this.draw.bind(this);
        this.setPosition = this.setPosition.bind(this); 
    }

    setPosition(e) {
        this.pos.x = e.clientX - this.canvas.offsetLeft;
        this.pos.y = e.clientY - this.canvas.offsetTop;
    }

    draw(e) {
        // mouse left button must be pressed
        if (e.buttons !== 1) return;

        this.ctx.beginPath(); // begin

        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#c0392b';

        this.ctx.moveTo(this.pos.x, this.pos.y); // from
        setPosition(e);
        this.ctx.lineTo(this.pos.x, this.pos.y); // to

        this.ctx.stroke(); // draw it!
    }

    // erase() {
    //     const w = canvas.width;
    //     const h = canvas.height;
    //     this.ctx.clearRect(0, 0, w, h);
    // }
}




//window.addEventListener('resize', resize);


// // new position from mouse event
// function setPosition(e) {
//     pos.x = e.clientX - canvas.offsetLeft;
//     pos.y = e.clientY - canvas.offsetTop;
// }

// function draw(e) {
//     // mouse left button must be pressed
//     if (e.buttons !== 1) return;

//     ctx.beginPath(); // begin

//     ctx.lineWidth = 5;
//     ctx.lineCap = 'round';
//     ctx.strokeStyle = '#c0392b';

//     ctx.moveTo(pos.x, pos.y); // from
//     setPosition(e);
//     ctx.lineTo(pos.x, pos.y); // to

//     ctx.stroke(); // draw it!
// }