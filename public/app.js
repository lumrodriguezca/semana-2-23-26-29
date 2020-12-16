const llamadaAPI = async() => {
    fetch('https://gnews.io/api/v4/search?q=adopcion mascotas&token=d94b538625c2b7f147f8f795b2f991d3')
    .then(function (response) {
        const resultadoJson = response.json()
        return resultadoJson;
    })
    .then(function (data) {
        console.log(data);
        
        let titulo = [];
        let descripcion = [];
        let contenido = [];
        let url = [];
        let imagen = [];

        let titleArray = ['news-title-1', 'news-title-2', 'news-title-3', 'news-title-4'];
        let infoArray = ['news-info-1', 'news-info-2', 'news-info-3', 'news-info-4']
        let urlArray = ['news-url-1', 'news-url-2', 'news-url-3', 'news-url-4']
        let imageArray = ['news-image-1', 'news-image-2', 'news-image-3', 'news-image-4']

        for (let i = 0; i < 4; i++) {
            titulo[i] = data['articles'][i]['title'];
            descripcion[i] = data['articles'][i]['description'];
            contenido[i] = data['articles'][i]['content'];
            url[i] = data['articles'][i]['url'];
            imagen[i] = data['articles'][i]['image'];

            document.getElementById(titleArray[i]).innerHTML = titulo[i]
            document.getElementById(infoArray[i]).innerHTML = descripcion[i]
            document.getElementById(urlArray[i]).href = url[i]
            document.getElementById(imageArray[i]).src = imagen[i]

            console.log(titulo[i])
            console.log(descripcion[i])
            console.log(contenido[i])
            console.log(url[i])
            console.log(imagen[i])
        }
    });  
}
llamadaAPI();

const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })