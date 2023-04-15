function preload() {

}
function setup() {
    canvas = createCanvas(600,400);
    canvas.position(100,200);
    video = createCapture(VIDEO);
    video.hide();   
    tint_color = "";
}
function draw() {
    image(video,150,100,300,200);
    fill(0,128,69);
    stroke(108,87,128);
   
    circle(200,330,50);
    circle(400,330,50);

    fill(255,0,0);
    stroke(108,87,128);

    rect(60,250,90,50);
    rect(450,210,120,90);
    
}
function take_snapshot() {
    save("My_pICTURE.png");
}