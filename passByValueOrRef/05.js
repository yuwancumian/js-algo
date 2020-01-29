var x = { name: "aaa" }; //初始化一个对象

var obj1 = x;

var obj2 = x; //obj1，obj2指向同一个引用类型

obj1.name = "bbb"; //在原引用上修改对象属性，x，obj，obj2的name属性值均改变
