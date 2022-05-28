class Ground
{
    constructor(x,y,w,h){
        let option = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,option)
        this.w = w
        this.h = h

        World.add(world,this.body)
    }


    show() {
        var cor = this.body.position
        push()
        rectMode(CENTER)
        stroke(255)
        fill(127)
        rect(cor.x,cor.y,this.w,this.h)
        pop()
        
    }
}