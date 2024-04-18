document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Clear all form fields
        contactForm.reset();
    });

    const issueSelect = document.getElementById('issueSelect');
    const otherIssueInput = document.getElementById('otherIssue');

    issueSelect.addEventListener('change', function() {
        if (issueSelect.value === 'other') {
            otherIssueInput.style.display = 'block';
        } else {
            otherIssueInput.style.display = 'none';
        }
    });
});
