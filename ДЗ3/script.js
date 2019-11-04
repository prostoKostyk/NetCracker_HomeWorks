//Добавление контейнера в body, у которого будет display: grid
let container = document.createElement('div');
container.className = "container";
document.body.append(container);

// Добавление div c классом grid, который будет центроваться по горизонтали с помощью  justify-self: center
let grid = document.createElement('div');
grid.className = "grid";
document.getElementsByClassName("container")[0].append(grid);

//Добавление в div c классом grid кнопки
let button = document.createElement('button');
button.className = "btn";
button.id = "btn";
button.innerHTML = "Нажми на меня";

document.getElementsByClassName("grid")[0].append(button);
// Добавление div, который по умолчанию будет скрыт, для выпающего меню и его треугольника
let hiddenDiv = document.createElement('div');
hiddenDiv.className = "hidden-div";
hiddenDiv.id = "hidden-div";
document.getElementsByClassName("grid")[0].append(hiddenDiv);

//Добавление треугольника для выпадающего меню
let triangle = document.createElement('div');
triangle.className = "triangle";
document.getElementsByClassName("hidden-div")[0].append(triangle);

//Добавление меню
let menu = document.createElement('div');
menu.className = "menu";
document.getElementsByClassName("hidden-div")[0].append(menu);

//добавление циклом пять строк в выпадающее меню
for (i = 1; i < 6; i++){
let div = document.createElement('div'); //Создание нового div элемента
div.innerHTML = "Строка № " + i; // Добавление текста в очередной div с номером строки
document.getElementsByClassName("menu")[0].append(div); // Вставляем элемент в другой элемент с id = menu
}

// Открытие/закрытие выпадающего меню по нажатию кнопки 
button.onclick = function() {
    menuCondition = document.getElementById("hidden-div").style.display; // 
    document.getElementById("hidden-div").style.display = "block";
  };
