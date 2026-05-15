export function initYclientsBooking() {
    const YCLIENTS_URL = 'https://n2150499.yclients.com/';

    // Все кнопки записи на сайте
    const bookBtns = document.querySelectorAll(
        '.book-nav-btn, .book-main-btn, .book-master-btn, .book-offer-btn, .book-service-btn'
    );
    
    bookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(YCLIENTS_URL, '_blank');
        });
    });
}