import { spriteInit } from "./sprite.js";

spriteInit();

const [burgerMenu, blockingLayer] = [".burger-menu", ".blocking-layer"].map(
    (e) => document.querySelector(e)
);

[burgerMenu, blockingLayer].forEach((e) =>
    e.addEventListener("click", function () {
        [burgerMenu, blockingLayer].forEach((e, i) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active");
                !i && clearingMenuItems();
            } else {
                e.classList.add("active");
                !i && transferMenuItems();
            }
        });
    })
);

// блок переноса пунктов меню при активации меню бургер
const [navUl, navMobileUl] = ["#nav-ul", ".nav-mobile-ul"].map((e) =>
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

// обработка события range
const rangeInput = document.getElementById("range");
const percent = document.getElementById("percent");

rangeInput.addEventListener("input", () => {
    const value = rangeInput.value;
    percent.textContent = `${value} %`;
});

const n = 33; // Количество точек
const dots = document.querySelector(".dots");

for (let i = 0; i < n; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
}
