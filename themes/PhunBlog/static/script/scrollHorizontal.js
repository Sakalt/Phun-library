"use strict";
const bodyElement = document.getElementsByTagName("body")[0];
console.log(bodyElement);
bodyElement.addEventListener("wheel", (e) => {
    scrollBy(-e.deltaY, 0);
}, { passive: false });
