<template>
    <div class="myaccount-div margin-top70">
        <div class="container">
            <div class="myaccount-div-block">
                <div class="page-user-preview" id="page-user-view">
                    <div class="user-data">
                        <div class="user-base vx-card mb-base">
                            <div class="vx-card__header">
                                <div class="vx-card__title">
                                    <h4 class="mb-0">Account</h4>
                                </div>
                            </div>
                            <div class="vx-card__collapsible-content vs-con-loading__container">
                                <div class="vx-card__body">
                                    <div class="vx-row">
                                        <div id="avatar-col" class="vx-col">
                                            <div class="img-container mb-2">
                                                <img src="../../../../../public/images/agents_images/avatar.jpg" alt="user-image" class="rounded w-full">
                                            </div>
                                        </div>
                                        <div id="account-info-col-1" class="vx-col flex-1">
                                            <table>
                                                <tr>
                                                    <td class="font-semibold">Username</td> <td>adoptionism744</td>
                                                </tr>
                                                <tr>
                                                    <td class="font-semibold">Name</td> 
                                                    <td>Angelo Sashington</td>
                                                </tr>
                                                <tr>
                                                    <td class="font-semibold">Email</td> <td>angelo@sashington.com</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="account-info-col-2" class="vx-col flex-1">
                                            <table>
                                                <tr>
                                                    <td class="font-semibold">Status</td> 
                                                    <td>active</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Role</td> 
                                                    <td>admin</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Company</td> 
                                                    <td>WinDon Technologies Pvt Ltd</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div id="account-manage-buttons" class="vx-col w-full flex">
                                            <button @click="$router.push('/myaccount/user/edit')" class="vs-button includeIcon vs-button-filled">
                                                <i class="vs-icon notranslate icon-scale vs-button--icon  feather icon-edit null" style="order: 0; margin-right: 5px; margin-left: 0px;"></i>
                                                <span class="vs-button-text vs-button--text">Редактировать</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col lg:w-1/2 w-full">
                                <div class="vx-card mb-base">
                                    <div class="vx-card__header">
                                        <div class="vx-card__title">
                                            <h4>Information</h4>
                                        </div>
                                    </div>
                                    <div class="vx-card__collapsible-content vs-con-loading__container"> 
                                        <div class="vx-card__body">
                                            <table>
                                                <tr>
                                                    <td class="font-semibold">Birth Date</td> 
                                                    <td>28 January 1998</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Mobile</td> 
                                                    <td>+65958951757</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Website</td> 
                                                    <td>https://rowboat.com/insititious/Angelo</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Languages</td> 
                                                    <td>English, Arabic</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Gender</td> 
                                                    <td>male</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Contact</td> 
                                                    <td>email, message, phone</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-col lg:w-1/2 w-full">
                                <div class="vx-card mb-base">
                                    <div class="vx-card__header">
                                        <div class="vx-card__title">
                                            <h4>Social Links</h4>
                                        </div>
                                    </div>
                                    <div class="vx-card__collapsible-content vs-con-loading__container"> 
                                        <div class="vx-card__body">
                                            <table>
                                                <tr>
                                                    <td class="font-semibold">Twitter</td> 
                                                    <td>https://twitter.com/adoptionism744</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Facebook</td> 
                                                    <td>https://www.facebook.com/adoptionism664</td>
                                                </tr>
                                                <tr>
                                                    <td class="font-semibold">Instagram</td> 
                                                    <td>https://www.instagram.com/adopt-ionism744/</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Github</td> 
                                                    <td>https://github.com/madop818</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">CodePen</td> 
                                                    <td>https://codepen.io/adoptism243</td>
                                                </tr> 
                                                <tr>
                                                    <td class="font-semibold">Slack</td> 
                                                    <td>@adoptionism744</td>
                                                </tr>
                                            </table>
                                        </div> 
                                    </div> 
                                    <div class="vx-card__code-container collapsed" style="max-height: 0px; display: none;">
                                        <div class="code-content">
                                            <pre class="language-markup">
                                                <code class="language-markup"></code>
                                                </pre>
                                        </div>
                                    </div>
                                </div>
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

export default {
    components: {
        Button
    }
}
</script>


<style scoped>
.vx-card{
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 25px 0px rgb(0 0 0 / 10%);
    width: 100%;
    display: block;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.mb-base{
    margin-bottom: 2.2rem !important;
}

.vx-card .vx-card__header{
    padding: 1.5rem 1.5rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

.vx-card__title h4{
    font-size: 22px;
    font-weight: 500;
    color: #000;
}
.vx-card .vx-card__collapsible-content.vs-con-loading__container {
    overflow: unset;
}
.vx-card .vx-card__collapsible-content {
    transition: all 0.3s ease-in-out;
}
.vs-con-loading__container {
    position: relative;
}
.vx-card .vx-card__collapsible-content .vx-card__body {
    padding: 1.5rem;
}
.vx-row{
    margin: 0 -1rem;
    display: flex;
    flex-wrap: wrap;
}

#avatar-col {
    width: 10rem;
}

.vx-row > .vx-col {
    padding: 0 1rem;
}
.vx-card .vx-card__collapsible-content img {
    display: block;
}
.rounded {
    border-radius: 0.25rem !important;
}
.w-full {
    width: 100% !important;
}

#page-user-view table td {
    padding-bottom: 0.8rem;
}

#page-user-view table td {
    vertical-align: top;
    min-width: 140px;
    word-break: break-all;
}

.font-semibold {
    font-weight: 700 !important;
}

.vs-button{
    padding: 0.75rem 2rem;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    font-size: 1rem;
}
.vs-button.includeIcon {
    float: none;
}

.includeIcon{
    display: flex;
    align-items: center;
    justify-content: center;
}

.vs-button {
    transition: all .2s ease;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: #fff;
    box-sizing: border-box;
}
.vs-button-filled{
    background: rgba(115,103,240,1)!important;
}

.vs-icon {
    color: inherit;
    text-align: center;
    font-size: 1rem;
}

.vs-button--text {
    position: relative;
    color: inherit;
    display: inline-block;
    transition: all .25s ease;
}


/* ************************************************* */
@media (min-width: 992px){
    .lg\:w-1\/2 {
        width: 50% !important;
    }
}
</style>