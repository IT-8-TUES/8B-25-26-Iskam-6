async function loadHeader(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        const html = await response.text();
        const container = document.getElementById(id);
        if (!container) throw new Error(`Target element #${id} not found.`);
        container.innerHTML = html;
        initializeHeader();
    } catch (error) {
        console.error('Header Load Error:', error);
    }
}

function handleThemeChange(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Dispatch custom event for other scripts to listen to
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme } }));
    console.log(`Theme changed to: ${theme}`);
}

function initializeHeader() {
    // Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    
    // Apply initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    handleThemeChange(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            handleThemeChange(newTheme);
        });
    }

    const deliveryInfo = document.getElementById('delivery-info');
    if (deliveryInfo) {
        deliveryInfo.addEventListener('click', () => window.location.href = '../Ivaylo/delivery.html');
        const loc = localStorage.getItem('delivery-place') || "...";
        deliveryInfo.innerHTML = `Deliver to <b>${loc}</b>`;
    }

    const account = document.getElementById('account');
    if (account) {
        account.addEventListener('click', () => window.location.href = '../Ivaylo/signin.html');
        const user = localStorage.getItem('loggedin-user');
        account.innerHTML = user ? `Hello <b>${user}</b>` : `<b>Sign In ...</b>`;
    }

    const searchBtn = document.getElementById('search');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = document.getElementById('search-input')?.value.trim();
            window.location.href = query ? `../Daniel/index.html?q=${encodeURIComponent(query)}` : '../Daniel/index.html';
        });
    }

    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
        const input = document.getElementById('search-input');
        if (input) input.value = q;
        document.title = `Search: ${q} - Bamazone`;
    }

    updateCart();
}

async function loadFooter() {
    try {
        const response = await fetch("../shared/footer.html");
        if (!response.ok) return;
        const html = await response.text();
        const footer = document.createElement('footer');
        footer.id = "footer";
        footer.innerHTML = html;
        document.body.appendChild(footer);
    } catch (error) {
        console.error('Footer Load Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader("header", "../shared/header.html");
    loadFooter();
});

function updateCart() {
    const cart = JSON.parse(localStorage.getItem('user-card')) || {};
    const size = Object.keys(cart).length;
    document.getElementById('cart-count').innerHTML = size;
}

function addItemToCart(key, title, prise, quantity, img) {

    const cart = JSON.parse(localStorage.getItem('user-card')) || {};

    const item = {
        "title": title,
        "prise": prise,
        "quantity": quantity,
        "img": img
    };

    cart[key] = item;

    localStorage.setItem('user-card', JSON.stringify(cart));

    updateCart();
}

function setUpAddToCart(product) {
    document.getElementById("btn-add-cart").addEventListener('click', function () {
        const title = document.getElementById('product-title').innerHTML;
        const prise = document.getElementById('price').innerHTML;
        const quantity = document.getElementById('quantity').value;
        const img = document.getElementById('main-image').src;

        addItemToCart(product, title, prise, quantity, img);
    }
    );
}