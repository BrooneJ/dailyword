const title = document.querySelector('.detailTitle');
const example = document.querySelector('.exampleSet');

if (title) {
    const titleWord = title.innerText;
    const firstLetter = titleWord[0];
    const secondLetter = titleWord[1];
    const lastSecondLetter = titleWord[titleWord.length - 2];
    const lastLetter = titleWord[titleWord.length - 1];
    const wordLength = titleWord.length;
    let regexp;
    let regexpAnother;
    let selectedWord;
    let changeWord;
    for (i = 1; i < example.childNodes[1].childNodes.length; i++) {
        let targetWord = example.childNodes[1].childNodes[i].innerHTML;
        if (wordLength === 1) { // 한 글자 일 때
            regexp = new RegExp(`${firstLetter}`, 'gi');
            selectedWord = targetWord.match(regexp);
            changeWord = targetWord.replace(regexp, `<p style="color:red; display:inline-block">${selectedWord}</p>`);
        }
        if (wordLength === 2) { // 두 글자 일 때
            regexp = new RegExp(`${firstLetter}${lastLetter}?(って)?(いた)?(り)?(った)?(し)?(して)?(んだ)?(んで)?`, 'gi');
            selectedWord = targetWord.match(regexp);
            changeWord = targetWord.replace(regexp, `<p style="color:red; display:inline-block">${selectedWord}</p>`);
        }
        if (wordLength >= 3) { // 세 글자 일 때
            regexp = new RegExp(`${firstLetter}.*${lastSecondLetter}${lastLetter}?(って)?(いた)?(り)?(った)?(し)?(して)?(んだ)?(んで)?`, 'gi');
            regexpAnother = new RegExp(`${firstLetter}${secondLetter}(って)?(いた)?(り)?(った)?(し)?(して)?(んだ)?(んで)?`, 'gi');
            const shortMatch = targetWord.match(regexpAnother); // 짧게 일치하는 문장
            const longMatch = targetWord.match(regexp); // 길게 일치하는 문장
            if (shortMatch[0].length === 2) { // 만약 첫 두글자만 일치한다면 별도의 처리가 필요하지 않기 때문에
                shortMatch[0] = 'ustfd96gs9df786s9dfgs9df7g69sdfgt87s9dfvgsdh0'; // random한 긴 문자로 교체
            }
            selectedWord = shortMatch[0].length < longMatch[0].length ? shortMatch : longMatch; // 더 짧은 쪽의 단어로 교체
            if (selectedWord === shortMatch) {
                changeWord = targetWord.replace(regexpAnother, `<p style="color:red; display:inline-block">${selectedWord}</p>`);
            } else {
                changeWord = targetWord.replace(regexp, `<p style="color:red; display:inline-block">${selectedWord}</p>`);
            }
        }
        example.childNodes[1].childNodes[i].innerHTML = changeWord;
    }
}
