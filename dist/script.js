var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Menu = (function () {
    //properties
    // public items: Array<string>;
    // public pages: number;
    // constructor (items: Array<string>, pages: number) {
    // 	this.items = items;
    // 	this.pages = pages;
    // }
    //constructor shortcut
    function Menu(items, pages) {
        this.items = items;
        this.pages = pages;
    }
    Menu.prototype.displayItems = function (containerId) {
        var container = document.getElementById(containerId);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var val = _a[_i];
            var newPrg = document.createElement("p");
            newPrg.appendChild(document.createTextNode(val));
            container.appendChild(newPrg);
        }
    };
    return Menu;
})();
var sundayMenu = new Menu(['Pancakes', 'Waffles', 'Chocolate Cake'], 1);
sundayMenu.displayItems('menu');
//inheritance
var HappyMeal = (function (_super) {
    __extends(HappyMeal, _super);
    //constructor with additional property
    function HappyMeal(items, pages, special) {
        _super.call(this, items, pages);
        this.items = items;
        this.pages = pages;
        this.special = special;
    }
    //override method from parent class
    HappyMeal.prototype.displayItems = function (containerId) {
        console.log("called from HappyMeal");
        //call original method from parent class
        _super.prototype.displayItems.call(this, containerId);
        //call additional method
        this.addSpecial(containerId);
    };
    //add special
    HappyMeal.prototype.addSpecial = function (containerId) {
        var container = document.getElementById(containerId);
        var newPrg = document.createElement('p');
        newPrg.appendChild(document.createTextNode('SPECIAL: ' + this.special));
        container.appendChild(newPrg);
    };
    return HappyMeal;
})(Menu);
var happy = new HappyMeal(['Burger', "Fries", "Ketchup"], 1, 'Toy');
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
//# sourceMappingURL=script.js.map