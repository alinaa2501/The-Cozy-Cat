export class FormHandler {
  constructor(formSelector, buttonSelector) {
    this.form = document.querySelector(formSelector);
    this.button = document.querySelector(buttonSelector);
    this.init();
  }

  init() {
    this.button.addEventListener('click', this.showMessage);
    this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(event) {
    if (!this.form.checkValidity()) {
      return;
    }

    event.preventDefault();
    
    const currentModalId = 'exampleModal';
    const nextModalId = 'confirmModal';

    const currentModal = document.getElementById(currentModalId);
    const bootstrapModal = bootstrap.Modal.getInstance(currentModal);
    bootstrapModal.hide();

    const nextModal = new bootstrap.Modal(document.getElementById(nextModalId));
    nextModal.show();
  }

  showMessage(event) {
    if (!this.form.checkValidity()) {
      return;
    }

    event.preventDefault();

    const nextModal = new bootstrap.Modal(
      document.getElementById('messageModal')
    );
    nextModal.show();
  }
}

