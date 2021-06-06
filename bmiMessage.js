
const result = document.getElementsByClassName('result');
const resultImage = document.getElementById('imgr');
const resultText = document.getElementById('text');
const callToAction = document.getElementById('btn');
const imageList = document.getElementsByClassName('imgr');

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
        Array.from(imageList).forEach(image => {
            image.style.display='none';
        });
        resultText.style.display = 'block';
        resultText.innerHTML = "Invalid Weight / Height !  Try again...";
        return ;
    }
    if(yourBmi < 18.5){
        message="so you are Underweight";
        color = "rgb(255 208 22)";
        imgSrc = 1;
    }
    else if(yourBmi >= 18.5 && yourBmi <= 24.9){
        message = "so you have Normal Weight";
        color='rgb(83 131 19)'
        imgSrc = 2;
    }
    else if(yourBmi > 24.9 && yourBmi <= 29.9){
        message = "so you are Overweight";
        color="#fd802e";
        imgSrc = 3;
    }
    else if(yourBmi > 29.9 && yourBmi <= 34.9){
        message = "so you are Obese";
        color = "rgb(242 100 80)";
        imgSrc = 4;
    }
     else {message = "so you are Extremely Obese";
        color = "rgb(203 32 40)";
        imgSrc = 5;
    } 
    Array.from(imageList).forEach(image => {
        image.style.display='none';
    });
    Array.from(imageList)[imgSrc-1].style.display='block';
    let finalMessage = `Your BMI is ${Math.round(yourBmi)}, ${message}.`;
    resultText.style.display = 'block';
    resultText.innerHTML = finalMessage;
    resultText.style.backgroundColor=color;
}
let callBmi=()=>{
    bmi();
}
callToAction.addEventListener('click', (e)=>{callBmi();});

