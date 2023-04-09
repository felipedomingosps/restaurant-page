import { loadContact } from "./load-contact";
import { loadHomePage } from "./load-homepage";
import { loadMenu } from "./load-menu";

function configureHeader() {
    const allPages = document.querySelectorAll('.nav-bar__item');

    allPages.forEach(page => {
        page.addEventListener('click', () => {
            allPages.forEach(page => {
                page.classList.remove('nav-bar__item--current');
            })
            page.classList.add('nav-bar__item--current');

            if (page.dataset.page === "home" ) {
                loadHomePage();
            } else if (page.dataset.page === "menu") {
                loadMenu();
            } else if (page.dataset.page === "contact") {
                loadContact();
            }
        })
    })
    
}

export {
    configureHeader
}