import { initVideoBackground } from './modules/videoBG.js';
import { initYclientsBooking } from './modules/booking.js';
import { loadMasterAndPortfolio } from './modules/masters.js';
import { initScrollAnimations } from './modules/animations.js';
import { loadServices } from './modules/services.js';

document.addEventListener('DOMContentLoaded', () => {
    initVideoBackground();
    initYclientsBooking();    // вместо старой формы
    loadMasterAndPortfolio();
    loadServices();            // новые карточки услуг
    initScrollAnimations();
});