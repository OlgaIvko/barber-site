export async function loadMasterAndPortfolio() {
    const container = document.getElementById('mastersGrid');
    if (!container) return;

    const master = {
        name: 'Антон',
        specialty: 'Барбер / Художник',
        experience: '7 лет',
        awards: 'Лучший барбер города 2025',
        photo: 'images/assets/masters/master.jpeg',
        works: [
            { src: 'images/assets/portfolio/work1.jpeg', alt: 'Классическая стрижка' },
            { src: 'images/assets/portfolio/work2.jpeg', alt: 'Модельная стрижка' },
            { src: 'images/assets/portfolio/work3.jpeg', alt: 'Стрижка бороды' },
            { src: 'images/assets/portfolio/work4.jpeg', alt: 'Бритьё опасной бритвой' },
            { src: 'images/assets/portfolio/work5.jpeg', alt: 'Текстурная стрижка' },
            { src: 'images/assets/portfolio/work6.jpeg', alt: 'Андеркат' },
            { src: 'images/assets/portfolio/work7.jpeg', alt: 'Фейд' },
            { src: 'images/assets/portfolio/work8.jpeg', alt: 'Стрижка машинкой' },
            { src: 'images/assets/portfolio/work9.jpeg', alt: 'Стрижка' },
            { src: 'images/assets/portfolio/work10.jpeg', alt: 'Стрижка' },
            { src: 'images/assets/portfolio/work11.jpeg', alt: 'Стрижка' },
            { src: 'images/assets/portfolio/work12.jpeg', alt: 'Стрижка' },
            { src: 'images/assets/portfolio/work13.jpeg', alt: 'Стрижка' },
            { src: 'images/assets/portfolio/work14.jpeg', alt: 'Стрижка' },
            { src: 'images/assets/portfolio/work15.jpeg', alt: 'Стрижка' }
        ]
    };

   const html = `
        <div class="master-card">
            <div class="master-avatar">
                <img src="${master.photo}" alt="${master.name}">
            </div>
            <div class="master-details">
                <h3>${master.name}</h3>
                <p class="master-specialty">${master.specialty}</p>
                <p class="master-exp">⭐ ${master.experience} · 🏆 ${master.awards}</p>
                
                <!-- Две крутые иконки (бейджи) -->
                <div class="master-badges">
                    <div class="badge">
                        <div class="badge-icon">🏆</div>
                        <div class="badge-text">Топ-барбер<br><span>2024</span></div>
                    </div>
                    <div class="badge">
                        <div class="badge-icon">⚡</div>
                        <div class="badge-text">Эксперт<br><span>опасной бритвы</span></div>
                    </div>
                </div>

                <button class="btn btn-primary book-master-btn" data-master="${master.name}">Записаться к ${master.name}</button>
            </div>
        </div>
        <div class="portfolio-horizontal">
            <div class="section-header">
                <div class="icon-glow">
                    <div class="master-icon">✂️</div>
                </div>
                <h4 class="portfolio-title">Примеры работ</h4>
            </div>
            <div class="portfolio-scroll">
                <div class="portfolio-track">
                    ${master.works.map(work => `
                        <div class="portfolio-slide">
                            <img src="${work.src}" alt="${work.alt}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Лайтбокс
    const slides = document.querySelectorAll('.portfolio-slide');
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const img = slide.querySelector('img');
            if (img) openLightbox(img.src, img.alt);
        });
    });
}

function openLightbox(src, alt) {
    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="" alt="">
            </div>
        `;
        document.body.appendChild(lightbox);
        lightbox.querySelector('.lightbox-close').onclick = () => {
            lightbox.style.display = 'none';
        };
        lightbox.onclick = (e) => {
            if (e.target === lightbox) lightbox.style.display = 'none';
        };
    }
    const imgEl = lightbox.querySelector('img');
    imgEl.src = src;
    imgEl.alt = alt;
    lightbox.style.display = 'flex';
}