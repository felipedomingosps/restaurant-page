function loadContact() {
    const content = document.getElementById('content');

    content.innerHTML += `
    <main>
        <div class="contact box-content">
            <h2 class="contact__title">CONTACT US</h2>
            <p class="contact__text">Thanks for your interest in our restaurant. If you have any questions or concerns, please don't hesitate to reach out to us.</p>
        
            <div class="contact__section">
                <h3 class="section__title">ADDRESS</h3>
                <p class="section__text">1234 Central Ave NE,
                    Albuquerque, NM 87106
                    United States</p>
                
            </div>
        
            <div class="contact__section">
                <h3 class="section__title">PHONE</h3>
                <p class="section__text">(505) 555-1234</p>
            </div>
        
            <div class="contact__section">
                <h3 class="section__title">EMAIL</h3>
                <p class="section__text">info@restaurantexample.com</p>
            </div>
        
            <div class="contact__section">
                <h3 class="section__title">HOURS OF OPERATION</h3>
                <p class="section__text">Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p class="section__text">Saturday - Sunday: 9:00 AM - 10:00 PM</p>
            </div>
        
            <p class="contact__text">We look forward to hearing from you!</p>
        </div>
    </main>
    `;


}

export {
    loadContact
}