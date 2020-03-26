const currenyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currenyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate'); 
const swap = document.getElementById('swap'); 

// * Fetch exchange rates and update the DOM
function calculate() {
  const currency_one= currenyEl_one.value;
  const currency_two= currenyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.rates[currency_two];
    rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
  })
}


// * Event Listeners
currenyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currenyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currenyEl_one.value;
  currenyEl_one.value = currenyEl_two.value;
  currenyEl_two.value = temp;
  calculate();
})

calculate();