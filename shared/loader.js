async function load(id, url) {
    const res = await fetch(url);
    const html = await res.text();

    document.getElementById(id).innerHTML = html;
}

// Load header
load("header", "../shared/header.html").then(() => {

    // delivery
    document.getElementById('delivery-info').addEventListener('click', function () {
        window.location.href = '../Ivaylo/delivery.html';
    });
    let deliveryLocation = localStorage.getItem('delivery-place');
    if (!deliveryLocation) {
        deliveryLocation = "...";
    }
    document.getElementById('delivery-info').innerHTML = `Deliver to <b>${deliveryLocation}</b>`;

    // sign-in
    document.getElementById('account').addEventListener('click', function () {
        window.location.href = '../Ivaylo/signin.html';
    });
    let loggedInUser = localStorage.getItem('loggedin-user');
    if (loggedInUser) {
        document.getElementById('account').innerHTML = `Hello <b>${loggedInUser}</b>`;
    } else {
        document.getElementById('account').innerHTML = `<b>Sign In ...</b>`;
    }

    //search
    document.getElementById('search').addEventListener('click', function () {
        // Get the search input value
        const searchInput = document.getElementById('search-input');
        const searchQuery = searchInput.value.trim();

        if (searchQuery) {
            window.location.href = `../Ivaylo/index.html?q=${encodeURIComponent(searchQuery)}`;
        } else {
            window.location.href = '../Ivaylo/index.html';
        }
    });
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');

    if (searchQuery) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = searchQuery;
        }

        document.title = `Search: ${searchQuery} - Bamazone`;
    }
});