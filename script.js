notes = document.getElementById('notes')
input = document.getElementById('note')

if (!(localStorage.getItem('notes'))) {
	localStorage.setItem('notes', '[]')
}

function loadItems() {
	let note_texts = JSON.parse(localStorage.getItem('notes'))
	
	for (i=0; i < note_texts.length; i++) {
		note = document.createElement('li')
		xbutton = document.createElement('button')

		note.innerText = notetext
		xbutton.innerText = "X"
		xbutton.classList.add('x')
		xbutton.hidden = true
		xbutton.onclick = removeItem(i)
		xbutton.style.marginLeft = "5px";

		note.appendChild(xbutton)
		notes.appendChild(note)
	}
}

function addItem() {
	text = input.value;
	
	note_list = JSON.parse(localStorage.getItem('notes'))
	note_list.push(text)
	note_list = JSON.stringify(note_list)
	
	localStorage.setItem('notes', note_list)
	
	loadItems() // Reload items
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
	// item parameter = index in list (starting from 0)
	note_list = JSON.parse(localStorage.getItem('notes'))
	note_list.splice(item,1)
}

loadItems()
