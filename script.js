window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const burgermenu = document.querySelector('.burgermenu');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        burgermenu.classList.toggle('is-active');
    });
    Xbtn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        burgermenu.classList.toggle('is-active');
    })
}
