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

// Form validation and submission logic
document.querySelector("#donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Form Elements
    const form = event.target;
    const amount = document.getElementById("donationAmount");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");

    // Feedback Elements
    const loadingSpinner = document.getElementById("loadingSpinner");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // Validation Messages and Reset
    const errorMessageContainer = document.getElementById("error-message");
    let isValid = true;
    let errorMessageText = "";

    [amount, firstName, lastName, email].forEach(field => field.classList.remove("is-invalid")); // Reset invalid styles

    // Validation Rules
    if (!amount.value || amount.value <= 0) {
        isValid = false;
        errorMessageText += "Please enter a valid donation amount higher than 0.<br>";
        amount.classList.add("is-invalid");
    }
    if (!firstName.value.trim()) {
        isValid = false;
        errorMessageText += "First name is required.<br>";
        firstName.classList.add("is-invalid");
    }
    if (!lastName.value.trim()) {
        isValid = false;
        errorMessageText += "Last name is required.<br>";
        lastName.classList.add("is-invalid");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidDomain = /@email$/;
    if (!email.value.trim() || !emailRegex.test(email.value) || invalidDomain.test(email.value)) {
        isValid = false;
        errorMessageText += "Please enter a valid email address with a proper domain.<br>";
        email.classList.add("is-invalid");
    }

    // Show error message and prevent submission if invalid
    if (!isValid) {
        errorMessageContainer.innerHTML = errorMessageText;
        errorMessageContainer.style.display = "block";
        return;
    } else {
        errorMessageContainer.style.display = "none";
    }

    // Show loading spinner and clear previous messages
    loadingSpinner.style.display = "block";
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Send data to Formspree
    fetch(form.action, {
        method: form.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: amount.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            currency: document.getElementById("currencyInput").value
        })
    })
    .then(response => {
        loadingSpinner.style.display = "none";
        if (response.ok) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            form.reset(); // Clear the form fields upon success
        } else {
            throw new Error("Form submission failed");
        }
    })
    .catch(error => {
        loadingSpinner.style.display = "none";
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.textContent = "There was an error submitting the form. Please try again.";
    });
});
