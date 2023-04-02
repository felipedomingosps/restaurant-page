function loadHeader(fatherElement) {
    const element = `
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
            <li class="nav-bar__item nav-bar__item--current">Home</li>
            <li class="nav-bar__item">Menu</li>
            <li class="nav-bar__item">Contact</li>
        </ul>
    </nav>
</header>
`;

    fatherElement.innerHTML = element;
}

export {
    loadHeader
}