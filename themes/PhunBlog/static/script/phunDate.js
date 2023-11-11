import { EikyuDate } from "./clockmain.js";
const dates = document.getElementsByClassName("postDate");
Array.from(dates).forEach((dateElement) => {
    console.log(dateElement.innerHTML);
    const UTCdate = new Date(dateElement.dataset.time);
    console.log(UTCdate);
    dateElement.innerHTML = "<span class='writeIcon'>書</span>" + EikyuDate.now(UTCdate.getTime()).getPhunDay();
});
