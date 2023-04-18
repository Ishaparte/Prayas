// // Get the form element
// var form = document.querySelector('form');

// // Add an event listener for form submission
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the input values
//   var email = document.querySelector('input[type="text"]').value;
//   var password = document.querySelector('input[type="password"]').value;
//   var pid = document.querySelector('input[type="number"]').value;

//   // Get the selected department
//   var department;
//   var departmentRadios = document.getElementsByName('flexRadioDefault1');
//   for (var i = 0; i < departmentRadios.length; i++) {
//     if (departmentRadios[i].checked) {
//       department = departmentRadios[i].nextElementSibling.textContent.trim();
//       break;
//     }
//   }

//   // Get the selected year
//   var year;
//   var yearRadios = document.getElementsByName('flexRadioDefault6');
//   for (var j = 0; j < yearRadios.length; j++) {
//     if (yearRadios[j].checked) {
//       year = yearRadios[j].nextElementSibling.textContent.trim();
//       break;
//     }
//   }

//   // Log the retrieved values
//   console.log('Email Address:', email);
//   console.log('Password:', password);
//   console.log('PID:', pid);
//   console.log('Department:', department);
//   console.log('Year:', year);
// });
