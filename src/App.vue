<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            const api_key = sessionStorage.getItem('api_key') || null;
            const host = sessionStorage.getItem('host') || null;
            const username = sessionStorage.getItem('username') || '';

            this.$store.commit('setApiKey', api_key);
            this.$store.commit('setHost', host);
            this.$store.commit('setUsername', username);
        }
    }
</script>