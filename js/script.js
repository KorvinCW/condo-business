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

        headerIconBurger.addEventListener('click', showMobileList);
        headerIconClosed.addEventListener('click', closedMobileList);

        document.body.addEventListener('click', hideMenu);
        signInBtn.addEventListener('click', showMenu);
    });

    function showMenu() {
        headerSelectMenu.style.display = 'block';
        event.stopPropagation();
    }

    function hideMenu() {
        const target = event.target;
        const mainSelectMenuBlock = target.closest('.header__select-menu');

        if (mainSelectMenuBlock !== headerSelectMenu && headerSelectMenu.style.display === 'block') {
            headerSelectMenu.style.display = 'none';
        }
    }

    function showMobileList() {
        mobileMenuBlock.classList.toggle('mobile-menu-toggle');
        headerIconBurger.style.display = 'none';
        headerIconClosed.style.display = 'block';
    }

    function closedMobileList() {
        mobileMenuBlock.classList.toggle('mobile-menu-toggle');
        headerIconClosed.style.display = 'none';
        headerIconBurger.style.display = 'block';
    }
}) ();