import { EikyuDate } from "./clockmain.js";
const dates = document.getElementsByClassName("postDate");
Array.from(dates).forEach((dateElement) => {
    const UTCdate = new Date(dateElement.dataset.time);
    dateElement.innerHTML = EikyuDate.now(UTCdate.getTime()).getPhunDay();
});
