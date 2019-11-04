obj = '{"str": "Нормальный объект"}'; 
delay = 5;
setInterval(function(){
try {
  parsed = JSON.parse(obj);
  document.getElementById("mistake").innerText  = "Пока всё нормально\n" + delay--; 
  setTimeout(function(){ obj = '{Неправильный объект}'}, delay * 1000); // меняем значение obj
} catch(err) {
  document.getElementById("mistake").innerText = "Ошибка" + err; 
}}, 1000);