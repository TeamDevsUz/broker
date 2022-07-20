<template>
    <div class="myaccount-div">
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb :home="home" :model="items" />
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb';

export default {
    components: {
        Breadcrumb
    },
    data() {
        return {
            home: {
                icon: 'pi pi-home', 
                to: '/',
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
</script>

<style>

</style>