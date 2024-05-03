const dropdowns = index.html.querySelectorALL('.dropdown');
dropdowns.array.forEach(dropdown =>) {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorALL('.menu li');
    const selected = dropdown.querySelector('.selected');
    

    
};
select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

});
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.ClassList.remove('select-cliked');
        caret.ClassList.remove('caret-rotate');
        menu.ClassList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
            
        })
    })
})
