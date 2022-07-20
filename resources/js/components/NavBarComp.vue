<template>
    <div>
        <div class="header-menu">
            <div class="header-menu-top">
                <div class="container">
                    <div class="header-menu-top-content py-1 d-flex justify-content-between">
                        <div class="item d-flex align-items-center">
                            <a href="#!" class="item-logo BbZrX">
                                <img src="../../../public/images/site_images/logo.svg" class="img-fluid" alt="">
                            </a>
                            <div class="content-top BbZrX">
                                Tashkent
                            </div>
                            <div class="content-top BbZrX">
                                <a href="#!" class="">
                                    +99890123-45-67
                                </a>
                            </div>
                            <div class="content-top BbZrX">
                                <a href="#!" class="">
                                    Звоните нам с 9:00 до 20:00
                                </a>
                            </div>
                        </div>
                        <div class="item d-flex align-items-center">
                            <div class="dropdown-lang">
                                
                            </div>
                            <div class="button-heart">
                                <Button icon="pi pi-heart-fill" class="p-button-rounded p-button-secondary p-button-outlined"   v-tooltip.bottom="'Избранное'"/>
                            </div>
                            <div class="button-auth top-menu-icons-marl" v-if="loggedIn === false">
                                <button  class="p-button-sm p-button p-component" data-toggle="modal" data-target="#animation">
                                    <i class="pi pi-user p-button-icon p-button-icon-left pi"></i>
                                    Войти
                                </button>
                            </div>
                            <li v-else class="dropdown dropdown-user nav-item top-menu-icons-marl">
                                <a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                    <span><img class="round" src="/app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="/admin/"><i class="feather icon-user"></i>Profile</a>
                                    <div class="dropdown-divider"></div><a class="dropdown-item" href="auth-login.html"><i class="feather icon-power"></i> Logout</a>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-mega-menu">
                <div class="container">
                    <nav class="header-mega-menu-nav">
                        <ul class="navigation_menu">
                            <li>
                                <a href="#!">Купить</a>
                                <div class="sub-menu">
                                    <div class="sub-menu-item">
                                        <h4>Квартира</h4>
                                        <ul>
                                            <li><a href="#">1 комнатные</a></li>
                                            <li><a href="#">2 комнатные</a></li>
                                            <li><a href="#">3 комнатные</a></li>
                                            <li><a href="#">5 комнатные</a></li>
                                            <li><a href="#">Более 5 комнат</a></li>
                                        </ul>
                                    </div>
                                    <div class="sub-menu-item">
                                        <h4>Квартира</h4>
                                        <ul>
                                            <li><a href="#">1 комнатные</a></li>
                                            <li><a href="#">2 комнатные</a></li>
                                            <li><a href="#">3 комнатные</a></li>
                                            <li><a href="#">5 комнатные</a></li>
                                            <li><a href="#">Более 5 комнат</a></li>
                                        </ul>
                                    </div>
                                    <div class="sub-menu-item">
                                        <h4>Квартира</h4>
                                        <ul>
                                            <li><a href="#">1 комнатные</a></li>
                                            <li><a href="#">2 комнатные</a></li>
                                            <li><a href="#">3 комнатные</a></li>
                                            <li><a href="#">5 комнатные</a></li>
                                            <li><a href="#">Более 5 комнат</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#!">Снять</a>
                            </li>
                            <li>
                                <a href="#!">Новостройки</a>
                            </li>
                            <li>
                                <a href="#!">Услуги</a>
                            </li>
                            <li>
                                <a href="#!">Риелторы</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
            <!-- <li v-if="loggedIn === false" class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#animation"><i class="feather icon-user"> Войти или зарегистрироваться</i></a>
            </li> -->

    </div>
</template>


<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

export default {
    components: {
        Button
    },
    data() {
        return {
            
        }
    },
    props: {
        loggedIn: {
            type: Boolean,
        }
    },
    methods: {
        
    },
    mounted() {
        var text = $('div[data-menu="menu-wrapper"]').attr('class');
        console.log(`True + ${text}`);
    }
}


</script>

<style lang="scss">
    .header-menu-top{
        background: #fff;
        box-shadow: inset 0 -1px 0 #e5e5e5;
    
        
        .item{
            .item-logo{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 7.5rem;
                padding: 0;
            }
    
            .top-menu-icons-marl {
                margin-left: 0.5rem;
            }
            
            .content-top{
                a{
                    font-size: 14px;
                    font-weight: 500;
                    color: #333;
                    white-space: nowrap;
                }
            }
            .button-heart {
                .pi{
                    font-size: 13px;
                }
                
                .p-button.p-button-icon-only {
                    width: 2rem;
                }
                
                .p-button.p-button-icon-only.p-button-rounded {
                    height: 2rem;
                }
            }
            
            .nav-link {
                padding: 0 !important;
            }
            .dropdown-toggle::after {
                display: none !important; 
            }
        }
        
    }
    
    .header-mega-menu{
        background: #fff;
        
        .header-mega-menu-nav{
            align-items: center;
            box-shadow: none;
            box-sizing: content-box;
            display: flex;
            flex-wrap: nowrap;
            height: 52px;
            margin: 0 auto;
            max-width: 1216px;
            min-width: 320px;
            outline: none;
            position: relative;
            
            ul{
                margin-bottom: 0 !important;
                display: flex;
                flex-wrap: wrap;
                //max-height: 2.75rem;
                width: 100%;
                margin-top: 0;
                padding: 0;
                list-style: none;
                height: 100%;
                
                li{
                    font-size: 18px;
                    display: flex;
                    flex-wrap: wrap;
                    height: 100%;
                    margin: 0 20px 0 0;
                    padding: 0;
                    align-items: center;
                    
                    &:hover{
                        border-bottom: 1px solid red;
                    }
                    
                    a{
                        color: inherit;
                        padding: 0.625rem 0.5rem;
                        height: 100%;
                        
                        &:hover{
                            text-decoration: none;
                            border-bottom-color: #f15044;
                            text-shadow: 0 0 0 #fff;
                        }
                    }
                    
                    .sub-menu{
                        position: absolute;
                        width: 100%;
                        top: 100%;
                        z-index: 2;
                        background: #fff;
                        padding: 10px 20px;
                        border-radius: 0 0 5px 5px;
                        max-width: 80%;
                        
                        .sub-menu-item{
                            padding-left: 1.2rem;
                            h4{
                                text-transform: capitalize;
                                font-size: 16px;
                                padding: 0.5rem 0;
                                font-weight: 600;
                                color: #000;
                            }
                            ul{
                                height: unset !important;
                                display: block !important;
                                li{
                                    text-transform: capitalize;
                                    margin: 0.2rem 0;
                                    font-size: 14px;
                                    
                                    &:hover{
                                        border-bottom: none !important;
                                    }
                                    
                                    a{
                                        color: #000;
                                        text-decoration: none;
                                        transition: all 0.5s ease;
                                        font-weight: 500;
                                        
                                        &:hover{
                                            padding-left: 14px;
                                            cursor: pointer;
                                            color: #2196F3;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>