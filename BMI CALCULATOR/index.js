document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#bmiForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Select weight and height elements
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#result');

        // Validate input
        if (isNaN(height) || height <= 0 || height === '') {
            result.innerHTML = `Please enter a valid height.`;
        } else if (isNaN(weight) || weight <= 0 || height === '') {
            result.innerHTML = `Please enter a valid weight.`;
        } else {
            // Calculate BMI
            const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
            if(BMI<18.6){
                 result.innerHTML=`<span>Your BMI is under weigth :${BMI}</span>`;
            }else if(BMI>18.6 && BMI<24.9){
                result.textContent=`Your BMI is normal Weight:${BMI}`;
            }else{
                result.textContent=`Your BMI is over Weight : ${BMI}`
        }
            
        }
    });
});
