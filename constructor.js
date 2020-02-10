function p(stuff)
{
    document.write(stuff + "<br>")
}

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");

// Display age
p("My father is " + myFather.age + ".")