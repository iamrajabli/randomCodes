function bar(barMenuSelector, menuSelector, activeClass, rotateClass) {
    const callElem = (selector) => document.querySelector(selector),
        barMenu = callElem(barMenuSelector),
        menu = callElem(menuSelector);

    barMenu.addEventListener('click', () => {
        menu.classList.toggle(activeClass);
        barMenu.style.transition = 'all 200ms linear';
        barMenu.classList.toggle(rotateClass);
    })
}

export default bar;