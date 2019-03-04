

let nameField = document.querySelector('#nameField')
nameField.style.height = '40px'
nameField.style.fontSize = '14px'
nameField.style.outline = 'none'
nameField.style.boxShadow = 'none'

nameField.addEventListener('keypress', function (event) {
	if (event.keyCode === 13) {
		let name = event.target.value
		createLi(name)
		nameField.value = ''
	}
})

function createLi(name) {
	let ul = document.querySelector('#listGroup')
	let li = document.createElement('li')
	li.className = 'list-group-item d-flex'
	li.innerHTML = name
	if (name.length > 0) {
		ul.appendChild(li)
	} else {
		alert('Enter a name')
	}

	let span = document.createElement('span')
	span.className = 'times'
	span.style.marginLeft = 'auto'
	span.style.cursor = 'pointer'
	span.innerHTML = '<i class="fas fa-times"></i>'
	li.appendChild(span)
	span.addEventListener('click', function() {
		ul.removeChild(li)
	})
}

