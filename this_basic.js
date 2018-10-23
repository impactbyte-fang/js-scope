"use strict"

const animal = {
  name: "Koko",
  age: 1,
  color: "brown",
  printDetail: () => {
    return `${this.name} is ${this.age} year(s) old, with a ${this.color} color`
  }
}

animal.printDetail()
