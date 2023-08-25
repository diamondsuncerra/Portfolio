document.addEventListener("DOMContentLoaded", function () {

    let popups = document.querySelectorAll('.window');
    let openBtn = document.querySelectorAll('.open-window');
    let closeBtn = document.querySelectorAll('.close-window');

    openBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
                popups[index].style.display = 'block';
                openBtn[index].style.display = 'none';
            }
        )

    })
    closeBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
                popups[index].style.display = 'none';
                openBtn[index].style.display = 'block';
            }
        )

    })


})