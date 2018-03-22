<template>
  <div class="header">
    <hamburger :toggleClick="toggleClick"
               :isActive="siderbar.opened" />
    <loginout />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Loginout from '@/components/Loginout'

export default {
  components: {
    Hamburger,
    Loginout
  },
  computed: {
    ...mapGetters(['siderbar'])
  },
  methods: {
    toggleClick () {
      this.$store.dispatch('ToggleSiderBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
}
</style>
