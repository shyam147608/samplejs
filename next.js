function* gen() {
  while(true) {
    var value = yield null;
    p(value);
  }
}

function p(stuff)
{
    document.write(stuff + "<br>")
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"