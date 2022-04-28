const onSwitch = document.getElementById('onSwitch')
const offSwitch = document.getElementById('offSwitch')
const light = document.getElementById('light')

onSwitch.addEventListener('click', event=> {
    light.src = "images/lighton.png";
    document.querySelector('body').style.backgroundColor = '#FDEFB2';
})

offSwitch.addEventListener('click', event =>{
    light.src = 'images/lightoff.png';
    document.querySelector('body').style.backgroundColor = 'black';

})