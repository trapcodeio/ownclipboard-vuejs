<template>
    <div class="section">
        <div class="container">
            <div class="columns" v-if="username.length">
                <div class="column is-6-desktop is-offset-3-desktop">
                    <div class="box mt-5 has-background-dark has-text-white">
                        <h1 class="is-size-4">Your Histories <a @click.prevent="logout"
                                                                class="is-pulled-right is-danger"><small>logout</small></a>
                        </h1>
                        <hr class="m-0">
                        <p class="mb-5 mt-1">Welcome {{username}}, </p>

                        <div v-for="(hist, histIndex) in histories" class="box text-break" :key="histIndex">
                            {{hist.content}}
                        </div>
                    </div>
                </div>
            </div>
            <h1 v-else class="has-text-centered is-size-2">You are not logged!</h1>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import ApiService from "../services/Api";

    export default {
        data() {
            return {
                histories: []
            }
        },
        computed: {
            ...mapState(['username', 'host', 'api_key'])
        },
        mounted() {
            setTimeout(() => {
                this.fetchHistory();
            }, 500)
        },
        methods: {
            async fetchHistory() {
                const {host, api_key} = this;

                const {data} = await ApiService.histories(host, api_key);

                this.histories = data;
            },
            logout() {
                sessionStorage.removeItem('api_key');
                sessionStorage.removeItem('host');
                sessionStorage.removeItem('username');
                this.$store.commit('setApiKey', null);
                this.$store.commit('setHost', null);
                this.$store.commit('setUsername', '');

                return this.$router.push({name: 'home'});
            }
        }
    }
</script>