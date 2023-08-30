/* =============== NAV LINK LIST =============== */
function toggleDesc(action) {
	const descElements = document.querySelectorAll('.toggle-card-desc');
	const hideBtn = document.querySelector('#hide-desc');
	const showBtn = document.querySelector('#show-desc');
	if (action === 'hide') {
		hideBtn.style.opacity = 0.5;
		showBtn.style.opacity = 1;
		for (const element of descElements) {
			element.style.opacity = 0;
			setTimeout(() => {
				element.style.display = 'none';
			}, 500);
		}
	} else if (action === 'show') {
		hideBtn.style.opacity = 1;
		showBtn.style.opacity = 0.5;
		for (const element of descElements) {
			element.style.display = 'block';

			setTimeout(() => {
				element.style.opacity = 1;
			}, 200);
		}
	}
}
