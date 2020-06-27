const rgbDisplay = document.querySelector('#rgb');
const btn = document.querySelector('#btn');

const color = () => {
    const r = Math.floor(Math.random() * 266);
    const g = Math.floor(Math.random() * 266);
    const b = Math.floor(Math.random() * 266);
    rgbDisplay.innerHTML = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log(r , g ,b);
}

color();

btn.addEventListener('click' , ()=> {
    color();
})