// JavaScript to handle currency button clicks and update symbol
const currencyButtons = document.querySelectorAll('.currency-btn');
const currencySymbol = document.getElementById('currency-symbol');
const currencyInput = document.getElementById('currencyInput'); // Hidden input to hold selected currency

currencyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update the visible currency symbol
        currencySymbol.textContent = this.getAttribute('data-currency');
        
        // Update the hidden input to hold the selected currency
        currencyInput.value = this.getAttribute('data-currency');

        // Update active button state
        currencyButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
