interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Abhijeet Singh'));
console.log(sayStuff.sayBye('Abhijeet Singh'));