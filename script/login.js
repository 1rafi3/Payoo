// console.log("angta lege geche");

document.getElementById('login-btn')
.addEventListener('click',function(){
    //1 -> get the mobile number input 
    const mobileNumber = document.getElementById('input-mobile');
    const givenNumber = mobileNumber.value;
    console.log(givenNumber);
    //2 -> get the pin input
    const pinNumber = document.getElementById('input-pin');
    const givenPin = pinNumber.value;
    console.log(givenPin);
    //3 -> match pin & mobile number 
    if(givenNumber == '0123456789' && givenPin == '1234') {
        //3-1 if truee::: -> alert>homepage
        alert('login Success');
        window.location.assign("/homepage.html");
    } else{
        //3-1 if false::: -> alert>return
        alert('login failed');
        return;
    }
})