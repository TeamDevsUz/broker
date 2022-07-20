<template>
    <div>
        <nav-bar :loggedIn="loggedIn"></nav-bar>
        <router-view class="main-view" name="main"></router-view>
        <auth-modal @loggedIn="authStatus" :loggedIn="loggedIn"></auth-modal>
    </div>
</template>

<script>
import NavBar from '../../components/NavBarComp.vue'
import AuthModal from '../auth/AuthModal.vue'
export default {
    name: 'Main',
    components: {
        NavBar,
        AuthModal
    },
    data() {
        return {
            loggedIn: false,
        }
    },
    methods: {
        authStatus(status){
            this.loggedIn = status;
        }
    },
}
</script>

<style>
    /* #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
</style>