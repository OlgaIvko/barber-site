export function loadServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    const services = [
        { name: "Мужская стрижка", price: "2000₽", duration: "1 ч", img: "images/assets/portfolio/work1.png" },
        { name: "Стрижка 3 насадки", price: "1500₽", duration: "30 мин", img: "images/assets/services/clipper.jpeg" },
        { name: "Детокс кожи головы", price: "500₽", duration: "15 мин", img: "images/assets/portfolio/work3.jpeg" },
        { name: "Ваксинг (удаление волос воском)", price: "250₽", duration: "5 мин", img: "assets/services/waxing.jpg" },
        { name: "Премиальный уход за кожей лица", price: "1000₽", duration: "30 мин", img: "assets/services/facecare.jpg" },
        { name: "Стрижка и борода", price: "от 3000₽", duration: "1 ч 30 мин", img: "assets/services/hairbeard.jpg" },
        { name: "Стрижка машинкой и борода", price: "от 2500₽", duration: "1 ч", img: "assets/services/machine.jpg" },
        { name: "Борода", price: "От 1500₽", duration: "30 мин", img: "assets/services/beard.jpg" },
        { name: "Премиальное бритьё опасной бритвой", price: "2000₽", duration: "1 ч", img: "assets/services/razor.jpg" },
        { name: "Отец и сын", price: "3500₽", duration: "1 ч 30 мин", img: "assets/services/fatherson.jpg" },
        { name: "Детская стрижка", price: "1800₽", duration: "1 ч", img: "images/assets/services/kid.jpeg" },
        { name: "Укладка и окантовка", price: "500₽", duration: "15 мин", img: "images/assets/services/styling.jpeg" }
    ];

    const html = services.map(service => `
        <div class="service-card">
            <img src="${service.img}" alt="${service.name}" class="service-img" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
            <div class="service-info">
                <h3>${service.name}</h3>
                <div class="service-info__block">
                <div class="service-price">${service.price}</div>
                <div class="service-duration">${service.duration}</div>
                </div>
                <button class="btn book-service-btn" data-service="${service.name}">Записаться</button>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;

    const YCLIENTS_URL = 'https://n2150499.yclients.com/';
    document.querySelectorAll('.book-service-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(YCLIENTS_URL, '_blank');
        });
    });
}