function p(stuff)
{
    document.write(stuff + "<br>")
}
p("start =");
var x = 0.1;
do {
    p("x = " + x);
    x = x + 0.1;
} while(x < 1.0)

p("start +=");
var x = 0.1;
do {
    p("x = " + x);
    x += 0.1;
} while(x < 1.0)

var x1 = 1.0, x2 = 1.0, x3 = 1.0, x4 = 1.0;
var y = 0.25;
for(var i = 0; i < 5; i++) {
    x1 += y;
    x2 -= y;
    x3 *= y;
    x4 /= y;
}
p("x1 += y: " + x1);
p("x2 -= y: " + x2);
p("x3 *= y: " + x3);
p("x4 /= y: " + x4);