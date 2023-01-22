<template>
  <div class="logs">
    <h1>Derniers Appels</h1>
    <LogsItem v-for="(call, i) in calls" :key="call.id" :phone-number="call.phoneNumber" :timestamp="call.timestamp"  :last="i === calls.length - 1"/>
  </div>
</template>

<script>
import LogsItem from '@/components/LogsItem.vue';

export default {
    name: "LogsView",
    computed: {
        calls() {
            return [...this.$store.state.calls].reverse();
        }
    },
    components: { LogsItem }
}
</script>

<style scoped>
    .logs {
        width: 400px;
        margin: 0 auto;
    }
</style>