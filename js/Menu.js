const menuData = [
    { title: 'Home', link: '/' },
    { title: 'personal Blog', link: '/PBlog' },
    { title: 'Characters Blog', link: '/CBlog' },
];
const initialiseMenu = () => {
    const nav = document.querySelector('nav');
    const ul = document.createElement('ul');
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
