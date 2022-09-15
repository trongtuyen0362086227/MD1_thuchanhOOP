class MyPoint{
    x;
    y;
    radius;
    color;

    constructor(x, y, radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color =color
    }
    setX(x){
        this.x=x
    }
    getX(){
        return this.x
    }
    setY(y){
        this.y=y
    }
    getY(){
        return this.y
    }
    setRadius(radius){
        this.radius=radius
    }
    getRadius(){
        return this.radius
    }

    // getRandomHex(){
    //     return Math.floor(Math.random()*255)}
    // getRandomColor(){
    //
    //     let red =this.getRandomHex();
    //     let green = this.getRandomHex();
    //     let blue = this.getRandomHex();
    //     return "rgb(" + red + "," + blue + "," + green +")";
    // }
    drawCircle(ctx){
        ctx.beginPath()
        ctx.fillStyle=this.color
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)
        ctx.fill()
    }

}