function clickNav() {
    let action = document.getElementsByClassName('container-list')[0];
    action.classList.toggle('small-nav');
}

function clickNext() {
	document.getElementById('mySelf').classList.toggle('hide-table');
	document.getElementById('mySelf').classList.remove('show-table');
	document.getElementsByClassName('icon-medsos')[0].classList.toggle('show-icon');
	document.getElementsByClassName('icon-medsos')[0].classList.remove('hide-icon');
	document.getElementsByClassName('icon-next')[0].style.display='none';
	document.getElementsByClassName('icon-prev')[0].style.display='block';
}

function clickPrev() {
	document.getElementsByClassName('icon-medsos')[0].classList.toggle('hide-icon');
	document.getElementsByClassName('icon-medsos')[0].classList.remove('show-icon');
	document.getElementById('mySelf').classList.toggle('show-table');
	document.getElementById('mySelf').classList.remove('hide-table');
	document.getElementsByClassName('icon-next')[0].style.display='block';
	document.getElementsByClassName('icon-prev')[0].style.display='none';
}