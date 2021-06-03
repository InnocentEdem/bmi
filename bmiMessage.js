
const result = document.getElementsByClassName('result');
const resultImage = document.getElementById('imgr');
const resultText = document.getElementById('text');

const callToAction = document.getElementById('btn');



let bmi=()=>{
   
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var yourBmi = weight/(height*height);
    var message;
    var color;
    var imgSrc;
    console.log(weight);
    console.log(height);
    console.log(yourBmi);
     if(isNaN(yourBmi)||!isFinite(yourBmi)){
        document.getElementById('height').style.border = 'solid 2px red';   
        document.getElementById('weight').style.border = 'solid 2px red';
        resultText.style.display = 'block';
        resultText.innerHTML = "Invalid Weight / Height !  Try again...";

        return ;
    }
    if(yourBmi < 18.5){
        message="so you are Underweight";
        color = "rgb(255 208 22)";
        imgSrc = './underweight.png';
    }
    else if(yourBmi >= 18.5 && yourBmi <= 24.9){
        message = "so you have Normal Weight";
        color='rgb(83 131 19)'
        imgSrc = 'normal-weight.png';
    }
    else if(yourBmi >= 25 && yourBmi <= 29.9){
        message = "so you are Overweight";
        color="#fd802e";
        imgSrc = 'overweight.png';
    }
    else if(yourBmi >= 30 && yourBmi <= 34.9){
        message = "so you are Obese";
        color = "rgb(242 100 80)";
        imgSrc = 'obese.png';
    }
     else {message = "so you are Extremely Obese";
    color = "rgb(203 32 40)";
    imgSrc = 'extreme.png';
    }
    
    var finalMessage = `Your BMI is ${Math.round(yourBmi)}, ${message}.`;
    resultImage.style.display = 'block';
    resultText.style.display = 'block';
    resultImage.src = imgSrc;
    resultText.innerHTML = finalMessage;
    resultText.style.backgroundColor=color;


}
let callBmi=()=>{
    bmi();
}
callToAction.addEventListener('click', (e)=>{callBmi();});

