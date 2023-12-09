import { EikyuDate } from "./clockmain.js";
import { FunNumber } from "./phunnumber.js";
let dates = document.getElementsByClassName("postDate");
Array.from(dates).forEach((dateElement) => {
    const UTCdate = new Date(dateElement.dataset.time);
    dateElement.innerHTML = EikyuDate.now(UTCdate.getTime()).getPhunDay();
});
dates = document.getElementsByClassName("postDateSea");
Array.from(dates).forEach((dateElement) => {
    const UTCdate = new Date(dateElement.dataset.time);
    dateElement.innerHTML = EikyuDate.now(UTCdate.getTime()).getPhunSeason();
});
dates = document.getElementsByClassName("postDateConvPhun");
Array.from(dates).forEach((dateElement) => {
    const unitArr = ["年", "季", "旬", "日"];
    const PhunEarthNum = dateElement.dataset.time;
    const dateList = PhunEarthNum.split("/");
    const phunNum = new FunNumber();
    const converted = dateList.reduce((a, b, idx) => {
        return a + (phunNum.replacePhunNumber(b)) + unitArr[idx];
    }, "");
    dateElement.innerHTML = converted;
});
