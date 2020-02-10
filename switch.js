function p(stuff)
{
    document.write(stuff + "<br>")
}

var number = 3
switch(number)
{
    case 1: p("Inside Case 1")
            break;
    case 2: p("Inside Case 2")
            break;
    case 3: p("Inside Case 3")
            break;
    default: p("Inside default")

}