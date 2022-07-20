<template>
    <div>
        <div class="container">
            <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
                <div class="navbar-wrapper">
                    <div class="navbar-container content">
                        <div class="navbar-collapse" id="navbar-mobile">
                            <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                <h1 class="mb-0">LOGO</h1>
                            </div>
                            <ul class="nav navbar-nav float-right">
                                <li class="dropdown dropdown-language nav-item">
                                    <a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flag-icon flag-icon-us"></i>
                                        <span class="selected-language">English</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown-flag">
                                        <a class="dropdown-item" href="#" data-language="en">
                                            <i class="flag-icon flag-icon-us"></i> 
                                            English
                                        </a>
                                        <a class="dropdown-item" href="#" data-language="fr">
                                            <i class="flag-icon flag-icon-fr"></i> 
                                            French
                                        </a>
                                        <a class="dropdown-item" href="#" data-language="de">
                                            <i class="flag-icon flag-icon-de"></i> 
                                            German
                                        </a>
                                        <a class="dropdown-item" href="#" data-language="pt">
                                            <i class="flag-icon flag-icon-pt"></i> 
                                            Portuguese
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item d-none d-lg-block">
                                    <a class="nav-link nav-link-expand">
                                        <i class="ficon feather icon-maximize"></i>
                                        </a>
                                </li>
                                <li class="nav-item nav-search">
                                    <a class="nav-link nav-link-search">
                                        <i class="ficon feather icon-search"></i>
                                    </a>
                                    <div class="search-input">
                                        <div class="search-input-icon">
                                            <i class="feather icon-search primary"></i>
                                        </div>
                                        <input class="input" type="text" placeholder="Explore Vuexy..." tabindex="-1" data-search="template-list">
                                        <div class="search-input-close">
                                            <i class="feather icon-x"></i>
                                        </div>
                                        <ul class="search-list search-list-main ps">
                                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                            <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                            </div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></ul>
                                    </div>
                                </li>
                                <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                        <div class="user-nav d-sm-flex d-none"><span class="user-name text-bold-600">John Doe</span><span class="user-status">ID: 1234678</span></div><span>
                                            <!-- <img class="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"> -->
                                            </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="page-user-profile.html"><i class="feather icon-user"></i> Edit Profile</a><a class="dropdown-item" href="app-email.html"><i class="feather icon-mail"></i> My Inbox</a><a class="dropdown-item" href="app-todo.html"><i class="feather icon-check-square"></i> Task</a><a class="dropdown-item" href="app-chat.html"><i class="feather icon-message-square"></i> Chats</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="auth-login.html"><i class="feather icon-power"></i> Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import '../../../public/app-assets/css/bootstrap-extended.css'
export default {
    
}
</script>

<style scoped>
.header-navbar.floating-nav {
    position: fixed;
    width: 100%;
    margin: 20px 0 0 0 !important;
}
</style>