function decoratorFunction(target: any) {
  console.log("Decorator function called");
}

function decoratorFactory(name: string) {
  return function (target: any) {
    console.log(`factory with name: ${name} called`);
  };
}

@decoratorFunction
class DecoratoratedClass {}

@decoratorFactory("standard")
class FacatoryDecoratedClass {}
