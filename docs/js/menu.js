let menu = document.querySelector('.menu');
let button = document.querySelector('.share');
let buttonIcon = button.querySelector('svg path');

button.addEventListener('click', function(e) {
    e.preventDefault();
    if(menu.classList.contains('hidden') && !button.classList.contains('dark')) {
        menu.classList.remove('hidden');
        button.classList.add('dark');
        buttonIcon.setAttribute('fill','#ffffff');
    } else {
        menu.classList.add('hidden');
        button.classList.remove('dark');
        buttonIcon.setAttribute('fill','#6E8098');
    }
})