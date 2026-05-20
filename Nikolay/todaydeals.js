const products = [
    {
        name: "SOG Voodoo Hawk Mini Axe",
        price: "$35.38",
        original: "$50.55",
        badge: "30% OFF",
        img: "../Ivaylo/images/products/axe/axe_main.jpg",
        link: "../Ivaylo/axe.html",
        min: 0, max: 0.2
    },
    {
        name: "Panasonic Inverter Microwave",
        price: "$119.99",
        original: "$149.99",
        badge: "20% OFF",
        img: "../Ivaylo/images/products/microwave/microwave_main_view.jpg",
        link: "../Ivaylo/microwave.html",
        min: 0.21, max: 0.4
    },
    {
        name: "Philips Norelco Trimmer",
        price: "$52.49",
        original: "$69.99",
        badge: "25% OFF",
        img: "../Ivaylo/images/products/hair_cutter/hair_cutter_main.jpg",
        link: "../Ivaylo/hair_cutter.html",
        min: 0.41, max: 0.7
    },
    {
        name: "EcoClean Premium Sponge Pack",
        price: "$8.49",
        original: "$9.99",
        badge: "15% OFF",
        img: "../Ivaylo/images/products/sponges/ChatGPT Image May 13, 2026, 08_18_51 PM.png",
        link: "../Ivaylo/sponge.html",
        min: 0.71, max: 1
    }
];

const container = document.getElementById("deals-container");

products.forEach(p => {
    const r = Math.random();
    if (r >= p.min && r <= p.max) {
        container.innerHTML += `
            <div class="deal-card">
                <span class="deal-badge">${p.badge}</span>
                <div class="deal-img-wrap">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="deal-body">
                    <h3>${p.name}</h3>
                    <div class="deal-prices">
                        <span class="deal-original">${p.original}</span>
                        <span class="sale-price">${p.price}</span>
                    </div>
                    <a href="${p.link}">View Deal</a>
                </div>
            </div>
        `;
    }
});

if (container.innerHTML === "") {
    container.innerHTML = "<p style='text-align:center'>No deals today. Check back soon!</p>";
}
