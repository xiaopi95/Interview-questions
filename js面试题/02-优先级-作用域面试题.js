//作用域链：就是从内部逐级向上查找
//顺序、优先级：函数的优先级是大于参数的，参数的优先级是大于变量提升的
//var变量 > 函数 > 参数 > 变量提升


/*function test (){
    console.log(str);
    var str = "123";
}
test();*/

/*function fun1 (str) {
    function str () {
        return "999";
    }
    console.log(str);
    var str = "123"
};
fun1(789);*/

/*var bar = 1;
function test () {
    console.log(bar);//undefined
    var bar = 2;
    console.log(bar);//2
}
test();*/

/*var foo = function (){console.log(1)};
function foo() {console.log(2)};
foo();*/

/*function c () {
    var b = 1;
    function a () {
        console.log(b);//undefined
        var b  = 2;
        console.log( b );//2
    };
    a();
    console.log(b);//1
};
c();*/

var name = "world";
(function () {
    if(typeof name === "undefined"){
        
    }
})()
