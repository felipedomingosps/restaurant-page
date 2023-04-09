function loadHeader() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <header>
    <div class="box-content box-content--header">
        <div class="eggs">
            <i class="fa-solid fa-egg"></i>
            <i class="fa-solid fa-egg"></i>
        </div>
        <h1 class="header__title">Los Huevos Hermanos</h1>
    </div>
    <nav class="box-content box-content--nav-bar">
        <ul class="nav-bar">
            <li class="nav-bar__item nav-bar__item--current" data-page="home">Home</li>
            <li class="nav-bar__item" data-page="menu">Menu</li>
            <li class="nav-bar__item" data-page="contact">Contact</li>
        </ul>
    </nav>
</header>
`;
}

export {
    loadHeader
}