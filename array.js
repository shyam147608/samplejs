function p(stuff)
{
    document.write(stuff + "<br>")
}

p("<br>"+"-----primitive usage() ------"+"<br>")
var cars = ["Saab", "Volvo", "BMW"];
p(cars)

p("<br>"+"-----using Array() ------"+"<br>")
var toys = new Array('mickey','mini','tom','jerry')
p(toys)