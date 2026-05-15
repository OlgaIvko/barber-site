export function initVideoBackground() {
    const video = document.getElementById('bgVideo');
    if (!video) return;

    // Для мобильных устройств с медленным соединением можно не грузить видео,
    // но мы просто ставим атрибуты и ждём загрузки
    video.addEventListener('loadeddata', () => {
        // Убираем плейсхолдер, когда видео готово
        const placeholder = document.querySelector('.video-placeholder');
        if (placeholder) placeholder.style.opacity = '0';
    });

    // Если видео не запустилось автоматически (политика браузера), попробуем вручную
    video.play().catch(e => {
        console.log('Автоплей заблокирован, показан постер');
        // можно показать кнопку "включить звук/видео", но для фона ок
    });
}