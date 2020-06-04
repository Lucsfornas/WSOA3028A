const menuData = [
    { title: 'Home', link ='/index.html' },
    { title: 'personal Blog', link ='/PersonalBlog.html' },
    { title: 'Characters Blog', link ='/CharactersBlog' }
]

const initialiseMenu = () => {
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for (let item of menuItems) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        li.appendChild('a');

        ul.appendChild(li);


    }

    nav.appendChild(ul);
};

document.addEventListener('DomContentLoaded', () => initialiseMenu());
