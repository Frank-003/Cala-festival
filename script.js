// Get references to the form elements and confirmation message
const form = document.getElementById('rsvpForm');
const emailInput = document.getElementById('email');
const attendanceSelect = document.getElementById('attendance');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add event listener to the form's submit event
form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Get the selected attendance value
    const attendance = attendanceSelect.value;

    // Check if the user selected "yes"
    if (attendance === 'yes') {
        // Display party emoji and message, set background image
        confirmationMessage.textContent = '🎉 You\'re in! Can\'t wait to see you there! 🎉';
        confirmationMessage.style.display = 'block';
        document.body.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3KO/giphy.gif")';
        document.body.style.backgroundSize = 'cover'; // Cover entire background
    } else {
        // Display different message for other responses
        confirmationMessage.textContent = 'Thanks for your RSVP! We hope to see you another time.';
        confirmationMessage.style.display = 'block';
        document.body.style.backgroundImage = 'url("https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif")';
    }

    // Clear the form fields
    emailInput.value = '';
    attendanceSelect.value = '';
});