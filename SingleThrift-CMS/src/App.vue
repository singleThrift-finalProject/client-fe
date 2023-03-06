<script>
import SideBar from "./components/SideBar.vue";
export default{
components:{SideBar}
}
</script>

<template>
  <div>
    <SideBar />
    <router-view></router-view>
  </div>
</template>