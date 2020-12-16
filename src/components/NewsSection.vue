<template>
<!-- NOTICIA 1-->
<div class="row mt-md-5 mt-sm-5 mt-xs-5">
    <div class="col-lg-6 col-xs-12" v-for="(noticia, index) of noticias" :key="index">
        <div class="d-flex justify-content-center align-items-center" >

            <div class="p-3">
                <img :src="noticia.image" alt="imagenNoticia" width="350px"  viewBox="0 0 10 10">
            </div>

            <div class="p-2">
                <h6> {{noticia.title}} </h6>
                <p> {{noticia.description}}</p>
            </div>

        </div>
        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
            <button type="button" class="btn btn-outline-info"><span class="news-url"><a :href="noticia.url" id="news-url-1" target="_blank">Ver más</a></span></button>
        </div>
    </div>
</div>
<!-- NOTICIA 1-->
</template>


<script>
    import axios from "axios"
    export default {
        name: "NewsSection",
        data(){
            return{
                noticias : null
            }
        },
        created(){
            axios
                .get('https://gnews.io/api/v4/search?q=adopcion mascotas&token=02335c2fc08f425d44b938c3103baa06')
                .then(response => {this.noticias = response.data.articles.slice(0,4)})
                console.log(this.noticias)
        }
    }
</script>

<style scoped>
h6, p{
    text-align: justify;
  }
</style>