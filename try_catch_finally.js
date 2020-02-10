function p(stuff)
{
    document.write(stuff + "<br>")
}

var x = 2;
try
{
    if((x-3)<0) throw p("negative value ");
    if(isNaN(x)) throw p("is not a number");
    x = Number(x);
    if(x > 10) throw p("is too high");
    if(x < 5) throw p("is too low");
}
catch(x)
{
    p("exceeds limit")
}
finally
{
    p("Will be visited always")
}

