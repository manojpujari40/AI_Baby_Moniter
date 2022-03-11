song = "";
objects = [];
status = "";

function preload(){
    song = loadSound("alert.mp3");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded(){
    console.log("model Loaded!");
    status = ture;
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(resutls);
    object = resutls;
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(status != ""){
        r = randome(255);
        g = randome(255);
        b = randome(255);
        objectDetector.detect(video, gotResults);
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + precent + "%", objects)
        }
    }
}