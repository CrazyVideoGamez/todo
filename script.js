notes = document.getElementById('notes')
input = document.getElementById('note')

if (!(localStorage.getItem('count'))) {
	localStorage.setItem('count', '0')
}

function loadItems() {
	let note_texts = []
	for (i=0;i<Number(localStorage.getItem('count'));i++) {
		let note = localStorage.getItem('note'+i)
		note_texts.push(note)
	}
	
	notes.innerHTML = ''
	
	for (notetext of note_texts) {
		note = document.createElement('li')
		xbutton = document.createElement('button')
		
		note.innerText = notetext
		xbutton.innerText = "X"
		xbutton.classList.add('x')
		xbutton.hidden = true

		note.appendChild(xbutton)
		notes.appendChild(note)
	}
}

function addItem() {
	text = input.value

	localStorage.setItem("note"+localStorage.getItem('count'), text)
	localStorage.setItem('count', Number(localStorage.getItem('count'))+1)
	
	loadItems()
}

function showxbuttons() {
	xbuttons = document.getElementsByClassName('x')
	for (button of xbuttons) {
		button.hidden = false;
	}
}

function hidexbuttons() {
	xbuttons = document.getElementsByClassName('x')
	for (button of xbuttons) {
		button.hidden = true;
	}
}

function removeItem(item) {
	localStorage.removeItem("note" + (item-1))
}

loadItems()
