console.log("Init");

import { spriteInit } from "./sprite.js";

spriteInit();

const [burgerMenu, blockingLayer] = [".burger-menu", ".blocking-layer"].map(
    (e) => document.querySelector(e)
);

burgerMenu.addEventListener("click", function () {
    [burgerMenu, blockingLayer].forEach((e, i) => {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
            !i && clearingMenuItems();
        } else {
            e.classList.add("active");
            !i && transferMenuItems();
        }
    });
});

// блок переноса пунктов меню при активации меню бургер
const [navUl, navMobileUl] = ["#nav-ul", "#nav-mobile-ul"].map((e) =>
    document.querySelector(e)
);

const transferMenuItems = () => {
    const menuItems = Array.from(navUl.children);
    let currentIndex = 0;
    const intervalId = setInterval(() => {
        if (currentIndex < menuItems.length) {
            navMobileUl.appendChild(menuItems[currentIndex].cloneNode(true));
            currentIndex++;
        } else {
            clearInterval(intervalId);
        }
    }, 50);
};

const clearingMenuItems = () => {
    navMobileUl.innerHTML = "";
};
