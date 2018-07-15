// Add class to all blocks
document.querySelectorAll('.content-box-imgs').forEach((e, i, link) => {
    i % 2 ? e.classList.add('img_even') : e.classList.add('img_odd');
    if (i == link.length - 1) {
        e.parentElement.classList.add('img_last');
    }
});
