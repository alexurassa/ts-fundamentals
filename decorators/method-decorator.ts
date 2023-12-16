// method logger
function logMessage(message: string) {
  return function (
    target: any,
    propKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(message);
  };
}

// email validator
function isEmailValid(email: string): boolean {
  const validatorPtn: RegExp = /^\w+@[a-zA-Z].\w+/;
  return validatorPtn.test(email);
}

// email validator decorator
function validateEmail() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const orgMethod = descriptor.value;

    descriptor.value = function (...args: [string]) {
      const _email: string = args[0];
      if (!isEmailValid(_email)) {
        console.error(`Given email: ${_email} is invalid`);
        return;
      }
      return orgMethod.apply(this, args);
    };
  };
}

// minLength password validator decorator
function validatePassword(minLength: number) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const orgMethod = descriptor.value

    descriptor.value = function(...args: string[]) {
      if(args[0].length < minLength) {
        console.error("password should be at least %s", minLength)
        return;
      }
      console.log("this", this)
      return orgMethod.apply(this, args)
    }
  }
}

class MethodUser {
  email!: string
  password!: string;

  @validatePassword(6)
  @logMessage("Updating password")
  updatePassword(newPassword: string): void {
    if(this.password !== newPassword) {
      this.password = newPassword
      console.log("Successfully updated password")
    }
    else {
      console.info("password is the same as the previous password")
    }
  }

  @validateEmail()
  @logMessage("updating Email")
  updateEmail(newEmail: string) {
    if(this.email !== newEmail) {
      this.email = newEmail;
      console.log(`Successfully updated email to: %s`, this.email);
    }
    else{
      console.log("Email unchanged")
    }
  }
}

const methodUser: MethodUser = new MethodUser();
// methodUser.email = "maggie@alex.fam";

methodUser.updateEmail("maggie_new26@alex.fam");
methodUser.updateEmail("maggie_new26@alex.fam");


// update passwords
methodUser.updatePassword("mypassword82")
methodUser.updatePassword("jdja")