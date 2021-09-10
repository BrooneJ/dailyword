const title = document.querySelector('.detailTitle');
const example = document.querySelector('.exampleSet');

if (title) {
    const titleWord = title.innerText;
    const firstLetter = titleWord[0];
    const lastSecondLetter = titleWord[titleWord.length - 2];
    const lastLetter = titleWord[titleWord.length - 1];
    const wordLength = titleWord.length;
    let regexp;
    let selectedWord;
    let changeWord;
    for (i = 1; i < example.childNodes[1].childNodes.length; i++) {
        let targetWord = example.childNodes[1].childNodes[i].innerHTML;
        if (wordLength === 1) { // 한 글자 일 때
            regexp = new RegExp(`${firstLetter}`, 'gi');
        }
        if (wordLength === 2) { // 두 글자 일 때
            regexp = new RegExp(`${firstLetter}${lastLetter}?`, 'gi');
        }
        if (wordLength >= 3) { // 세 글자 일 때
            regexp = new RegExp(`${firstLetter}.*${lastSecondLetter}${lastLetter}?`, 'gi');
        }
        const selectedWord = targetWord.match(regexp);
        let changeWord = targetWord.replace(regexp, `<p style="color:red; display:inline-block">${selectedWord}</p>`);
        example.childNodes[1].childNodes[i].innerHTML = changeWord;
    }
}
