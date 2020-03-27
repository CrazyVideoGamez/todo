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
		note.innerText = notetext
		notes.appendChild(note)
	}
}

loadItems()

function addItem() {
	text = input.value

	localStorage.setItem("note"+localStorage.getItem('count'), text)
	localStorage.setItem('count', Number(localStorage.getItem('count'))+1)
	
	loadItems()
}
