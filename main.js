Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    
    }
    
    console.log('ml5 verison', ml5.verison);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pjFJWhqZS/model.json', modelLoaded)
    
    function modelLoaded ()
    {
        console.log("modelLoaded");
    }