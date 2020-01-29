var bar = "aaa";
var foo = bar;
// bar.name = 123;
bar = { key: "value" };

console.log(foo); // 'aaa'
console.log(bar); //{key: "value"}
