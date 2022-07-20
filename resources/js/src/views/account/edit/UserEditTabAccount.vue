<template>
    <div class="con-slot-tabs">
        <div class="con-tab">
            <div class="tab-text">
                <div id="user-edit-tab-info" class="user-edit mt-1">
                    <div class="row">
                        <div class="vx-col w-full">
                            <div class="d-flex align-items-start flex-lg-row flex-md-row flex-column">
                                <img src="../../../../../../public/images/agents_images/avatar.jpg" alt="user-image" class="mr-8 rounded h-24 w-24">
                                <div>
                                    <p class="text-lg font-medium mb-2 mt-lg-0 mt-md-0 mt-sm-1">Javohir Toirov</p>
                                    <input type="file" id="primary__avatar"  class="d-none" name="user_image" accept="image/png, image/jpeg, image/pjpeg">
                                    <label  class="avatar__button p-button p-component mr-2" for="primary__avatar">
                                        <img class="p-button-icon-left" src="../../../../../../public/images/icons/upload.png">
                                        Сменить Аватар
                                    </label>
                                    <Button  icon="pi pi-trash" label="Удалить аватар" class="p-button-outlined p-button-danger" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="user-info-1">
                                <div class="field mt-2">
                                    <label for="username">Имя пользователя</label>
                                    <InputText id="username" type="username" aria-describedby="username-help" value="Javohir_dev" class="w-full" />
                                </div>
                                <div class="field mt-2">
                                    <label for="full_name">Имя</label>
                                    <InputText id="full_name" type="full_name" aria-describedby="full_name-help" value="Javohir Toirov" class="w-full" />
                                </div>
                                <div class="field mt-2">
                                    <label for="email">Эл. адрес</label>
                                    <InputText id="email" type="email" aria-describedby="email-help" value="javohir@gmail.com" class="w-full" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="user-info-2">
                                <div class="field mt-2">
                                    <label for="status">Статус</label>
                                    <InputText id="status" type="status" aria-describedby="status-help" value="Активный" class="w-full" disabled />
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
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
    components: {
        FileUpload,
        Button,
        InputText
    },
    methods: {
        onUpload() {
            this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
        }
    }
}
</script>


<style>
.row > .vx-col {
    padding: 0 1rem;
}


</style>