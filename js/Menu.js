const menuItems = [
    { title: 'Home', link: '/WSOA3028A/index.html' },
    { title: 'personal Blog', link: '/WSOA3028A/PBlog/personalBlog.html' },
    { title: 'Characters Blog', link: '/WSOA3028/CBlog/CharactersBlog' },
    { title: 'About', link: '/index.html' },
];
const initialiseMenu = () => {
    const nav = document.querySelector('.Menu');
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
