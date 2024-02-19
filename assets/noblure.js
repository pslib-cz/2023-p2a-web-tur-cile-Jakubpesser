document.querySelector('.categories').addEventListener('mouseout', function() {
    document.querySelectorAll('.categories__item').forEach(function(item) {
        item.style.filter = 'none';
    });
});