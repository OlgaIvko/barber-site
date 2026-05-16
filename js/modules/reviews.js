export function initReviews() {
    const form = document.getElementById('reviewForm');
    if (!form) return;

    // === ЗВЁЗДЫ ===
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('reviewRating');

    function updateStars(value) {
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.add('active');
                star.textContent = '★';
            } else {
                star.classList.remove('active');
                star.textContent = '☆';
            }
        });
        ratingInput.value = value;
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            updateStars(value);
        });
        star.addEventListener('mouseenter', () => {
            const value = parseInt(star.dataset.value);
            stars.forEach((s, i) => {
                s.style.color = i < value ? '#ffd700' : '#555';
            });
        });
        star.addEventListener('mouseleave', () => {
            const current = parseInt(ratingInput.value);
            stars.forEach((s, i) => {
                s.style.color = i < current ? '#ffd700' : '#555';
            });
        });
    });
    updateStars(5);

    // === ЗАГРУЗКА ОТЗЫВОВ ===
    function loadReviews() {
        const container = document.getElementById('reviewsGrid');
        if (!container) return;
        const reviews = JSON.parse(localStorage.getItem('barberReviews') || '[]');
        if (reviews.length === 0) {
            container.innerHTML = '<p style="color: #ccc;">Пока нет отзывов. Будьте первым!</p>';
            return;
        }
        const html = reviews.map((r, idx) => `
            <div class="review-item" data-index="${idx}">
                <div class="review-header">
                    <span>${escapeHtml(r.name)}</span>
                    <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
                </div>
                <div class="review-text">${escapeHtml(r.text)}</div>
                <div style="font-size:0.8rem; color:#aaa; margin-top:10px; display: flex; justify-content: space-between; align-items: center;">
                    <span>${r.date}</span>
                    <button class="delete-review-btn" data-index="${idx}">Удалить</button>
                </div>
            </div>
        `).join('');
        container.innerHTML = html;

        // Привязываем обработчики на кнопки удаления
        document.querySelectorAll('.delete-review-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt(btn.dataset.index);
                let reviewsArr = JSON.parse(localStorage.getItem('barberReviews') || '[]');
                reviewsArr.splice(index, 1);
                localStorage.setItem('barberReviews', JSON.stringify(reviewsArr));
                loadReviews(); // перезагружаем список
            });
        });
    }

    // === ОТПРАВКА ФОРМЫ ===
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reviewName').value.trim();
        const rating = parseInt(ratingInput.value);
        const text = document.getElementById('reviewText').value.trim();

        if (!name || !text) {
            showMessage('Заполните имя и текст отзыва', 'error');
            return;
        }
        if (rating === 0) {
            showMessage('Поставьте оценку', 'error');
            return;
        }

        const review = {
            name: name,
            rating: rating,
            text: text,
            date: new Date().toLocaleDateString('ru-RU')
        };

        let reviewsArr = JSON.parse(localStorage.getItem('barberReviews') || '[]');
        reviewsArr.unshift(review);
        localStorage.setItem('barberReviews', JSON.stringify(reviewsArr.slice(0, 20)));

        showMessage('Спасибо! Ваш отзыв добавлен', 'success');
        form.reset();
        updateStars(5);
        loadReviews();
    });

    function showMessage(msg, type) {
        const msgDiv = document.getElementById('reviewFormMessage');
        msgDiv.innerHTML = `<p style="color:${type === 'success' ? '#b8860b' : '#ff5555'}">${msg}</p>`;
        setTimeout(() => msgDiv.innerHTML = '', 4000);
    }

    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    loadReviews();
}