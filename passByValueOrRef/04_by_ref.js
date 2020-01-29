var person = {};
var obj = person;
obj.key = "value";
person.name = "royi";
console.log(person); // {key: "value"}
console.log(obj); //{key: "value"}
