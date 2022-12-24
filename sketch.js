var arr=[];
class Circle{
  constructor(x,y,index){
    this.x=x;
    this.y=y;
    this.r=42;
    this.index=index;
  }
   make=function(){
    stroke(255);
    fill(255);
    ellipse(this.x,this.y,this.r,this.r);
    fill(0);
    text(this.index,this.x-4,this.y+4);
  }
  move=function(){
    this.x=this.x+random(-1,1);
    this.y=this.y+random(-1,1);
  }
  clicked=function(){
    this.x=mouseX;
    this.y=mouseY;
  }
}
function setup() {
    createCanvas(800, 800);
    textSize(16);
    for(let i=0;i<5;i++){
      arr.push(new Circle(random(0,750),random(0,750),i+1))
    }
    c1= new Circle(100,100);
  }
  
function draw() {
   background(0);
   stroke(255);
    arr.forEach(element => {
      element.make();
      element.move();
    });
    for(let i=0;i<5;i++){
      for(let j=i+1;j<5;j++){
        stroke(255);
        line(arr[i].x,arr[i].y,arr[j].x,arr[j].y);
      }
    }
  }

  function mousePressed(){
    for(let i=0;i<5;i++){
        if(dist(mouseX,mouseY,arr[i].x,arr[i].y)<42){
          arr[i].clicked();
          console.log(arr[i].index);
        }
    }
  }
