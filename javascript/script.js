const employees = document.querySelectorAll('.employe');

employees.forEach(employee => {
  employee.addEventListener('mouseover',  () => {
    employee.style.backgroundColor = 'rgb(159, 104, 231, 0.5)'; // Nieuwe achtergrondkleur
    let text = employee.querySelectorAll('p'); // Selecteer alle <p> binnen deze employee
    text.forEach(p => p.style.color = 'white');
    let h3 = employee.querySelectorAll('h3');
    h3.forEach(h => h.style.color = 'white');
  });

  employee.addEventListener('mouseout',  () => {
    employee.style.backgroundColor = ''; // Reset naar oorspronkelijke kleur
    const text = employee.querySelectorAll('p'); // Selecteer opnieuw de <p>-elementen
    text.forEach(p => p.style.color = '')
    let h3 = employee.querySelectorAll('h3');
    h3.forEach(h => h.style.color = '');
  });
});


const buttonSend = document.querySelector('.btn-send')

function showMessage(event) {
  event.preventDefault()
}

buttonSend.addEventListener('click', showMessage)
