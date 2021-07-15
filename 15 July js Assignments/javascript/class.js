class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan() {
        return `I am ${this.name}  Have a great day.`
    }
    joiningyear() {
        return 2020 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}

rahul = new Employee('Rahul', 5, 'developer')
console.log(rahul)
console.log(rahul.joiningyear());
console.log(Employee.add(3, 2))