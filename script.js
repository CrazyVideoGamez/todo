if (!(localStorage.getItem('count'))) {
	localStorage.setItem('count', '0')
}

function addItem() {
	localStorage.setItem("note"+localStorage.getItem('count'))
	localStorage.setItem('count', Number(localStorage.getItem('count'))+1)
}

function loadItems() {
	let notes = []
	for (i=0;i<Number(localStorage.getItem('count'));i++) {
		let note = localStoraget.getItem('note'+i)
		notes.push(note)
	}
	console.log(notes)
}