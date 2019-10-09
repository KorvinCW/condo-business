(function() {
    let headerSelectMenu;
    let signInBtn;
    let mobileMenuBlock;
    let headerIconBurger;
    let headerIconClosed;

    document.addEventListener('DOMContentLoaded', () => {
        headerSelectMenu = document.getElementById('header-select-menu');
        signInBtn = document.getElementById('sign-in-btn');
        headerIconBurger = document.getElementById('header__icon-burger');
        headerIconClosed = document.getElementById('header__icon-closed');
        mobileMenuBlock = document.getElementById('mobile-menu-block');

        signInBtn.addEventListener('click', showMenu);

        headerIconBurger.addEventListener('click', showMobileList);
        headerIconClosed.addEventListener('click', closedMobileList);

    });

    function showMenu() {
        headerSelectMenu.style.display = 'block';
    }

    function showMobileList() {
        mobileMenuBlock.classList.remove('mobile-menu-closed');
        mobileMenuBlock.classList.add('mobile-menu-show');
        headerIconBurger.style.display = 'none';
        headerIconClosed.style.display = 'block';
    }

    function closedMobileList() {
        mobileMenuBlock.classList.remove('mobile-menu-show');
        mobileMenuBlock.classList.add('mobile-menu-closed'); 
        headerIconClosed.style.display = 'none';
        headerIconBurger.style.display = 'block';
    }

}) ();