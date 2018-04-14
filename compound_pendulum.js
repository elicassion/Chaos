class Pendulum{
    constructor(sx, sy, ex, ey){
        this.sx = sx;
        this.sy = sy;
        this.ex = ex;
        this.ey = ey;
    }
}

class CoumpoundPendulum{

    constructor(canvas_id){
        this.canvas = document.getElementById(canvas_id);

    }

    begin(){
        let c = this.canvas;
        let canvasW = $(document).width();
        let canvasH = $(document).height();
        c.width = canvasW;
        c.height = canvasH;
        this.p1 = new Pendulum(canvasW/2, canvasH/2-60, canvasW/2, canvasH/2);
        this.p2 = new Pendulum(canvasW/2, canvasH/2, canvasW/2, canvasH/2+60);
        this.draw();
    }

    drawLine(ctx, l){
        ctx.beginPath();
        ctx.moveTo(l.sx, l.sy);
        ctx.lineTo(l.ex, l.ey);
        ctx.lineWidth = 10;
        ctx.stroke();
    }

    updateLine(ctx){
        this.drawLine(ctx, l);
    }

    draw(){
        let c = this.canvas;
        let ctx = c.getContext('2d');
        this.updateLine(ctx);
        window.requestAnimationFrame(this.draw);
    }
}