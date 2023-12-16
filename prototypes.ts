const personProto = {
  greet() {
    console.log("This is person prototype");
  },
};

// create an object from prototype of an object

const personObj = Object.create(personProto);

console.log(personObj.greet());
console.log("prototype of personObj", Object.getPrototypeOf(personObj));
