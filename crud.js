let users = [
	{ id: 1, name: 'NaxWeb', email:'NaxWeb@gmail.com' },
	{ id: 2, name: 'Juan', email:'Juan@gmail.com' },
	{ id: 3, name: 'Karla', email:'Karla@gmail.com' }
]
console.log('Users', users);

function getLastId() { return users.length + 1 }

let user = { id: getLastId(), name: 'Asadacio', email: 'Asda@mail.com' }
users.push(user)
console.log('Push', users);

users = [...users, {...user, id: getLastId()}]
console.log('Add con iteneracion (...)', users);

console.log('Update id 5');
userUp = { id: 5, name: 'Carlos', email: 'car@mail.com' }
users = users.map(user => (user.id === userUp.id ? userUp : user))
console.log(users);

console.log('Delete id 4');
users = users.filter(user => (user.id !== 4))
console.log(users);