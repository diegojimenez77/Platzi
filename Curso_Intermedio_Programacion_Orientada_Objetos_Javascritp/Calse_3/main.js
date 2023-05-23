// En este ejemplo se muestran las diferentes formas que podemos obtener la informacion de un objeto.
const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

console.log(Object.getOwnPropertyDescriptors(juan));

//Cons estos ejemplos entenderemos como es que funcionan los atributos de las propiedades
console.log(Object.defineProperty(juan, "pruebaNASA", {
    value:"extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
}));

console.log(Object.defineProperty(juan, "navigator", {
    value:"Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
}));


console.log(Object.defineProperty(juan, "editor", {
    value:"VSCode",
    enumerable: true,
    writable: false,
    configurable: true,
}));


console.log(Object.defineProperty(juan, "terminal", {
    value:"WSL",
    enumerable: true,
    writable: true,
    configurable: false,
}));

//Otros metodos estaticos del superprotitupo Object

Object.seal(juan); //pone todas las propiedades configurable como false
Object.freeze(juan); //pone todas las propiedades writable como false, tampoco permite modificarlas.


console.log(Object.getOwnPropertyDescriptors(juan));