<script>
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>


<template>
  <div
    class="MyContainer"
    style=" min-height: 100vh; display: flex; flex-direction: row"
  >
    <div
      class="sideBar"
      style=" min-height: 100vh; width: 18vw"
    >
      <SideBar />
    </div>
    <div class="MyContent" style=" min-height: 100vh; width: 82vw">
      <router-view></router-view>
    </div>
  </div>
</template>