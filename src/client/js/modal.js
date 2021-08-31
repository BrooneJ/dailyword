let avatarImg = document.querySelector('.AvatarImg');
let modal = document.querySelector(".modal");

if (avatarImg) {
    avatarImg.onclick = () => {
        modal.classList.toggle('hidden');
    }
}