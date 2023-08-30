/* =============== NAV LINK LIST =============== */
function navLinkList(action) {
	const linkListElement = document.querySelector('#nav__link-list');
	const closeBtn = document.querySelector('#nav__hamburger-close');
    if (action === 'show') {
      linkListElement.style.left = '10px';
      closeBtn.style.display = 'block';

    } else if (action === 'hide') {
      linkListElement.style.left = '200vw';
      closeBtn.style.display = 'none';
    }
}

