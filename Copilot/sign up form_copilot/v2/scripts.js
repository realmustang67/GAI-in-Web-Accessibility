document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const togglePasswordButton = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        const password = passwordInput.value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
        }
    });

    togglePasswordButton.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    togglePasswordButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.click();
        }
    });
});
