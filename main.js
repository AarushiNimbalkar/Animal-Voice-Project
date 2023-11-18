https://teachablemachine.withgoogle.com/models/6Z-73sVWe/

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("rsult_label").innerHTML = 'I can hear - ' +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")"
        document.getElementById("result_confidence").requestFullscreen.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
    }
}

img = document.getElementById('Listening');

if(results[0].label == "Cat") 
{
    img.src = 'Cat.jpg';
    Cat = Cat + 1;
}
if(results[0].label == "Dog") 
{
    img.src = 'Dog.jpg';
    Dog = Dog + 1;
}
if(results[0].label == "Lion") 
{
    img.src = 'Lion.jpg';
    Lion = Lion + 1;
}


