<template>
  <div class="about">
    <navbar></navbar>
    <tasklist></tasklist>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import tasklist from '@/components/tasklist.vue'
export default {
  components: {
    navbar,
    tasklist
  }
}
</script>


<style>
.v-card__title {
text-align: center;
margin-left: 35%
}

.v-btn__content {
  color: white !important;
}
</style>


