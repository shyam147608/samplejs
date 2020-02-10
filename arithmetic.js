function p(stuff)
{
    document.write(stuff + "<br>")
}

var n = 3;
var m = 1;
p("n = " +n+ "<br>"+"m = "+m)
p("Addition --> " + (n+m))
p("Subtraction --> " + (n-m))
p("Multiplication --> " + (n*m))
p("Division --> " + (n/m))
p("negative " + n + " = " + n);

var ipost = 0;
var ipre = 0;
var dpost = 0;
var dpre = 0;
for(var i = 0; i < 5; i++) {
    p("<br>")
    p("iteration number " + i); // 0 on first iteration
    p("ipost = " + ipost++); // 0 on first iteration
    p("ipre = " + ++ipre); // 1 on first iteration
    p("dpost = " + dpost--); // 0 on first iteration
    p("ipre = " + --dpre); // -1 on first iteration

}

var nn = -n;
var mm = -m;

p("negative " + n + " = " + nn); // prints -1
p("negative " + m + " = " + mm); // prints 1