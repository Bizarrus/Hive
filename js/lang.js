/*
 * @author Adrian Preuß
 * @version 1.0.0
 * @license MIT
*/
'use strict';

class Language {
    Language = 'en';
    LanguageCache = {};
    Icons = {
        de:     'DE',
        en:     'GB',
        auto:   'translate'
    };

    constructor(options) {
        this.options = options;

        this.createElement();
        this.setLanguage(this.getPreferredLanguage());
        this.showActiveLanguage(this.getPreferredLanguage());

        document.querySelectorAll('[data-bs-lang-value]').forEach(toggle => {
            toggle.addEventListener('click', (event) => {
                this.getChange(event.target);
            });
        });

        this.Language = this.loadLanguage();
    }

    getBrowserLanguage() {
        let language = navigator.language;

        if(language.indexOf('-') > -1) {
            language = language.split('-')[0];
        }

        return language;
    }

    loadLanguage() {
        let language = document.documentElement.lang;

        if(document.documentElement.lang === 'auto') {
            language = this.getBrowserLanguage();
        }

        // Load Language file
        if([
            'en',
            'auto'
        ].indexOf(language) !== -1) {
            this.LanguageCache = {};
            this.reloadI18N();
        } else {
            let file = document.createElement('script');
            file.onload = () => {
                this.LanguageCache = window['strings_' + language];
                document.querySelector('html').lang = language;
                this.reloadI18N();
            };
            file.src = 'js/lang/' + language + '.js';
            (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(file);
        }

        return language;
    }

    reloadI18N() {
        document.querySelectorAll('[data-i18p]').forEach((element) => {
            element.placeholder = this.getI18N(element.dataset.i18p);
        });

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.innerHTML = this.getI18N(element.dataset.i18n);
        });
    }

    getI18N(string) {
        if(typeof(this.LanguageCache[string]) !== 'undefined') {
            string = this.LanguageCache[string];
        }

        return string;
    }

    createElement() {
        let container = document.createElement('div');
        let active = document.createElement('button');
        let list    = document.createElement('ul');

        [
            'language-switch',
            'dropdown',
            'd-inline-block',
            'mb-3',
            'me-3',
            'bd-mode-toggle'
        ].forEach(className => {
            container.classList.add(className);
        });

        /* Active Button */
        [
            'btn',
            'border-0',
            'py-2',
            'dropdown-toggle',
            'd-flex',
            'align-items-center'
        ].forEach(className => {
            active.classList.add(className);
        });

        active.id               = 'lang-active';
        active.type             = 'button';
        active.ariaExpanded     = 'false';
        active.ariaLabel        = 'Select Language (Auto)';
        active.dataset.bsToggle = 'dropdown';

        // Icon
        let icon = document.createElement('i');
        icon.classList.add('bi-' + this.Icons.auto);
        icon.classList.add('me-2');
        icon.classList.add('opacity-50');
        icon.classList.add('lang-icon');
        icon.dataset.current = 'auto';
        active.appendChild(icon);

        // Span
        let span = document.createElement('span');
        span.classList.add('visually-hidden');
        span.id         = 'lang-text';
        span.innerText  = 'Toggle Language'; // @ToDo Language
        active.appendChild(span);

        container.appendChild(active);

        // List
        list.classList.add('dropdown-menu');
        list.classList.add('dropdown-menu-end');
        list.classList.add('shadow');
        list.ariaLabelledby = 'lang-text';
        container.appendChild(list);

        let check = document.createElement('i');
        check.classList.add('ms-auto');
        check.classList.add('d-none');

        Object.keys(this.Icons).forEach(type => {
            let li          = document.createElement('li');
            let button   = document.createElement('button');
            let image         = document.createElement('i');

            button.type                     = 'button';
            button.dataset.bsLangValue      = type;
            button.dataset.ariaPressed      = 'false';
            button.classList.add('dropdown-item');
            button.classList.add('d-flex');
            button.classList.add('align-items-center');

            image.classList.add('me-2');
            image.classList.add('opacity-50');
            image.classList.add('lang-icon');

            if(type === 'auto') {
                image.classList.add('bi-' + this.Icons[type]);
            } else {
                image.style.backgroundImage = 'url(images/flags/' + this.Icons[type] + '.svg)';
                image.style.backgroundSize = 'cover';
                image.style.backgroundRepeat = 'no-repeat';
                image.style.aspectRatio = '5 / 3';
                image.style.width = '21px';
            }
            image.dataset.name = type;

            button.appendChild(image);
            button.appendChild(document.createTextNode(type));
            button.appendChild(check);
            li.appendChild(button);
            list.appendChild(li);
        });

        if(this.options.container) {
            document.querySelector(this.options.container).appendChild(container);
        } else {
            document.body.appendChild(container);
        }
    }

    getPreferredLanguage() {
        const storedLanguage = this.getStoredLanguage();

        // @ToDo validate stored Data

        if(storedLanguage) {
            return storedLanguage;
        }

        return document.documentElement.lang;
    }

    getChange(element) {
        const name = element.getAttribute('data-bs-lang-value');

        this.setStoredLanguage(name);
        this.setLanguage(name);
        this.showActiveLanguage(name, true);
        this.loadLanguage();
    }

    getStoredLanguage() {
        return localStorage.getItem('lang');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('lang', lang);
    }

    showActiveLanguage(lang, focus) {
        const switcher = document.querySelector('.language-switch');

        if(typeof(lang) === 'unedefined' || lang === null) {
            lang = 'auto';
        }

        if(!switcher) {
            return;
        }

        const text = switcher.querySelector('#lang-text');
        const icon = switcher.querySelector('#lang-active i');
        const active = switcher.querySelector(`[data-bs-lang-value="${lang}"]`);
        const svg = active.querySelector('i');


        switcher.querySelectorAll('[data-bs-lang-value]').forEach(element => {
            element.classList.remove('active');
            element.setAttribute('aria-pressed', 'false');
        });

        active.classList.add('active');
        active.setAttribute('aria-pressed', 'true');

        if(icon) {
            icon.style = '';
            Object.keys(this.Icons).forEach(type => {
                icon.classList.remove('bi-' + this.Icons[type]);
            });

            if(svg.dataset.name === 'auto') {
                icon.classList.add('bi-' + this.Icons[svg.dataset.name]);
            } else {
                icon.style.backgroundImage = 'url(images/flags/' + this.Icons[svg.dataset.name] + '.svg)';
                icon.style.backgroundSize = 'cover';
                icon.style.backgroundRepeat = 'no-repeat';
                icon.style.aspectRatio = '5 / 3';
                icon.style.width = '21px';
                icon.style.margin = '3px 0 0 0';
            }
        }

        switcher.setAttribute('aria-label', `${text.textContent} (${active.dataset.bsLangValue})`);

        if(focus) {
            switcher.focus();
        }
    }

    setLanguage(name) {
        document.documentElement.setAttribute('lang', name);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.Language = new Language({
        container: 'header #dynamic'
    });
});