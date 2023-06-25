const container = document.querySelector(".words"),
    form = document.forms.words,
    searchEl = form.elements.search,
    cntEl = form.elements.cnt;

console.log(container, searchEl, cntEl);

let wordsLength = [];
words.forEach(w => {
    if(!wordsLength.includes(w.length))  {
        wordsLength.push(w.length);
    }
});
wordsLength.sort((a,b) => a - b);
console.log(wordsLength);
for (let cnt of wordsLength) {
    const opt = new Option(cnt);
    cntEl.append(opt);
}

function setWords(arr, cnt = 0, txt = "") {
    if (txt) {
        arr = arr.filter(w => w.startsWith(txt.toLowerCase()));
    }
    if (+cnt) {
        arr = arr.filter(w => w.length === +cntEl.value);
    }
    container.innerHTML = "";
    arr = arr.slice(0, 500);
    console.log(arr.length);
    arr.forEach(w => {
        container.innerHTML += `<span>${w}</span>`
    });
}

cntEl.addEventListener("change", e => {
    setWords(words, e.target.value, searchEl.value);
});
searchEl.addEventListener("change", e => {
    setWords(words, cntEl.value, e.target.value);
});

setWords(words);

const txtEl = form.elements.text;
console.log(txtEl);

txtEl.addEventListener("input", e => {
    console.log(e.target.value);
    setWords(words, 0, e.target.value);
})