
const initialiseMenu = () => {
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for (let item of ['Home']) {
        const li = document.createElement('li');

        innerText = item;

        li.appendChild(a);

        ul.appendChild(li);


    }

    nav.appendChild(ul);
};

document.addEventListener('DomContentLoaded', () => initialiseMenu());
