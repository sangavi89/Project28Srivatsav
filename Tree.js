class Tree {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.treeWidth=500;
        this.treeHeight=500;

        this.treeBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeHeight,{isStatic:true})
        this.image=loadImage('images/tree.png')

        World.add(world, this.treeBody)
     
		

    }      

    display(){

    var pos=this.treeBody.position;

    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, this.x, this.y, this.treeWidth, this.treeHeight)
    pop()
    

    }
}