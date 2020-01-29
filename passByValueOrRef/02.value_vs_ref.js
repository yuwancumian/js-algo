function setName(obj) {
  obj.name = "royi";
  obj = new Object();
  obj.name = "lin";
}
var person = new Object();

setName(person);
person;
