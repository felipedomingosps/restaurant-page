function createSectionTable(section, sectionName) {

    const table = document.createElement('table');
    table.classList.add = 'menu__section';

    menu.appendChild(table);

    const caption = document.createElement('caption');
    caption.classList.add = 'section__title';

    const title = document.createElement('h3');
    title.innerHTML = `${sectionName}`;

    caption.appendChild(title);
    table.appendChild(caption);

     section.forEach(element => {
         table.innerHTML += `
         <tr>
             <td>
                 <div class="food-title">${element.name}</div>
                 <div class="food-description">${element.description}</div>
             </td>
                 <td class="food-price">${element.price}</td>
         </tr>
         `;
     });
}

function loadMenu() {
    const data = require('./menu.json');
    const sections = Object.keys(data);

    const title = document.createElement('h2');
    title.innerHTML = 'Menu';
    title.classList.add=('content__title');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');
    menu.appendChild(title);

    content.appendChild(menu);


    sections.forEach(section => {
        createSectionTable(data[section], section);
    });

}



export {
    loadMenu
}