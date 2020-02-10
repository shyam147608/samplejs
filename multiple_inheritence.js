function p(stuff)
{
    document.write(stuff + "<br>")
}

function Employee() {
  this.name = '';
  this.dept = 'general';
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
   WorkerBee.call(this);
   this.dept = 'engineering';
   this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype)
Engineer.prototype.constructor = Engineer;

var jim = new Employee;
var sally = new Manager;
var mark = new WorkerBee;
var fred = new SalesPerson;
var jane = new Engineer;

mark.name = 'markus'
p("mark.name  =  " + mark.name) //markus
p("mark.reports = " + mark.reports) // undefined as it is empty
p("mark.dept = " + mark.dept) // general

//Adding new property to mark
mark.bonus = 1000
p("mark.bonus = " + mark.bonus)