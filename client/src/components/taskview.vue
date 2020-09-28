<template>
<div>
    <div class="alert alert-success" role="alert" v-if="alert">
        you have add a task successfully
</div>
    <form class="form-inline my-2  col-12 m-5" @submit="addTask" >
      <input class="form-control mr-sm-2 col-6 m-5" type="text" placeholder="Enter new Task" v-model="text">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Submit</button>
    </form>
   
    <div class="jumbotron jumbotron m-5 bg-info " v-for="i in tasks" :key="i" @dblclick="deletetasks(i._id)">     
  <div class="container" >
      <h1 class="display-5">{{i.text}}</h1>
    <h1 class="lead">{{i.date.slice(0,10)}}</h1>
  </div>
</div>
</div>
</template> 
<script>
import Task from "../task"
export default {
    name:"taskview",
    data() {
        return {
            tasks:[],
            text:"",
            alert:""
        }
    },
    created() {
        try {
            Task.get().then(res=>{
            this.tasks=res.data;
            console.log(this.tasks);
            
        })
        } catch (error) {
            console.log(error)
            
        }
        this.alert=""
    },
    methods: {
        addTask(){
            Task.addtask(this.text)
            this.alert=this.text
            this.text=""

            
            
        },
        deletetasks(id){
            Task.delete(id).catch(console.error())
            window.location.href = "/";
        }
    },
    
    
}
</script>