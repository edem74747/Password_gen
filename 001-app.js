// Required variables.

let characters =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','0','P','Q','R','S','T','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0,'-','/',';',':','[',']','{','}','!','@','|','$','%','^','&','*','(',')','_','+','=','<','>'];

let area = document.querySelector('input');

const generateBtn = document.getElementById('btn');

const copyButton = document.querySelector('.copyBtn');

console.log(copyButton);

generateBtn.addEventListener('click',function(){
let numbers = '';

for(let i = 0;i<13;i++){
    numbers+=characters[theRandom()]
}

function theRandom(){
    return Math.floor(Math.random() * characters.length) ;
}
console.log(numbers)
area.value = numbers;
});

copyButton.addEventListener('click',function(){
    area.select();
    document.execCommand('copy');
})