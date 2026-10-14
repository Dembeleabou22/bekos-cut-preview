document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const formSuccess = document.getElementById('formSuccess');

  const dateInput = bookingForm?.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get('name')?.toString().trim();
    const service = formData.get('service')?.toString();
    const date = formData.get('date')?.toString();
    const time = formData.get('time')?.toString();

    if (!name || !service || !date || !time) {
      formSuccess.textContent = 'Bitte fülle alle Felder korrekt aus.';
      formSuccess.style.color = '#ffb4b4';
      return;
    }

    formSuccess.textContent = `Danke ${name}! Dein Termin für ${service} am ${date} um ${time} wurde angefragt.`;
    formSuccess.style.color = '#a9f7c4';
    bookingForm.reset();
  });
});
