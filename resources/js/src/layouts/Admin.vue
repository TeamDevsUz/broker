<template>
    <div>
        <!-- <HorizontalMenu/> -->
        <side-nav></side-nav>
        <router-view name="helper"></router-view>
        <side-bar @search-input-emit="search"></side-bar>
    </div>
</template>


<script>
//import HorizontalMenu from '../../../components/HorizontalMenu.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import SideBar from '../../components/SideBar.vue'
import SideNav from '../../components/SideBarNav.vue'

export default {
    components: {
        //HorizontalMenu,
        Breadcrumb,
        SideBar,
        SideNav
    },
    methods: {
        search(val) {
        
        }
    }
}
</script>

<style>

</style>