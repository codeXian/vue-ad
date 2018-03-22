<template>
  <div class="app-wrapper">
    <el-container>
      <sider-bar></sider-bar>
      <el-container>
        <el-header style="padding:0">
          <nav-bar></nav-bar>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { AppMain, NavBar, SiderBar } from './components'
export default {
  components: {
    AppMain,
    NavBar,
    SiderBar
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
