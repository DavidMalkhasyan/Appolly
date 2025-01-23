class Header extends HTMLElement {
    #mobileMenu;
    #burgerButton;

    constructor() {
        super();

        this.#mobileMenu = this.querySelector(".mobile__menu");
        this.#burgerButton = this.querySelector(".header__hamburger");
        this.headerScroll = this.headerScroll.bind(this);
        this.#burgerButton.addEventListener("click", this.menuDropdown.bind(this));
    }

    connectedCallback() {
        window.addEventListener("scroll", this.headerScroll);
    }

    disconnectedCallback() {
        window.removeEventListener("scroll", this.headerScroll);
        this.#burgerButton.removeEventListener("click", this.menuDropdown);
    }

    headerScroll() {
        if (window.scrollY > 0) {
            this.classList.add('scrolled');
        } else {
            this.classList.remove('scrolled');
        }
    }

    menuDropdown() {
        this.#mobileMenu.classList.toggle("active");
    }
}

customElements.define("app-header", Header);
