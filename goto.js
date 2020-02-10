function p(stuff)
{
    document.write(stuff + "<br>")
}

var i = 0;
[lbl] start:
p("Hello, world!");
i++;
if(i < 10) goto start;