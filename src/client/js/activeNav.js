const home = document.querySelector('.fa-home');
const search = document.querySelector('.fa-search');
const pencil = document.querySelector('.fa-pencil-alt');

const header = document.querySelector('header span');

const headerTitle = header.childNodes[0].textContent;

if (headerTitle === "Home") {
    home.style.color = "black";
} else if (headerTitle === "Search") {
    search.style.color = "black";
} else if (headerTitle === "Upload") {
    pencil.style.color = "black";
}