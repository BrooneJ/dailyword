let avatarImg = document.querySelector('.AvatarImg');
let modal = document.querySelector(".modal");

if (avatarImg) {
    avatarImg.onclick = () => {
        modal.classList.toggle('hidden');
    }

    const close = () => {
        modal.classList.add('hidden');
    }

    document.querySelector('.bg').addEventListener('click', close);
}