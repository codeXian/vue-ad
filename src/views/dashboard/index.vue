<template>
  <div class="dashboard-container">
    <div class="name">name: {{name}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters(['name'])
  }
}
</script>
