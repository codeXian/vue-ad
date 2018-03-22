<template>
  <el-menu default-active="1"
           class="el-menu-vertical-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           @open="handleOpen"
           @close="handleClose"
           :collapse="siderbar.opened">
    <el-menu-item index="1">
      <router-link to="/" tag="div">首页</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">组件</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">
          <router-link to="/tinymce" tag="div">富文本编辑器</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-share"></i>
        <span slot="title">图表</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">
          <router-link to="/echarts" tag="div">echarts</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-sort"></i>
        <span slot="title">表单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">
          <router-link to="/form" tag="div">form</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['siderbar'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  height: 100vh;
}

.el-menu-item a{
  color: inherit;
}
</style>
