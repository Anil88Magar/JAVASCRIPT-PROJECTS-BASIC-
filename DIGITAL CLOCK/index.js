const time= document.querySelector('#time');
const dates = document.querySelector('#date');


setInterval(() =>{
 
    let date = new Date();
    time.innerHTML = `Time is : ${ date.toLocaleTimeString()}`;
    dates.innerHTML = `Date is : ${date.toLocaleDateString()}`;


},1000)