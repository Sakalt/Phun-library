import { FunNumber } from "./phunnumber.js";
const listElement = document.querySelectorAll("ul, ol");
const markerClasses = ["whiteMarker", "blackMarker"];
Array.from(listElement).forEach(e => {
    let parent = e.parentElement;
    let depth = 0;
    while (parent.tagName == "LI") {
        parent = parent.parentElement.parentElement;
        depth++;
        if (depth > 100) {
            throw new Error("rooping!");
            break;
        }
    }
    e.classList.add(markerClasses[depth % markerClasses.length]);
});
const orderListElement = document.querySelectorAll("ol");
Array.from(orderListElement).forEach(ol => {
    Array.from(ol.children).forEach((li, idx) => {
        const phunIndex = new FunNumber().toPhunCalcNum(idx + 1);
        li.dataset.index = phunIndex.slice(-1);
        li.dataset.size = 100 / phunIndex.length;
    });
});
const footNoteRefs = document.getElementsByClassName("footnote-ref");
Array.from(footNoteRefs).forEach((a) => {
    a.innerHTML = new FunNumber().toPhunCalcNum(Number(a.innerHTML));
});
