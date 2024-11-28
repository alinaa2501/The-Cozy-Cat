import { FormHandler } from './formHandler.js';
import { EmployeeHandler } from './employeeHandler.js';

fetch('modals.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('modals-container').innerHTML = data;
    new EmployeeHandler('.employes');
    new FormHandler('#reservationForm', '.btn-send');
  })
  .catch((error) => console.error('Error loading modals:', error));
