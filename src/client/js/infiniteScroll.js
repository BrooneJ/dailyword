const container = document.querySelector(".centerContainer");
const detector = document.querySelector('.scroll-detecting');
let pageCounter = 2;
let hasMore = true;

const htmlMaking = (words) => {
    for (let i = 0; i < words.length; i++) {
        const div = document.createElement('div')
        div.classList.add('wordContainer')
        container.appendChild(div);

        const divTPT = document.createElement('div');
        const divBox = document.createElement('div');
        const divInfor = document.createElement('div');
        divTPT.classList.add('wordTPT');
        divBox.classList.add('wordBox');
        divInfor.classList.add('wordInfor');

        const divTP = document.createElement('div');
        divTP.classList.add('wordTP');

        const spanTime = document.createElement('span');
        spanTime.classList.add('wordTime');
        spanTime.innerText = String(words[i].createdAt).split('T')[0].replaceAll('-', '. ');

        const wordTitle = document.createElement('a');
        wordTitle.classList.add('wordTitle');
        wordTitle.setAttribute('href', `/words/${words[i]._id}`);
        wordTitle.innerText = words[i].title;

        const wordPronun = document.createElement('span');
        wordPronun.classList.add('wordPronun');
        wordPronun.innerText = '[ ' + words[i].pronun + ' ]';

        const wordMean = document.createElement('div');
        wordMean.classList.add('wordMean');
        const meanSpan1 = document.createElement('span');
        meanSpan1.innerText = '의미:';
        const meanSpan2 = document.createElement('span');
        meanSpan2.innerText = words[i].mean[0];

        const wordExample = document.createElement('div')
        wordExample.classList.add('wordExample');
        const examSpan1 = document.createElement('span');
        examSpan1.innerText = '예문:';
        const examSpan2 = document.createElement('span');
        examSpan2.innerText = words[i].example[0];

        const inforSpan1 = document.createElement('span');
        const inforSpan2 = document.createElement('span');
        const inforSpan3 = document.createElement('span');
        inforSpan1.innerText = '출처:' + words[i].from;
        const inforA = document.createElement('a');
        inforA.setAttribute('href', `/words/${words[i]._id}`);
        inforA.innerText = '자세히 보기 →';

        div.appendChild(divTPT);
        divTPT.appendChild(divTP);
        divTP.appendChild(wordTitle);
        divTP.appendChild(wordPronun);
        divTPT.appendChild(spanTime);

        div.appendChild(divBox);
        divBox.appendChild(wordMean);
        wordMean.appendChild(meanSpan1);
        wordMean.appendChild(meanSpan2);
        divBox.appendChild(wordExample);
        wordExample.appendChild(examSpan1);
        wordExample.appendChild(examSpan2);;

        div.appendChild(divInfor);
        divInfor.appendChild(inforSpan1);
        divInfor.appendChild(inforSpan2);
        divInfor.appendChild(inforSpan3);
        inforSpan3.appendChild(inforA);
    }
}


const loadItem = async () => {
    try {
        // 백엔드에 다음 페이지를 요구하는 post req를 보냄
        const response = await fetch('/api/pages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pageCounter }),
        });
        // 다음 페이지가 있으면 201 응답과 json데이터를 받음
        if (response.status === 201) {
            const { words } = await response.json();
            if (words.length !== 0) {
                htmlMaking(words);
            }
        } else { // 201 응답이 아니라면 더이상 마지막 페이지에 도달했음을 알 수 있음
            hasMore = false; // 더이상 데이터가 없으므로 false 처리
        }
        pageCounter++;

    } catch (error) {
        console.error(error);
    }
    container.appendChild(detector); // 마지막 페이지에 detector를 삽입
}

const io = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.intersectionRatio > 0)) {
        if (hasMore) {
            loadItem();
        }
    }
})
if (detector) {
    io.observe(detector)
}