document.addEventListener('DOMContentLoaded', function() {
    const rideBookingForm = document.getElementById('rideBookingForm');

    rideBookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        console.log("Destination:", destination);
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
        this.reset();
    });
});
