const menuData = [
    { title: 'Home', link: '/' },
    { title: 'personal Blog', link: '/PBlog' },
    { title: 'Characters Blog', link: '/CBlog' },
];
const initialiseMenu = () => {
    const nav = document.querySelector('.menu');

    const ul = document.createElement('Ul');

    for (let item of menuItems) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;

        li.appendChild(a);

        ul.appendChild(li);

    }
    nav.appendChild(ul);
};
document.addEventListener('DomContentLoaded', () => initialiseMenu());
