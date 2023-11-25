const passWordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890";
const specialChar = "~`!@#$%^&*()_+=-?<>,.";
const allCase = upperCase + lowerCase + num + specialChar;

function createPassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length){
        password += allCase[Math.floor(Math.random() * allCase.length)];

    }
    passWordBox.value = password;
}


function copyPass(){
    passWordBox.select();
    document.execCommand("copy");
}