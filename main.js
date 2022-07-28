function preload(){

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video,100,100,200,200)
    fill("red");
    stroke("red");
    circle(50,50,50)
    circle(350,50,50)
    circle(50,350,50)
    circle(350,350,50)
    fill("green")
    stroke("green")
    rect(75,40,250,25)
    rect(75,340,250,25)
    rect(40,75,25,250)
    rect(340,75,25,250)

}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}