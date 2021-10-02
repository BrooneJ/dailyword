const select = document.querySelector('.selectLanguage');

if (select) {
    const selectValue = select.attributes[2].value;
    for (let key of select) {
        if (key.value === selectValue) {
            key.setAttribute('selected', true);
        }
    }
}