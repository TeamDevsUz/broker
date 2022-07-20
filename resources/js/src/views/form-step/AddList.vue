<template>
    <div>
        <div class="add-list-main">
            <div class="container">
                <div class="add-list-main-box padding-y50">
                    <div class="steps-indicator">
                        <div class="content-section introduction">
                            <div class="feature-intro">
                                <h1>Steps</h1>
                                <p>Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.</p>
                            </div>
                        </div>

                        <div class="content-section implementation">
                            <div class="card">
                                <Steps :model="items" :readonly="true" />
                            </div>

                            <router-view v-slot="{Component}" :formData="formObject" @prev-page="prevPage($event)" @next-page="nextPage($event)" @complete="complete">
                                <keep-alive>
                                    <component :is="Component" />
                                </keep-alive>
                            </router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Steps from 'primevue/steps';

export default {
    components: {
        Steps
    },
    data() {
        return {
            items: [
            {
                label: 'Personal',
                to: '/new/object/personal'
            },
            {
                label: 'Seat',
                to: '/new/object/seats'
            },
            {
                label: 'Payment',
                to: '/payment'
            },
            {
                label: 'Confirmation',
                to: '/confirmation'
            }],
            formObject: {}
        }
    },
    methods: {
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }
            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    }
}
</script>

<style>
.card{
    border-radius: 0.5rem !important;
    box-shadow: 0 0.2rem 0.4rem 0 #00000012 !important;
    padding: 1rem;
}
</style>