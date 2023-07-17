const submit = document.getElementById('submitBtn');
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const output = document.querySelector('.output');


submit.addEventListener('click', function() {
    let weightValue = weight.value;
    let heightValue = height.value;
    let out = weightValue / (heightValue * heightValue) * 703;
    output.textContent = out.toFixed(1);
})