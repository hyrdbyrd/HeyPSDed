// Add bold tag and class
let text = document.body.innerHTML;
document.body.innerHTML = text.replace(/(HeyU)/ig, '<b class="product__name">$1</b>');

// Delete all \s\t at end (for normal ::after view).
document.querySelectorAll('.theme_title').forEach(e => e.innerHTML = e.innerHTML.trim());