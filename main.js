Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>";
    });
}
    
console.log("ml5 version is PUPPY(just kidding) its", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yL-zh6p17/model.json",modelLoaded);


function modelLoaded(){
    console.log("model is puppy");
}
