let users = [
	{ id: 1, number: 1, email:'NaxWeb@gmail.com' },
	{ id: 2, number: 2, email:'Juan@gmail.com' },
	{ id: 3, number: 3, email:'Karla@gmail.com' }
]

let user = { id: getLastId(), number: numberRamdon(), email: 'Asda@mail.com' }
users.push(user)

console.log("Crud de consola con datos ramdon");
console.log('Users\n', users, '\n');

function getLastId() { return users.length + 1 }
function listar() {	return console.log('\nUsers\n\n', users, '\n'); }
const ramdonId = () => { 
	let id;
	do {
		id = Math.floor(Math.random() * getLastId());
		const user = users.find(user => (user.id === id));
		id = user == null ? 'next' : id;
		// console.log(user, id);
	} while (id == 'next')
	return id;
};
function numberRamdon() { return Math.floor(Math.random() * 100) }

function Opciones() {
    console.log("\n Opciones: \n 1 add \n 2 update \n 3 remove \n 0 exit \n");
}

function add() {
	users = [...users, {...user, id: getLastId()}]
	listar()
}

function update() {
	const id = ramdonId();
	const dateRamdon = numberRamdon();
	console.log('Update id ' + id + '\n');
	userUp = { id, number: dateRamdon, email: dateRamdon + '@gmail.com' }
	users = users.map(user => (user.id === userUp.id ? userUp : user))
	listar()
}

function remove() {
	const id = ramdonId();
	console.log('Delete id ' + id + '\n');
	users = users.filter(user => (user.id !== id))
	listar()
}

Opciones()
var stdin = process.openStdin();
let digito;
stdin.addListener("data", function(d) {

	Opciones()

	digito = d.toString().trim()

	switch (digito) {
  		case '1': add(); break;
  		case '2': update(); break;
  		case '3': remove(); break;
  		case '0': stdin.pause(); break;
  		default: console.log('Opcion incorrecta, reingrese \n'); break;
  	}

});

// stdin.on("readable", function() {

// 	console.log(stdin.read().toString().trim());

// 	if (digito == 1) {
// 		console.log('Ingrese ID');
// 		console.log('Ingrese 2');
// 	}

// })