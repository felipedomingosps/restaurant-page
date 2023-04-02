function createSectionTable(section, sectionName) {

    const table = document.createElement('table');
    table.classList.add = 'menu__section';

    content.appendChild(table);

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
                 <td>${element.price}</td>
         </tr>
         `;
     });
}

function loadMenu() {
    const data = require('./menu.json');
    const sections = Object.keys(data);

    const content = document.getElementById('content');

    const title = document.createElement('h2');
    title.innerHTML = 'Menu';
    title.classList.add=('content__title');

    const menu = document.createElement('div');
    menu.classList.add = 'menu';
    menu.setAttribute('id', 'menu');

    const elements = [title, menu];

    elements.forEach(element => {
        content.appendChild(element);
    });

    sections.forEach(section => {
        createSectionTable(data[section], section);
    });

}



export {
    loadMenu
}