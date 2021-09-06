const avatarImg = document.querySelector('.AvatarImg');
const modal = document.querySelector(".modal");
const bg = document.querySelector('.bg');

if (avatarImg) {
    avatarImg.onclick = () => {
        modal.classList.toggle('hidden');
    }

    const close = () => {
        modal.classList.add('hidden');
    }

    bg.addEventListener('click', close);
}