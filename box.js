class box{
constructor(x,y,width,height){
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);

}
display(){
    fill(225,0,0);
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}

}