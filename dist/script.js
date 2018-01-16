if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
class Menu {
    //properties
    // public items: Array<string>;
    // public pages: number;
    // constructor (items: Array<string>, pages: number) {
    // 	this.items = items;
    // 	this.pages = pages;
    // }
    //constructor shortcut
    constructor(items, pages) {
        this.items = items;
        this.pages = pages;
    }
    displayItems(containerId) {
        var container = document.getElementById(containerId);
        for (var val of this.items) {
            let newPrg = document.createElement("p");
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
    constructor(items, pages, special) {
        super(items, pages);
        this.items = items;
        this.pages = pages;
        this.special = special;
    }
    //override method from parent class
    displayItems(containerId) {
        console.log("called from HappyMeal");
        //call original method from parent class
        super.displayItems(containerId);
        //call additional method
        this.addSpecial(containerId);
    }
    //add special
    addSpecial(containerId) {
        var container = document.getElementById(containerId);
        let newPrg = document.createElement('p');
        newPrg.appendChild(document.createTextNode('SPECIAL: ' + this.special));
        container.appendChild(newPrg);
    }
}
let happy = new HappyMeal(['Burger', "Fries", "Ketchup"], 1, 'Toy');
happy.displayItems('menu');
//decorators
//@course
let Person = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
Object.defineProperty(Person, "name", { value: "Person", configurable: true });
Person = __decorate([
    Course({
        course: "hhhhhhhh 2"
    })
], Person);
//'target' represents the constructor function of the class the decorator is attached to
//add a function called course onto the class it decorates
function course(target) {
    Object.defineProperty(target.prototype, 'course', { value: () => "Angular 2" });
}
let person = new Person('Irene', 'Theiss');
console.log(person.Course());
function Course(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', { value: () => config.course } // 2
        );
    };
}
//# sourceMappingURL=script.js.map