import { FunNumber } from "./phunnumber.js"

const listElement = document.querySelectorAll("ul, ol")

const markerClasses = ["whiteMarker", "blackMarker"]

Array.from(listElement).forEach(e => {
    let parent: HTMLElement|null = e!.parentElement
    let depth = 0
    while (parent!.tagName == "LI") {
        parent = parent!.parentElement!.parentElement
        depth++
        if (depth > 100) {
            throw new Error("rooping!")
            break
        }
    }
    e.classList.add(markerClasses[depth % markerClasses.length])
})

const orderListElement = document.querySelectorAll("ol")

Array.from(orderListElement).forEach(ol => {
    Array.from(ol.children).forEach((li: any, idx) => {
        const phunIndex = new FunNumber().toPhunCalcNum(idx + 1)
        li.dataset.index = phunIndex.slice(-1)
        li.dataset.size = 100 / phunIndex.length
    })
})


/*
const orderLists = document.getElementsByTagName("ol")
const footNoteRefs = document.getElementsByClassName("footnote-ref")

const indexlist = ["一", "二", "三", "四", "五"]

Array.from(orderLists).forEach((ol: HTMLOListElement) => {
    const listElements = ol.children
    Array.from(listElements).forEach((li, idx) => {
        
        li.innerHTML = `
        <span class="phunListNum">${indexlist[idx]}、</span>
        <span>${li.children[0].innerHTML}</span>
        `
        
    })
})

Array.from(footNoteRefs).forEach((a) => {
    a.innerHTML = indexlist[Number(a.innerHTML) - 1]
})
*/