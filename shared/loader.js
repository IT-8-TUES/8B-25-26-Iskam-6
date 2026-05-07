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
});