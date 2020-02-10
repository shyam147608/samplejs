function p(stuff)
{
    document.write(stuff + "<br>")
}
var n = 9;

p("n == 9: " + (n == 9)); // true
p("n != 9 : " + (n != 9)); // false
p("n == \"9\" : " + (n == "9")); // true
p("n != \"9\" : " + (n != "9")); // false
p("n === \"9\" : " + (n === "9")); // false
p("n !== \"9\" : " + (n !== "9")); // true
p("n > 9: " + (n > 9)); // false
p("n >= 9: " + (n >= 9)); // true
p("n < 9: " + (n < 9)); // false
p("n <= 9: " + (n <= 9)); // true
p("n > \"9\" : " + (n > "9")); // false
p("n >= \"9\" : " + (n >= "9")); // true
p("n < \"9\" : " + (n < "9")); // false
p("n <= \"9\" : " + (n <= "9")); // true