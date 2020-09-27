<template>
  <div id="nav" >
    <Navbar/>
    <router-view></router-view>
  </div>
  
</template>
<script>
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
export default {
  name:"app",
  components:{
    Navbar
  }
}
</script>

<style lang="scss">

</style>
