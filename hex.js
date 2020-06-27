const hexDisplay = document.querySelector('#hexCode');
const btn = document.querySelector('#btn');
const hex = ["0", "1","2","3","4","5","6","7","8","9","A","B","C","D",'E',"F"];

const color = () => {
    var hexCode = '#';
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexCode += hex[+randomNumber];
    }
    hexDisplay.innerHTML = `HEX COLOR : ${hexCode}`;
    document.body.style.backgroundColor = hexCode;
   
}
color();
btn.addEventListener('click' , e=> {
    color();
})