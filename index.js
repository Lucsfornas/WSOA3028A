const button = document.querySelector('button');
const article = document.querySelector('rticle');

button.addEventListener('click', function () {
    const el = document.createElement('em');
    el.innertext = 'aye';
    document.body.prepend(el);
})