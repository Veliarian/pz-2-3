document.querySelector('button').addEventListener('click', (button) =>{
   if(button.target.textContent === 'UPDATE'){
       button.target.textContent = 'DELETE';
       button.target.style.backgroundColor = 'red';
       button.target.style.borderColor = 'darkred';
   }else if(button.target.textContent === 'DELETE'){
       button.target.textContent = 'PENDING';
       button.target.style.backgroundColor = 'orange';
       button.target.style.borderColor = 'orangered';
   }else {
       button.target.textContent = 'UPDATE';
       button.target.style.backgroundColor = 'greenyellow';
       button.target.style.borderColor = 'green';
   }
});