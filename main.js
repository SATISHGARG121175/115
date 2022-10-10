function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eGiuZFEK2/model.json',modelReady);
}
function modelReady()
{
  classifier.classify(gotResult);
}
function gotResults(error,results)
{
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random()* 255)+1;
    random_number_g = Math.floor(Math.random()* 255)+1;
    random_number_b = Math.floor(Math.random()* 255)+1;
    document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+" "+random_number_b+")";
    document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+" "+random_number_b+")";
    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');
    if (result[0].label =="Clap") {
      img.src = 'dog.gif';function startClassification()
      {
        navigator.mediaDevices.getUserMedia({ audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eGiuZFEK2/model.json',modelReady);
      }
      function modelReady()
      {
        classifier.classify(gotResult);
      }
      function gotResults(error,results)
      {
        if (error) {
          console.error(error);
        } else {
          console.log(results);
          random_number_r = Math.floor(Math.random()* 255)+1;
          random_number_g = Math.floor(Math.random()* 255)+1;
          random_number_b = Math.floor(Math.random()* 255)+1;
          document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
          document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
          document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+" "+random_number_b+")";
          document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+" "+random_number_b+")";
          img = document.getElementById('alien1');
          img1 = document.getElementById('alien2');
          img2 = document.getElementById('alien3');
          img3 = document.getElementById('alien4');
          if (result[0].label =="Clap") {
            img.src = 'dog.gif';
            img1.src = 'download.jpg';
            img2.src='cow.jpg.jpeg'
          } else if (result[0].label =="Bell") {
            img.src = 'dog.img';
            img1.src = 'download.gif';
            img2.src = 'cow.jpg.jpeg';
          }  else if (result[0].label =="snap") {
            img.src = 'dog.img';
            img1.src = 'download.jpg';
            img2.src = 'cow.jpg.jpeg';
          } 
        }