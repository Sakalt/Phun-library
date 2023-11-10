const orderLists = document.getElementsByTagName("ol")
const footNoteRefs = document.getElementsByClassName("footnote-ref")

const indexlist = ["一", "二", "三", "四", "五"]

Array.from(orderLists).forEach((ol: HTMLOListElement) => {
    const listElements = ol.children
    Array.from(listElements).forEach((li, idx) => {
        /*
        li.innerHTML = `
        <span class="phunListNum">${indexlist[idx]}、</span>
        <span>${li.children[0].innerHTML}</span>
        `
        */
    })
})

Array.from(footNoteRefs).forEach((a) => {
    a.innerHTML = indexlist[Number(a.innerHTML) - 1]
})