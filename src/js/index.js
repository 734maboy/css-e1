	import _ from 'lodash';
	import '../css/style.css';
	
	const links = [
		{
			"href": "./index.html",
			"name": "Main page",
		},
		{
			"href": "./images.html",
			"name": "Images page",
		},
	];

	
	function navMenu() {
		const elements = {
			"header": document.createElement('header'),
			"nav": document.createElement('nav'),
			"ul": document.createElement('ul'),
		};

		links.forEach(injectListItem, elements);
		elements.nav.appendChild(elements.ul);
		elements.header.appendChild(elements.nav);

		return elements.header;
	}

	function injectListItem(elem) {
		let li = document.createElement('li');
		li.insertAdjacentHTML('afterbegin', `<a href="${elem.href}">${elem.name}</a>`);
		this.ul.appendChild(li);
	}

  document.body.insertAdjacentElement('afterbegin', navMenu());