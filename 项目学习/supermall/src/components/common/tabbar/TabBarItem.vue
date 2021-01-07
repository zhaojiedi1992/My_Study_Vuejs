<template>
  <div class="tab-bar-item" @click="tabBarItemClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="active-icon"></slot>
    </div>
    <div :class="{'tab-bar-item-active-font-class': isActive}">
      <slot name="text"></slot>
    </div>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {

    }
  },
  props:{
    path:{
      type: String,
      required: true,
    }
  },
  methods: {
    tabBarItemClick() {
      //点击跳转下一个地址
      if (this.$route.path !== this.path){
        this.$router.replace(this.path)
      }

    }
  },
  computed:{
    isActive(){
      // 如果当前的路径包含了当前对应的传递path的时候，表示当前组件处于被点击了。
      return  this.$route.path.indexOf(this.path) !==-1
    },
  }
}
</script>

<style scoped>
.tab-bar-item {

  flex: 1;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.tab-bar-item-active-font-class{
  color: red;
}
</style>
