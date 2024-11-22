

const employees = document.querySelectorAll('.employe');

employees.forEach(employee => {
  employee.addEventListener('mouseover', function () {
    employee.style.backgroundColor = 'rgb(159, 104, 231, 0.5)'; // Nieuwe achtergrondkleur
  });

  employee.addEventListener('mouseout', function () {
    employee.style.backgroundColor = ''; // Reset naar oorspronkelijke kleur
  });
});