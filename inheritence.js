function p(stuff)
{
    document.write(stuff + "<br>")
}

// Person Constructor
function Person(first, last, age, eyecolor)
{
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

//Adding a method to person constructor
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

//Adding a new property
Person.prototype.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
p("The nationality of my father is " + myFather.nationality)
p("Name is " + myFather.name())