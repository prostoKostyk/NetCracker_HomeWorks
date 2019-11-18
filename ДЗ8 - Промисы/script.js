// Промис для проверки загрузки картинки
function loadImage(src) {
	return new Promise((resolve, reject) => {
	  const img = new Image();
	  img.src = src;
	  err = new Error('Загрузить картинку не удалось');
	  img.onload = function(){
		resolve(img.src);
	};
	img.onerror = function(){
		reject(err);
	};	
	});
  };
  
function addImageOnBackground (src){
loadImage(src)
.then(function (fulfilled) {
	console.log(fulfilled);
	document.body.style.backgroundImage = "url('"+ src +"')";
})
.catch(function (error) {
	console.log(error.message);
});
}

addImageOnBackground ("https://avatars.mds.yandex.net/get-pdb/70729/d8b572db-b999-4463-a271-f1ca788ffa6d/s1200")
