const reservationForm = document.getElementById('reservationForm');
const contactForm = document.getElementById('contact-form');

const employees = document.querySelectorAll('.employe');
const button = document.querySelector('.btn-send');

reservationForm.addEventListener('submit', handleFormReservationSubmit);
contactForm.addEventListener('submit', handleFormContactSubmit);

hoverEmployees();

function hoverEmployees() {
  employees.forEach((employee) => {
    employee.addEventListener('mouseover', () => {
      employee.style.backgroundColor = 'rgb(159, 104, 231, 0.5)'; // Nieuwe achtergrondkleur
      const text = employee.querySelectorAll('p'); // Selecteer alle <p> binnen deze employee
      text.forEach((p) => (p.style.color = 'white'));
      const h3 = employee.querySelectorAll('h3');
      h3.forEach((h) => (h.style.color = 'white'));
    });

    employee.addEventListener('mouseout', () => {
      employee.style.backgroundColor = ''; // Reset naar oorspronkelijke kleur
      const text = employee.querySelectorAll('p'); // Selecteer opnieuw de <p>-elementen
      text.forEach((p) => (p.style.color = ''));
      const h3 = employee.querySelectorAll('h3');
      h3.forEach((h) => (h.style.color = ''));
    });
  });
}

function handleFormReservationSubmit(event) {
  event.preventDefault();

  if (!reservationForm.checkValidity()) {
    return;
  }

  const currentModalId = 'exampleModal';
  const nextModalId = 'confirmModal';

  const currentModal = document.getElementById(currentModalId);
  const bootstrapModal = bootstrap.Modal.getInstance(currentModal);
  bootstrapModal.hide();

  const nextModal = new bootstrap.Modal(document.getElementById(nextModalId));
  nextModal.show();
}

function handleFormContactSubmit(event) {
  event.preventDefault();

  const confirmModal = new bootstrap.Modal(
    document.getElementById('messageModal')
  );
  confirmModal.show();

  if (contactForm.checkValidity()) {
    confirmModal.show();
    contactForm.reset();
  }
}