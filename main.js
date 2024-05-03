// Select all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Iterate over each dropdown
dropdowns.forEach(dropdown => {
    // Select elements within each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Event listener for the select element
    select.addEventListener('click', () => {
        // Toggle classes to open/close dropdown
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    // Event listener for each option within the menu
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Update selected text
            selected.innerText = option.innerText;

            // Reset dropdown state
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            // Remove 'active' class from all options
            options.forEach(option => {
                option.classList.remove('active');
            });

            // Add 'active' class to the selected option
            option.classList.add('active');
        });
    });
});