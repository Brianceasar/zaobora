// JavaScript to handle currency button clicks and update symbol
const currencyButtons = document.querySelectorAll('.currency-btn');
const currencySymbol = document.getElementById('currency-symbol');
const currencyInput = document.getElementById('currencyInput'); // Hidden input to hold selected currency
const purposeButtons = document.querySelectorAll('.don-btn');
const purposeInput = document.getElementById('donationPurpose'); // Hidden input to hold selected purpose


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

purposeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update the hidden input with the selected purpose
        purposeInput.value = this.getAttribute('data-purpose');
        console.log(purposeInput.value)
        // Update active button state
        purposeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});


// Function to handle form validation and submission for any form
function handleFormSubmission(formId) {
    const form = document.getElementById(formId);
    // Check if form exists before proceeding
    if (!form) {
        console.error(`Form with ID "${formId}" not found.`);
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Form Elements
        const formData = new FormData(form);
        const amount = formData.get("amount");  // Donation form specific
        const firstName = formData.get("firstName") || formData.get("name");
        const lastName = formData.get("lastName") || "";
        const email = formData.get("email");
        const message = formData.get("message") || "";
        const subject = formData.get("subject") || "";

        // Feedback Elements
        const loadingSpinner = document.getElementById("loadingSpinner");
        const successModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        const errorMessageContainer = document.getElementById("error-message");

        let isValid = true;
        let errorMessageText = "";

        // Reset previous invalid styles
        form.querySelectorAll(".is-invalid").forEach(field => field.classList.remove("is-invalid"));

        // Validate fields based on form type
        if (formId === "donationForm") {
            if (!amount || amount <= 0) {
                isValid = false;
                errorMessageText += "Please enter a valid donation amount higher than 0.<br>";
                document.getElementById("donationAmount").classList.add("is-invalid");
            }
            if (!firstName.trim()) {
                isValid = false;
                errorMessageText += "First name is required.<br>";
                document.getElementById("firstName").classList.add("is-invalid");
            }
            if (!lastName.trim()) {
                isValid = false;
                errorMessageText += "Last name is required.<br>";
                document.getElementById("lastName").classList.add("is-invalid");
            }
        } else {
            if (!firstName.trim()) {
                isValid = false;
                errorMessageText += "Name is required.<br>";
                form.querySelector("[name='name']").classList.add("is-invalid");
            }
            if (!subject.trim()) {
                isValid = false;
                errorMessageText += "Subject is required.<br>";
                form.querySelector("[name='subject']").classList.add("is-invalid");
            }
            if (!message.trim()) {
                isValid = false;
                errorMessageText += "Message is required.<br>";
                form.querySelector("[name='message']").classList.add("is-invalid");
            }
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const invalidDomain = /@email$/;
        if (!email || !emailRegex.test(email) || invalidDomain.test(email)) {
            isValid = false;
            errorMessageText += "Please enter a valid email address with a proper domain.<br>";
            form.querySelector("[name='email']").classList.add("is-invalid");
        }

        // Display error message if form is invalid
        

        // Display error message only if errorMessageContainer exists and validation fails
    if (!isValid) {
        if (errorMessageContainer) {
            errorMessageContainer.innerHTML = errorMessageText;
            errorMessageContainer.style.display = "block";
        }
        return;
    } else if (errorMessageContainer) {
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
            body: JSON.stringify(Object.fromEntries(formData))
        })
        .then(response => {
            loadingSpinner.style.display = "none";
            if (response.ok) {
                // Show the thank you modal on successful form submission
                successModal.show();
                form.reset(); // Clear the form fields
            } else {
                throw new Error("Form submission failed");
            }
        })
        .catch(error => {
            loadingSpinner.style.display = "none";
            errorMessageContainer.innerHTML = "There was an error submitting the form. Please try again.";
            errorMessageContainer.style.display = "block";
        });
    });
}

// Initialize form handling for both the donation and contact forms
handleFormSubmission("donationForm");
handleFormSubmission("contactForm");



