document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('fno-contact-us-block__contact-form');

	if (form) {
		form.addEventListener('submit', function(event) {
			event.preventDefault();

			// Clear existing error messages
			// const errorMessages = form.querySelectorAll('.error-message');
			// errorMessages.forEach(errorMessage => errorMessage.remove());

			// Validate first name
			const firstNameInput = form.querySelector('input[name="firstName"]');
			if (!validateName(firstNameInput.value)) {
				showError('First name is required and must be at least 3 characters long, and contain only letters.');
				return;
			}

			// Validate last name
			const lastNameInput = form.querySelector('input[name="lastName"]');
			if (!validateName(lastNameInput.value)) {
				showError('Last name is required and must be at least 3 characters long, and contain only letters.');
				return;
			}

			// Validate email
			const emailInput = form.querySelector('input[name="contactEmail"]');
			if (!validateEmail(emailInput.value)) {
				showError('Please enter a valid email address.');
				return;
			}

			// Validate phone number
			const phoneInput = form.querySelector('input[name="contactWorkPhone"]');
			if (!validatePhone(phoneInput.value)) {
				showError('Please enter a valid phone number (10 digits only).');
				return;
			}

			// Validate company name
			const companyInput = form.querySelector('input[name="contactCompany"]');
			if (!validateCompany(companyInput.value)) {
				showError('Company name is required and must be at least 3 characters long, and contain only letters.');
				return;
			}

			// Validate comment
			const commentInput = form.querySelector('input[name="comment"]');
			if (!validateComment(commentInput.value)) {
				showError('Comment is required.');
				return;
			}

			// If all fields are valid, proceed with form submission
			const formData = new FormData(this);

			fetch('/wp-json/contact-form/v1/submit', {
				method: 'POST',
				body: JSON.stringify(Object.fromEntries(formData.entries())),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => 
				response.json().then(data => ({ status: response.status, data })))
			.then(({ status, data }) => {

				if (status !== 200) {
					throw new Error(data.errors ? JSON.stringify(data.errors) : 'Failed to submit form');
				}

				// Show success message
				alert(data.message);
				// Optionally, reset the form
				form.reset();
			})
			.catch(error => {
				try {
					// Check if the error response contains error messages
					if (error.data && error.data.errors) {
						const errors = error.data.errors;

						// Loop through the errors and display each one
						Object.keys(errors).forEach(key => {
							showError(errors[key]);
						});
					} else {
						// If the error format is unexpected, show a generic error message
						showError(error.message || 'An error occurred. Please try again.');
					}
				} catch (e) {
					// If there's an error while parsing the error message, show a generic error message
					showError('An error occurred. Please try again.');
				}
			});
		});
	}
});

function showError(message) {
	const errorMessage = document.createElement('div');
	errorMessage.className = 'error-message';
	errorMessage.textContent = message;
	errorMessage.style.color = 'red';

	const formContainer = document.querySelector('.fno-contact-us-block__contact-us-form-wrapper');
	formContainer.insertBefore(errorMessage, formContainer.firstChild);

	// Remove the error message after 2 seconds
	setTimeout(() => {
		errorMessage.remove();
	}, 2000);
}

function validateName(name) {
	return /^[a-zA-Z]{3,}$/.test(name);
}

function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
	return /^\d{10}$/.test(phone);
}

function validateCompany(company) {
	return /^[a-zA-Z]{3,}$/.test(company);
}

function validateComment(comment) {
	return comment.trim() !== '';
}
