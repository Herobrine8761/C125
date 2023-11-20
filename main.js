noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Xv7rfTGf/Clown-Nose.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw (){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 20, 20);
}

function take_snapshot(){
    save('Clown_Nose_Image.png');
}

function modelLoaded(){
    console.log('PoseNet has been loaded successfully.');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-7;
        noseY = results[0].pose.nose.y-7;
        console.log("Nose X: " + noseX);
        console.log("Nose Y: " + noseY);
    }
}