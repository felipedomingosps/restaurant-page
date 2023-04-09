import { loadFooter } from "./load-footer";

function loadHomePage() {

    const content = document.getElementById('content');

    if (document.querySelector('main') === null) {
        const main = document.createElement('main');
        content.appendChild(main);      
    }

    document.querySelector('main').innerHTML = '';

    document.querySelector('main').innerHTML = `
    <div class="box-content box-content--main">
        <div class="main__image" alt="Two fried eggs on a plate."></div>
        <div class="main__quotation"><p class="quotation"> "Los Huevos Hermanos is egg-ceptional!" <span>- Bryan Cranston, renowned cook.</span></p></div>
        <div class="main__content">
            <div class="content__text">
                <p>Welcome to Los Huevos Hermanos, the ultimate destination for egg lovers! Our restaurant is dedicated to serving up the most delicious and creative egg dishes you've ever tasted. Whether you're a fan of classic breakfast fare or looking for something more adventurous, our menu has something for everyone.</p>
                <p>From fluffy omelettes and savory frittatas to huevos rancheros and eggs benedict, our chefs have mastered the art of cooking eggs to perfection. We use only the freshest ingredients and locally sourced produce to create dishes that are both satisfying and nutritious.</p>
                <p>In addition to our mouth-watering egg dishes, we also offer a selection of salads, sandwiches, and sides that are sure to please. And don't forget to try our signature cocktails and craft beers, which have been carefully selected to complement our menu.</p>
                <p>At Los Huevos Hermanos, we believe that dining out should be a fun and memorable experience. That's why our restaurant features a warm and inviting atmosphere that is perfect for families, couples, and groups of friends. Whether you're celebrating a special occasion or just want to enjoy a delicious meal, we look forward to welcoming you to Los Huevos Hermanos!</p>
            </div>

            <div class="quotes">
                <div class="quote">"Los Huevos Hermanos is a culinary gem. Their egg dishes are prepared with such creativity and skill that every bite is a delight for the senses."<div class="quote__author">- Chef Maria Rodriguez</div></div>
                <div class="quote">"As a food critic, I've had my fair share of breakfast joints, but Los Huevos Hermanos stands out. Their attention to detail in every dish is evident and their commitment to using fresh, local ingredients is commendable."<div class="quote__author">- Critic James Monroe</div></div>
                <div class="quote">"Los Huevos Hermanos is proof that simple ingredients and classic recipes can be elevated to new heights. Their menu is a celebration of the humble egg, and they do it justice in every dish they create." <div class="quote__author">- Chef Emily Lee</div></div>
            </div>
        </div>

    </div>`;

    loadFooter();
}


export {
    loadHomePage
}