export default function navBg() {
    const callElem = (selector) => document.querySelector(selector),
        callElems = (selector) => document.querySelectorAll(selector),
        menuItems = callElems('nav ul li');

    menuItems.forEach(item => item.addEventListener('click', () => {

    }))


    function getSS() {
        let active = null;

        if (sessionStorage.getItem('active') === null) {
            active = 0;
        } else {
            active = sessionStorage.getItem('acitve');
        }

    }

}