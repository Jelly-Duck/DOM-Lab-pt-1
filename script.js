const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const topMenuContainer = document.getElementById('top-menu');

const updateMenuLinks = menuLinks.map(function(item) {
    const anchorEl = document.createElement('a');
    anchorEl.href = item.href;
    anchorEl.textContent = item.text;
    item.link = anchorEl;
    topMenuContainer.appendChild(anchorEl);    
    return item;
});

console.log(updateMenuLinks);





mainEl = document.querySelector('main');

function updateMainEl() {
mainEl.style.backgroundColor = 'var(--main-bg)',
mainEl.innerHTML = '<h1>SEI Rocks!</h1>',
mainEl.classList.add('flex-ctr');
}

updateMainEl();





const topMenuEl = document.getElementById('top-menu');

function updateTopMenuEl() {
    console.log(topMenuEl);
    topMenuEl.style.height = '100%';
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
    topMenuEl.classList.add('flex-around');
}

updateTopMenuEl();

