function loadFooter() {
    if (document.querySelector('footer') === null) {
        const content = document.getElementById('content');

        content.innerHTML += `
        <footer>
            2023 - <a href="https://github.com/felipedomingosps">@felipedomingosps</a>
        </footer>`;
    }


}

export {
    loadFooter
}