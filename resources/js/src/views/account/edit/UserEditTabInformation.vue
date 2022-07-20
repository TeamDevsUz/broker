<template>
    <div class="con-slot-tabs">
        <div class="con-tab">
            <div class="tab-text">
                <div id="user-edit-tab-info" class="mt-1">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="user-information-block">
                                <div class="d-flex align-items-center">
                                    <span class="mr-1 feather-icon select-none relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user w-5 h-5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </span> 
                                        <span class="leading-none font-medium">Персональные данные</span>
                                </div>
                                <div class="user-personal-info-2">
                                    <div class="field mt-2">
                                        <label for="username">Дата рождения</label>
                                        <Calendar id="icon" v-model="date3" :showIcon="true" class="w-full" dateFormat="dd.mm.yy" />
                                    </div>
                                    <div class="field mt-2">
                                        <label for="username">Мобильный</label>
                                            <InputMask mask="(99) 999-99-99" v-model="val1" placeholder="(90) 123-45-67" class="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="user-information-block">
                                <div class="d-flex align-items-center">
                                    <i class="pi pi-share-alt mr-1" style="font-size: 14px;"></i>
                                    <span class="leading-none font-medium">Социальные ссылки</span>
                                </div>
                                <div class="user-personal-info-2">
                                    <div class="field mt-2">
                                        <label for="username">Facebook</label>
                                        <div class="p-inputgroup">
                                            <span class="p-inputgroup-addon">
                                                <i class="pi pi-facebook"></i>
                                            </span>
                                            <InputText v-model="valuefacebook" />
                                        </div>
                                    </div>
                                    <div class="field mt-2">
                                        <label for="username">Instagram</label>
                                        <div class="p-inputgroup">
                                            <span class="p-inputgroup-addon">
                                                <i class="pi pi-instagram"></i>
                                            </span>
                                            <InputText v-model="valueinstagram" />
                                        </div>
                                    </div>
                                    <div class="field mt-2">
                                        <label for="username">Telegram</label>
                                        <div class="p-inputgroup">
                                            <span class="p-inputgroup-addon">
                                                <i class="pi pi-telegram"></i>
                                            </span>
                                            <InputText v-model="valuetelegram" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="user-info-btn float-right">
                                <Button label="Сохранить изменения" icon="pi pi-check" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import InputMask from 'primevue/inputmask';

export default {
    components: {
        Button,
        InputText,
        Calendar,
        InputMask
    },
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    },
    data() {
        return {
            date3: "27.11.2000",
            val1: null,
            valuefacebook: "https://www.facebook.com/adoptionism664",
            valueinstagram: "https://www.instagram.com/adopt-ionism744/",
            valuetelegram: "https://www.instagram.com/adopt-ionism744/",
            responsiveOptions: [
                {
                    breakpoint: '1400px',
                    numMonths: 2
                },
                {
                    breakpoint: '1200px',
                    numMonths: 1
                }
            ]
        }
    },
}
</script>


<style scoped>
.feather-icon {
    display: inline-flex;
    align-items: center;
}
</style>