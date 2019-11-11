var Human = (function() {  
  var Human = function(name, age ) {
    this.name = name;
    this.age = age;
     };
  Human.prototype.printInfo = function() {
    return ("У наследуемого класса нет данного метода")
  };
  return Human;
})();

var Man = (function() {
  var Man = function() {
    Human.apply(this, arguments);
  };
  Man.prototype = Object.create(Human.prototype);
  Man.prototype.constructor = Man;
  Man.prototype.printInfo = function() {
    return ("Hi! I'm a man, my name is " + this.name + " and i'm " + this.age + " years old")
  };
  return Man;
})();

var Woman = (function() {
  var Woman = function() {
    Human.apply(this, arguments);
  };
  Woman.prototype = Object.create(Human.prototype);
  Woman.prototype.constructor = Human; 
  return Woman;
})();
var kostyk = new Man("Kostyk", 100500);
console.log(kostyk.printInfo()); // Hi! I'm a man, my name is Kostyk and i'm 100500 years old

var sussan = new Woman("Sussan", 26);
console.log(sussan.printInfo()); // У наследуемого класса нет данного метода




