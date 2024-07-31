let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let todaysDate = new Date();
	const currentYear = todaysDate.getFullYear();
	const currentMonth = todaysDate.getMonth();
	const currentDay = todaysDate.getDate();
	const yearBorn = person.birthDate.getFullYear();
	const monthBorn = person.birthDate.getMonth();
	const dayBorn = person.birthDate.getDate();
	let age = currentYear - yearBorn;
	if (currentMonth < monthBorn || (currentMonth === monthBorn && currentDay<dayBorn)){
		age --;
	}
	return `Hello, my name is ${person.name} and I am ${age} years old`;
};

console.log(people.map(simplifier));
