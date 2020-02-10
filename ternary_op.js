function p(stuff)
{
    document.write(stuff + "<br>")
}

p("------ Ternary operator ------")
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
p("age = "+ age + "<br>"+ "beverage = " + beverage); // "Beer"