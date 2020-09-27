<template>
<div>
    <taskview/>
  </div>
</template>

<script>

// @ is an alias to /src
import taskview from "../components/taskview"

export default {
  name: "Home",
  components: {
    taskview
  },
  created() {
    
  },
};
</script>
