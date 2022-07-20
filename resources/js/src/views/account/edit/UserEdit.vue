<template>
    <div class="myaccount-edit margin-top70">
        <div class="container">
            <div class="myaccount-edit-box py-1">
                <div class="card">
                    <TabView class="tabview-custom" ref="tabview4">
                        <TabPanel>
                            <template #header>
                                <i class="feather icon-user"></i>
                                <span style="padding-left: 9px;">Account</span>
                            </template>
                            <user-edit-tab-account-vue />
                        </TabPanel>
                        <TabPanel>
                            <template #header>
                                <i class="pi pi-exclamation-circle"></i>
                                <span style="padding-left: 9px;">Информация</span>
                            </template>
                            <user-edit-tab-information></user-edit-tab-information>
                        </TabPanel>
                        <!-- <TabPanel>
                            <template #header>
                                <i class="pi pi-search"></i>
                                <span>Header III</span>
                                <i class="pi pi-cog"></i>
                            </template>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel> -->
                    </TabView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import UserEditTabAccountVue from './UserEditTabAccount.vue';
import UserEditTabInformation from './UserEditTabInformation.vue';

export default {
    components: {
        TabView,
        TabPanel,
        UserEditTabAccountVue,
        UserEditTabInformation
    }
}
</script>

<style>
    .p-tabview .p-tabview-panels {
        padding: 23px 10px !important;
    }
</style>