import { initVideoBackground } from './modules/videoBG.js';
import { initYclientsBooking } from './modules/booking.js';
import { loadMasterAndPortfolio } from './modules/masters.js';
import { initScrollAnimations } from './modules/animations.js';
import { loadServices } from './modules/services.js';
import { initReviews } from './modules/reviews.js';   // ← изменено

document.addEventListener('DOMContentLoaded', () => {
    initVideoBackground();
    initYclientsBooking();
    loadMasterAndPortfolio();
    loadServices();
    initScrollAnimations();
    initReviews();                                    // ← изменено
});