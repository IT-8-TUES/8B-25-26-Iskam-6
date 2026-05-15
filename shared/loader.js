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
}

document.addEventListener('DOMContentLoaded', () => loadHeader("header", "../shared/header.html"));