document.querySelectorAll('.navigation button').forEach(button => {
button.addEventListener('click', () => {
alert(Navigating to ${button.textContent});
});
});
