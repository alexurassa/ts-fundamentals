// func borrowing using call() and apply() to change to context of an obj
const employee = {
  firstName: "Alex",
  lastName: "Urassa",
  getInfo: function (city: string, occupation: string) {
    console.log(
      `${this.firstName} ${this.lastName} is a ${occupation} and lives in ${city}`
    );
  },
};

const customer = {
  firstName: "Maggie",
  lastName: "Alex",
};

// use customer as 'this' obj while exec getInfo method of emp

const info: [city: string, occupation: string] = [
  "New Jersey",
  "Software engineer",
];
employee.getInfo.call(customer, "New Jersey", "Software engineer");
employee.getInfo.apply(customer, info);

// the main diff btn call() and apply() is how you pass the params
// for call() you pass them as args while for apply() you pass them as an array

// when the method is outside

function getFullInfo(city: string, occupation: string): void {
  // @ts-ignore
  const context = this as { firstName: string; lastName: string };
  console.log(
    `${context.firstName} ${context.lastName} is a ${occupation} and lives in ${city}`
  );
}

getFullInfo.call(customer, "New York city", "Developer");
getFullInfo.apply(employee, ["Beth", "Farmer"]);
