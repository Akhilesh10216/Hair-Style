hairX=0;
hairY=0;

function preload(){
    hair_style=loadImage('https://i.postimg.cc/ydPv7r1S/Hair.jpg')
}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.centre;
    video=createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function gotPose(results){
    if (results.length>0){
        console.log(results);
        hairX=results[0].pose.nose.x;
        hairY=results[0].pose.nose.y-150;
        console.log("hair x=" +hairX);
        console.log("hair y=" +hairY);
    }
}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(hair_style,hairX,hairY,60,60)
}

function take_snapshot(){
    save('myFilterHair.png')
}