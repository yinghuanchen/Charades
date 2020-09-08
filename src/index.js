//import Drawing from './drawing/drawing';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("draw");
    const btn = document.getElementById("clear");
    // new Drawing(canvas);

    const ctx = canvas.getContext('2d');
    
    // last known position
    let pos = { x: 0, y: 0 };

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', setPosition);
    canvas.addEventListener('mouseenter', setPosition);
    btn.addEventListener('click',() => ctx.clearRect(0, 0, canvas.width, canvas.height));

    // new position from mouse event
    function setPosition(e) {
        pos.x = e.clientX - canvas.offsetLeft;
        pos.y = e.clientY - canvas.offsetTop;
    }

    function draw(e) {
        // mouse left button must be pressed
        if (e.buttons !== 1) return;

        ctx.beginPath(); // begin

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#c0392b';

        ctx.moveTo(pos.x, pos.y); // from
        setPosition(e);
        ctx.lineTo(pos.x, pos.y); // to

        ctx.stroke(); // draw it!
    }


});