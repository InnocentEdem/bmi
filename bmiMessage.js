
const result = document.getElementsByClassName('result');
const resultImage = document.getElementById('imgr');
const resultText = document.getElementById('text');
const callToAction = document.getElementById('btn');

let bmi=()=>{
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let yourBmi = weight/(height*height);
    let message;
    let color;
    let imgSrc;
    console.log(weight);
    console.log(height);
    console.log(yourBmi);
     if(isNaN(yourBmi)||!isFinite(yourBmi)){
        document.getElementById('height').style.border = 'solid 1px red';   
        document.getElementById('weight').style.border = 'solid 1px red';
        resultText.style.display = 'block';
        resultText.innerHTML = "Invalid Weight / Height !  Try again...";
        return ;
    }
    if(yourBmi < 18.5){
        message="so you are Underweight";
        color = "rgb(255 208 22)";
        imgSrc = 'images/underweight.png';
    }
    else if(yourBmi >= 18.5 && yourBmi <= 24.9){
        message = "so you have Normal Weight";
        color='rgb(83 131 19)'
        imgSrc = 'images/normal-weight.png';
    }
    else if(yourBmi >= 25 && yourBmi <= 29.9){
        message = "so you are Overweight";
        color="#fd802e";
        imgSrc = 'images/overweight.png';
    }
    else if(yourBmi >= 30 && yourBmi <= 34.9){
        message = "so you are Obese";
        color = "rgb(242 100 80)";
        imgSrc = 'images/obese.png';
    }
     else {message = "so you are Extremely Obese";
    color = "rgb(203 32 40)";
    imgSrc = 'images/extreme.png';
    } ``
    
    let finalMessage = `Your BMI is ${Math.round(yourBmi)}, ${message}.`;
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

