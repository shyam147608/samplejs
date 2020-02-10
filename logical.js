function p(stuff)
{
    document.write(stuff + "<br>")
}
var a = true;
var b = false;
var n0 = 0;
var n1 = 1;
var nm1 = -1;
var x0 = 0.0;
var x1 = 1.1;
var s0 = "";
var s1 = "foo";
var sn = null;

// How different types are treated as boolean
if(a) p("a is true"); else p("a is false"); // true
if(b) p("b is true"); else p("b is false"); // false
if(n0) p("n0 is true"); else p("n0 is false"); // false
if(n1) p("n1 is true"); else p("n1 is false"); // true
if(nm1) p("nm1 is true"); else p("nm1 is false"); // true
if(x0) p("x0 is true"); else p("x0 is false"); // false
if(x1) p("x1 is true"); else p("x1 is false"); // true
if(s0) p("s0 is true"); else p("s0 is false"); // false
if(s1) p("s1 is true"); else p("s1 is false"); // true
if(sn) p("sn is true"); else p("sn is false"); // false

// Using logical values as operands
p("a && a = " + (a && a)); // true
p("a && b = " + (a && b)); // false
p("b && b = " + (b && b)); // false
p("b && a = " + (b && a)); // false
p("a || a = " + (a || a)); // true
p("a || b = " + (a || b)); // true
p("b || b = " + (b || b)); // false
p("b || a = " + (b || a)); // true
p("!a = " + (!a)); // false
p("!b = " + (!b)); // true

// Using non-logical values as operands
p("n1 && n1 = " + (n1 && n1)); // true
p("n1 && n0 = " + (n1 && n0)); // false
p("n0 && n0 = " + (n0 && n0)); // false
p("n0 && n1 = " + (n0 && n1)); // false
p("n1 || n1 = " + (n1 || n1)); // true
p("n1 || n0 = " + (n1 || n0)); // true
p("n0 || n0 = " + (n0 || n0)); // false
p("n0 || n1 = " + (n0 || n1)); // true
p("!n1 = " + (!n1)); // false
p("!n0 = " + (!n0)); // true