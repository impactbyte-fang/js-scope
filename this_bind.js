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

const getFullName = get.fullName.bind(person)

console.log(getFullName())
console.log(getFullName())
console.log(getFullName())
console.log(getFullName())
console.log(getFullName())
