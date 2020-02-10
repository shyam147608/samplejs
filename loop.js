function p(stuff)
{
    document.write(stuff + "<br>")
}
var n = 1
var m = 10
p("----------------------")
p("If-else" + "<br>")
if (n>m)
{
    p("inside If")
}
else if(n == m)
{
    p("inside else if")
}
else
{
    p("inside else")
}
p("----------------------")
p("While Loop" + "<br>")
while(n <10)
{
    p("inside while")
    n++
}
p("----------------------")
p("Do - While Loop" + "<br>")
do
{
    p("inside Do while")
    m--
}while(m > 0);
p("----------------------")
p("for Loop" + "<br>")
for(var i =0 ; i<10; i++)
{
    p("value of i =" + i)
}



