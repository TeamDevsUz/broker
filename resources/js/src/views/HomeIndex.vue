<template>
    <div>
        <div class="header-banner">
            <div class="container">
                <div class="header-banner-content">
                    <div class="header-banner-content-txt">
                        <h1 class="main_title text-center text-white">Недвижимость в Москве</h1>
                        <TabView>
                            <TabPanel header="Header I">
                                Content I
                            </TabPanel>
                            <TabPanel header="Header II">
                                Content II
                            </TabPanel>
                            <TabPanel header="Header III">
                                Content III
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
export default {
    components: {
        TabView,
        TabPanel
    }
}
</script>

<style>
.header-banner{
    width: 100%;
    height: 90vh;
    background: #1e1d1d9c url('../../../../public/images/site_images/architecture.jpg')no-repeat center center / cover;
    position: relative;
    background-blend-mode: multiply;
}


.main_title{
    font-size: 40px;
    font-weight: 500;
    line-height: 42px;
    padding: 78px 0 36px;
}

.p-tabview .p-tabview-nav {
    background: transparent !important;
    border-width: 0 0 2px 0 !important;
}
</style>