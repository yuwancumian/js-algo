function foo(num, obj) {
  num = 20;
  obj.value = "changed";
}
var num1 = 10;
var obj1 = { value: "hello" };
foo(num1, obj1);
num1;
obj1;
