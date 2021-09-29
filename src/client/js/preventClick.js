const preventBtn = document.querySelector('input[type="submit"]');
let clickable = true;

const prev = (event) => {
    if (clickable) {
        clickable = false;
    } else {
        event.preventDefault();
    }
}

if (preventBtn) {
    preventBtn.addEventListener('click', prev);
}