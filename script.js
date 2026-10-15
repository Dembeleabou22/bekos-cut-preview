document.addEventListener('DOMContentLoaded', function () {
  const bookingForm = document.getElementById('bookingForm');
  const formSuccess = document.getElementById('formSuccess');
  const CAL_LINK = 'https://calendly.com/dembeleabou2004/45min';

  if (!bookingForm) return;

  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Prevent DB write attempts while Bolt DB permissions are fixed.
    window.open(CAL_LINK, '_blank', 'noopener,noreferrer');

    if (formSuccess) {
      formSuccess.style.color = '#a9f7c4';
      formSuccess.textContent = 'Calendly wurde geöffnet. Bitte dort den Termin abschließen.';
    }
  });
});
