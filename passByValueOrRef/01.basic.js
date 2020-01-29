let o ={}
o.a = 3;
o.b =4;
function swap(obj,a,b) {
    var tmp = obj[a];
    obj[a] = obj[b];
    obj[b] = tmp; 
}
swap(o, 'a', 'b')
o










