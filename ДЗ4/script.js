myBind = function(func, context) {
  argsFromBind = [];
  argsFromFunc = [];
  for (i = 2; i < arguments.length; i++) // в argsFromBind кидаем все аргументы переданные в myBind пропуская переданную функцию и контекст
    argsFromBind.push(arguments[i]);
  return function (){
  for (i = 0; i < arguments.length; i++) // в argsFromFunc кидаем все аргументы переданные в func
    argsFromFunc.push(arguments[i]);
  allArguments = argsFromBind.concat(argsFromFunc); // соединяем полученые массивы
  return func.apply(context, allArguments);
  }
}

obj = {
  a: 1
}

showArguments = function(){ // функция возвращающая строку с контекстом и всеми её аргументами
  str = this.a;
  for (i = 0; i < arguments.length; i++)
      str += " " + arguments[i];
  return(str);
}

bindedFunc = myBind(showArguments, obj, "lalala", "blablabla");
console.log(bindedFunc(3, 4, 5)); 