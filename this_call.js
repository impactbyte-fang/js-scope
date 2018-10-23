"use strict"

const get = {
  fullName: function() {
    return this.firstName + " " + this.lastName
  }
}

const person = {
  firstName: "John",
  lastName: "Doe"
}

console.log(get.fullName.call(person))
