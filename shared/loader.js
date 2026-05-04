async function load(id, url) {
    const res = await fetch(url);
    const html = await res.text();

    document.getElementById(id).innerHTML = html;
}

// Load header
load("header", "../shared/header.html");