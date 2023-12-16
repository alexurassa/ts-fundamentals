const person = {
  firstName: "Buddy",
  lastName: "Someone",
};

function getFullName(city: string) {
  // @ts-ignore
  const context = this as { firstName: string; lastName: string };
  console.log(
    `name: ${context.firstName} ${context.lastName}\nlives in: ${city}`
  );
}

// bind an obj to a func/method
// NOTE: It never calls the method (just bind the data)

const personBind = getFullName.bind(person);
personBind("California");
