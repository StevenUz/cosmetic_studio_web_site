// Language translations
const translations = {
    bg: {
        'home': 'Начало',
        'services': 'Услуги',
        'gallery': 'Галерия',
        'contact': 'Контакти',
        'welcome': 'Добре дошли в Beauty Care',
        'welcome-desc': 'Вашето козметично студио за красота и благополучие',
        'discover': 'Открийте нашите услуги',
        'about': 'За нас',
        'about-text1': 'Beauty Care е водещо козметично студио в София, посветено на вашата красота и благополучие. С над 10 години опит, ние предоставяме висококачествени услуги на най-добра цена.',
        'about-text2': 'Нашият екип от специалисти е обучен в най-новите техники и използва только премиум продукти. Работим в спокойна и комфортна атмосфера, където всеки клиент е приоритет.',
        'about-text3': 'Всяка услуга е персонализирана според вашите индивидуални нужди и желания.',
        'years': 'Години опит',
        'clients': 'Доволни клиенти',
        'services-count': 'Видове услуги',
        'sections': 'Нашите основни секции',
        'footer-title': 'Beauty Care - Козметично студио',
        'footer-phone': '📞 Телефон:',
        'footer-email': '📧 Email:',
        'footer-address': '📍 Адрес:',
        'footer-privacy': 'Политика за поверителност',
        'footer-terms': 'Условия на ползване',
        'footer-hours': 'Часове на работа',
        'footer-copyright': '© 2026 Beauty Care. Всички права запазени.',
    },
    en: {
        'home': 'Home',
        'services': 'Services',
        'gallery': 'Gallery',
        'contact': 'Contact',
        'welcome': 'Welcome to Beauty Care',
        'welcome-desc': 'Your cosmetic studio for beauty and wellness',
        'discover': 'Discover Our Services',
        'about': 'About Us',
        'about-text1': 'Beauty Care is a leading cosmetic studio in Sofia, dedicated to your beauty and wellness. With over 10 years of experience, we provide high-quality services at the best prices.',
        'about-text2': 'Our team of specialists is trained in the latest techniques and uses only premium products. We work in a calm and comfortable atmosphere, where every client is a priority.',
        'about-text3': 'Every service is personalized according to your individual needs and desires.',
        'years': 'Years of Experience',
        'clients': 'Happy Clients',
        'services-count': 'Types of Services',
        'sections': 'Our Main Sections',
        'footer-title': 'Beauty Care - Cosmetic Studio',
        'footer-phone': '📞 Phone:',
        'footer-email': '📧 Email:',
        'footer-address': '📍 Address:',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Use',
        'footer-hours': 'Working Hours',
        'footer-copyright': '© 2026 Beauty Care. All rights reserved.',
    }
};

// Initialize language selector
document.addEventListener('DOMContentLoaded', function() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Get saved language from localStorage or default to Bulgarian
    const savedLang = localStorage.getItem('selectedLanguage') || 'bg';
    setLanguage(savedLang);
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Save to localStorage
            localStorage.setItem('selectedLanguage', lang);
        });
    });
});

function setLanguage(lang) {
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}