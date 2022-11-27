class TopBar extends HTMLElement {
    constructor() {
        super();
        this.source_back;
    }
    static get observedAttributes() {
        return ['src'];
    }
    attributeChangedCallback(Attr, oldValue, newValue) {
        if (Attr == "src") {
            this.source_back = newValue;
        }
    }
    connectedCallback() {
        this.innerHTML =
       `<div class="top-bar">
           <a href="${this.source_back}" class="btn-BackHome" aria-label="Go back">
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-top-bar">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </a>

            <button type="button" title="Button turn dark mode" class="btn-Dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-top-bar">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            </button>

            <button type="button" title="Button turn light mode" class="btn-Light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-top-bar">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </button>

            <button type="button" title="Button focus search bar" class="btn-Search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-top-bar">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>          
            </button>
        </div>`;

        let root = document.querySelector(':root');
        let btnUp = document.querySelector('.btn-Search');
        let btnDark = document.querySelector('.btn-Dark');
        let btnLight = document.querySelector('.btn-Light');
        btnLight.classList.add('filter');

        btnUp.addEventListener('click', function () {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            document.querySelector("#finder").focus();
        });

        btnDark.addEventListener('click', function() {
            root.style.setProperty('--white', '#181818');
            root.style.setProperty('--black', 'white');
            root.style.setProperty('--grayBackground', '#121212');
            root.style.setProperty('--grayBorder', '#353535');
            root.style.setProperty('--borderCards', '#3b3b3b');
            root.style.setProperty('--iconTopBar','white');
            btnDark.classList.add('filter');
            btnLight.classList.remove('filter');
        });

        btnLight.addEventListener('click', function() {
            root.style.setProperty('--white', 'white');
            root.style.setProperty('--black', '#121212');
            root.style.setProperty('--grayBackground', '#f2f2f7');
            root.style.setProperty('--grayBorder', '#d9d9d9');
            root.style.setProperty('--borderCards', 'transparent');
            root.style.setProperty('--iconTopBar','black');
            btnLight.classList.add('filter');
            btnDark.classList.remove('filter');
        });
    } // callback inner
} // class

window.customElements.define("top-bar", TopBar);