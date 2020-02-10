var MYAPPLICATION = {
    p:function(stuff){
        document.write(stuff + "<br>")
    },
    calculateTax: function (item) {
        return item * 1.40;
    },
    product: function (cost) {
        this.cost = cost;
        this.getCost = function(){
                          return this.cost;
                       };
    },
    doTaxCalculations: function () {
        var a = new MYAPPLICATION.product(100);
        p(this.calculateTax(a.getCost()));
    }
}

var newProduct = new MYAPPLICATION.product(200);
p(newProduct.getPrice());