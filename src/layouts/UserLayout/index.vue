<template>
  <div class="user-layout">
    <el-row>
      <el-col :span="24">
        <login></login>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Login from '@/views/login'
export default {
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
  .user-layout {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
  }
</style>
