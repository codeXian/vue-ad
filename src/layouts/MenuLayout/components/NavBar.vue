<template>
  <div class="header">
    <hamburger :toggleClick="toggleClick" :isActive="siderbar.opened" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters(['siderbar'])
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('ToggleSiderBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 20px;
}
</style>
