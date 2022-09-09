let task1Img = document.querySelectorAll('.task-1 img');
let task2Img = document.querySelectorAll('.task-2 img');
let task3Link = document.querySelectorAll('.task-3 a');
let rotation = 0;

task1Img.forEach(img => {
    img.addEventListener('click', () => {
        window.alert(img.src);
    });
});

task2Img.forEach(img => {
    img.addEventListener('contextmenu', () => {
        rotation += 90;
        if (rotation === 360) {
            rotation = 0;
        }
        img.style.transform = `rotate(${rotation}deg)`;
    });
});

task3Link.forEach(a => {
    let basicContent;
   a.addEventListener('mouseover', ()=>{
       basicContent = a.textContent;
      a.textContent += ' (' + a.href + ')';
   });
    a.addEventListener('mouseout', ()=>{
        a.textContent = basicContent;
    });
});

document.querySelector('.input-submit').addEventListener('click', ()=>{
    let inputFirstName = document.querySelector('.input-first-name');
    let inputLastName = document.querySelector('.input-last-name');
    let inputAge = document.querySelector('.input-age');

    let infoFirstName = document.querySelector('.info-input-first-name p');
    let infoLastName = document.querySelector('.info-input-last-name p');
    let infoAge = document.querySelector('.info-input-age p');

    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let age = inputAge.value;

    if(isValidSpec(firstName) && isValidLength(firstName)) {
        infoFirstName.textContent = firstName;
        inputFirstName.style.borderColor = '#000';
    }else {
        infoFirstName.textContent = '';
        inputFirstName.style.borderColor = 'red';
    }

    if(isValidSpec(lastName) && isValidLength(lastName)) {
        infoLastName.textContent = lastName;
        inputLastName.style.borderColor = '#000';
    }else {
        inputLastName.textContent = '';
        inputLastName.style.borderColor = 'red';
    }

    if(isValidAge(age)) {
        infoAge.textContent = age;
        inputAge.style.borderColor = '#000';
    }else {
        infoAge.textContent = '';
        inputAge.style.borderColor = 'red';
    }
});

function isValidAge(age){
    return ((age >= 0) && (age.length > 0));
}

function isValidLength(name){
    return name.length <= 50;
}

function isValidSpec(name) {
    return /^[a-zA-Z0-9]+$/.test(name)
}