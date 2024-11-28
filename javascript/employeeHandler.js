export class EmployeeHandler {
  constructor(containerSelector) {
    this.employeesContainer = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    this.employeesContainer.addEventListener('mouseover', (event) =>
      this.handleEmployeeEvent(event, 'apply')
    );
    this.employeesContainer.addEventListener('mouseout', (event) =>
      this.handleEmployeeEvent(event, 'reset')
    );
  }

  applyHoverStyles(employee) {
    employee.style.backgroundColor = 'rgba(159, 104, 231, 0.5)';
    employee
      .querySelectorAll('p, h3')
      .forEach((el) => (el.style.color = 'white'));
  }

  resetStyles(employee) {
    employee.style.backgroundColor = '';
    employee.querySelectorAll('p, h3').forEach((el) => (el.style.color = ''));
  }

  handleEmployeeEvent(event, action) {
    const employee = event.target.closest('.employe');
    if (employee) {
      action === 'apply'
        ? this.applyHoverStyles(employee)
        : this.resetStyles(employee);
    }
  }
}