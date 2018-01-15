class Menu {

	//properties
	// public items: Array<string>;
	// public pages: number;

	// constructor (items: Array<string>, pages: number) {
	// 	this.items = items;
	// 	this.pages = pages;
	// }

	//constructor shortcut
	constructor(public items: Array<string>, public pages: number) {

	}

	displayItems(containerId: string): void {
		var container: HTMLElement = 
				document.getElementById(containerId);
		for(var val of this.items) {
			let newPrg: HTMLElement = document.createElement("p");
			newPrg.appendChild(document.createTextNode(val));
			container.appendChild(newPrg);
		}
	}
}

let sundayMenu = new Menu(['Pancakes', 'Waffles', 'Chocolate Cake'], 1);
sundayMenu.displayItems('menu');

//inheritance
class HappyMeal extends Menu {
	//constructor with additional property
	constructor(public items: Array<string>, public pages: number, 
		public special: string) {
		super(items, pages);
	}

	//override method from parent class
	displayItems(containerId: string): void {
		console.log("called from HappyMeal");
		//call original method from parent class
		super.displayItems(containerId);
		//call additional method
		this.addSpecial(containerId);
	}

	//add special
	addSpecial(containerId: string): void {
		var container: HTMLElement = 
				document.getElementById(containerId);
		let newPrg: HTMLElement = document.createElement('p');
		newPrg.appendChild(document.createTextNode('SPECIAL: ' + this.special));
		container.appendChild(newPrg);
	}

}

let happy = new HappyMeal(['Burger', "Fries", "Ketchup"], 1, 'Toy');
happy.displayItems('menu');

//decorators
//@course
// @Course({
//     course: "hhhhhhhh 2"
// })
// class Person {
//     firstName;
//     lastName;
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

//'target' represents the constructor function of the class the decorator is attached to
//add a function called course onto the class it decorates
// function course(target) {
//     Object.defineProperty(target.prototype, 'course', { value: () => "Angular 2" })
// }

// let person = new Person('Irene', 'Theiss');
// console.log(person.Course());


// function Course(config) { // 1
//     return function(target) {
//         Object.defineProperty(
//             target.prototype,
//             'course', { value: () => config.course } // 2
//         )
//     }
// }




