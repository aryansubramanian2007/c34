class ball {
    constructer(x,y,r) {
        var options = {
            isStatic: true
}
this.body=bodies.circle(x,y,r,options)
this.r = r;
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("orange");
    ellipse(pos.x,pos.y,this.r,this.r);
}
};