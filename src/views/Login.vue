<template>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-6-desktop is-offset-3-desktop">
                    <div class="box mt-5 has-background-dark has-text-white">
                        <h1 class="is-size-3">Own ClipBoard</h1>
                        <hr class="mt-0">
                        <form @submit.prevent="login" action="">
                            <div class="field">
                                <div class="control">
                                    <input v-model="form.use_host" type="checkbox"> Use custom server
                                </div>
                            </div>
                            <div v-if="form.use_host" class="field">
                                <label for="" class="label">Your Host</label>
                                <div class="control">
                                    <input v-model="form.host" type="text" class="input"
                                           placeholder="https://yourhost.com">
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="label">Your Api Key</label>
                                <div class="control">
                                    <input v-model="form.api_key" type="text" class="input"
                                           placeholder="Your Api Key">
                                </div>
                            </div>
                            <div class="mt-3">
                                <button class="button is-success is-fullwidth is-left">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiService from "../services/Api";

    export default {
        data() {
            return {
                form: {
                    use_host: false,
                    host: 'https://ownclipboard.com',
                    api_key: ''
                }
            }
        },

        mounted() {

        },

        methods: {
            async login() {
                const {host, api_key} = this.form;
                const logged = await ApiService.connect(host, api_key);

                if (logged) {
                    this.setAll(api_key, host, logged);
                    return this.$router.push({name: 'histories'});
                } else {
                    alert("Error while logging you in...")
                }
            },

            setAll(api_key, host, username) {
                this.$store.commit('setApiKey', api_key);
                this.$store.commit('setHost', host);
                this.$store.commit('setUsername', username);
            }
        }
    }
</script>

<style lang="scss">
    .has-background-dark {
        label {
            color: #999999;
        }
    }
</style>
