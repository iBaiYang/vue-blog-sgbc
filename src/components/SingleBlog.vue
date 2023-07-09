<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>

        <div class="btn-set">
            <router-link :to="'/edit/' + id">编辑</router-link>
            <button @click="deleteSingleBlog()">删除</button>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'single-blog',
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        // this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
        // .then(function(data){
        //     this.blog = data.body;
        // });

        // var _this = this
        // axios.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
        // .then((data) => {
        //     return data.data;
        // })
        // .then(function(data){
        //     _this.blog = data;
        // });

        // axios.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
        // .then((data) => {
        //     return data.data;
        // })
        // .then((data) => {
        //     this.blog = data;
        // });

        // axios.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
        // .then((data) => {
        //     this.blog = data.data;
        // });

        axios.get("/posts/" + this.id)
        .then((data) => {
            this.blog = data.data;
        });
    },
    methods: {
        deleteSingleBlog() {
            this.$http.delete("https://jsonplaceholder.typicode.com/posts/" + this.id)
                .then(response => {
                    this.$route.push({path:"/"})
                })
        }
    }
}
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px;
    background: #eee;
    border: 1px dotted #aaa;
}

.btn-set {
    height: 44px;
    width: 100%;
    margin-top: 30px;
}

#single-blog a {
    display: block;
    float: left;
    width: 36px;
    height: 24px;
    background: rgb(108, 169, 70);
    color: #fff;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

button {
    display: block;
    float: left;
    margin: 0 20px;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}
</style>
