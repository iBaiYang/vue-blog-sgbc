<template>
    <div id="edit-blog">
        <h2>编辑博客</h2>
        <form v-if="!submitted">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required/>
            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label>Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.categories">
                <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label>React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label>Angular4</label>
                <input type="checkbox" value="Angular4" v-model="blog.categories">
            </div>

            <label>作者：</label>
            <select v-model="blog.author">
                <option v-for="author in authors">
                    {{ author }}
                </option>
            </select>

            <button v-on:click.prevent="post">编辑博客</button>

        </form>

        <div v-if="submitted">
            <h3>您的博客编辑成功！</h3>
        </div>

        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题：{{ blog.title }}</p>
            <p>博客内容：</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>作者：{{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'edit-blog',
    data () {
        return {
            id: this.$route.params.id,
            blog: {
                title:"",
                content:"",
                body:"",
                categories:[],
                author: ""
            },
            authors:[
                "zhangsan",
                "lisi",
                "wangwu"
            ],
            submitted: false
        }
    },
    methods: {
        fetchData() {
            this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
                .then(function(data){
                    this.blog.title = data.body.title;
                    this.blog.content = data.body.body;
                });
        },
        post: function() {
            this.$http.put("https://jsonplaceholder.typicode.com/posts/" + this.id, {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            })
                .then(function(data) {
                    this.submitted = true;
                })
        },
    },
    created() {
        this.fetchData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit-blog *{
    box-sizing: border-box
}

#edit-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label{
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}

textarea{
    height: 200px;
}

#checkboxes label{
    display: inline-block;
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 15px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

#preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}

h3{
    margin-top: 10px;
}

</style>
  