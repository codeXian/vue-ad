<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      首页/退出
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <router-link to="/">首页</router-link>
      </el-dropdown-item>
      <el-dropdown-item>
        <router-link to="/login">退出</router-link>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {}
</script>

<style>
  .el-dropdown {
    cursor: pointer;
  }
</style>
