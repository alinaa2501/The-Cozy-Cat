const reservationForm = document.getElementById("reservation-form");
const contactForm = document.getElementById("contact-form");

reservationForm.addEventListener("submit", handleFormReservationSubmit);
contactForm.addEventListener("submit", handleFormContactSubmit);

function handleFormReservationSubmit(event) {
  event.preventDefault();

  if (!reservationForm.checkValidity()) {
    return;
  }

  const currentModalId = "reservationModal";
  const nextModalId = "confirmModal";

  const currentModal = document.getElementById(currentModalId);
  const bootstrapModal = bootstrap.Modal.getInstance(currentModal);

  const nextModal = document.getElementById(nextModalId);
  const nextBootstrapModal = new bootstrap.Modal(nextModal);

  bootstrapModal.hide();
  nextBootstrapModal.show();
  reservationForm.reset();
}

function handleFormContactSubmit(event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    return;
  }
  const messageId = "messageModal";
  const bootstrapMessageModal = document.getElementById(messageId);

  const messageModal = new bootstrap.Modal(bootstrapMessageModal);

  messageModal.show();
  contactForm.reset();
}

