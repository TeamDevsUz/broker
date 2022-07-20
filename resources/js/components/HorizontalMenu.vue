<template>
    <div>
        <div class="horizontal-menu">
            <div class="container">
                <div class="horizontal-menu-wrapper">
                    <div class="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-light navbar-without-dd-arrow navbar-shadow menu-border navbar-brand-center" role="navigation" data-menu="menu-wrapper" data-nav="brand-center">
                        <!-- Horizontal menu content-->
                        <div class="navbar-container main-menu-content" data-menu="menu-container">
                            <!-- include ../../../includes/mixins-->
                            <ul class="nav navbar-nav justify-content-center" id="main-menu-navigation" data-menu="menu-navigation">
                                <li class="nav-item" data-menu="dropdown">
                                    <router-link class="nav-link" to="/myaccount/addlist">
                                        <i class="feather icon-clipboard"></i>
                                        <span data-i18n="Dashboard">E'lonlar</span>
                                    </router-link>
                                </li>
                                
                                <li class="nav-item">
                                    <router-link class="nav-link" to="myaccount/settings">
                                        <i class="feather icon-user"></i>
                                        <span data-i18n="Apps">Mening profilim</span>
                                    </router-link>
                                    <!-- <a class="nav-link" href="/myaccount/profile">
                                        <i class="feather icon-user"></i>
                                        <span data-i18n="Apps">Mening profilim</span>
                                    </a> -->
                                </li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="feather icon-message-square"></i><span data-i18n="UI Elements">Mening xabarlarim</span></a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Data List"><i class="feather icon-list"></i>Data List</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="data-list-view.html" data-toggle="dropdown" data-i18n="List View"><i class="feather icon-circle"></i>List View</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="data-thumb-view.html" data-toggle="dropdown" data-i18n="Thumb View"><i class="feather icon-circle"></i>Thumb View</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Content"><i class="feather icon-layout"></i>Content</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="content-grid.html" data-toggle="dropdown" data-i18n="Grid"><i class="feather icon-circle"></i>Grid</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="content-typography.html" data-toggle="dropdown" data-i18n="Typography"><i class="feather icon-circle"></i>Typography</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="content-text-utilities.html" data-toggle="dropdown" data-i18n="Text Utilities"><i class="feather icon-circle"></i>Text Utilities</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="content-syntax-highlighter.html" data-toggle="dropdown" data-i18n="Syntax Highlighter"><i class="feather icon-circle"></i>Syntax Highlighter</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="content-helper-classes.html" data-toggle="dropdown" data-i18n="Helper Classes"><i class="feather icon-circle"></i>Helper Classes</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li data-menu=""><a class="dropdown-item" href="colors.html" data-toggle="dropdown" data-i18n="Colors"><i class="feather icon-droplet"></i>Colors</a>
                                        </li>
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Cards"><i class="feather icon-credit-card"></i>Cards</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="card-basic.html" data-toggle="dropdown" data-i18n="Basic"><i class="feather icon-circle"></i>Basic</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="card-advance.html" data-toggle="dropdown" data-i18n="Advance"><i class="feather icon-circle"></i>Advance</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="card-statistics.html" data-toggle="dropdown" data-i18n="Statistics"><i class="feather icon-circle"></i>Statistics</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="card-analytics.html" data-toggle="dropdown" data-i18n="Analytics"><i class="feather icon-circle"></i>Analytics</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="card-actions.html" data-toggle="dropdown" data-i18n="Card Actions"><i class="feather icon-circle"></i>Card Actions</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Icons"><i class="feather icon-eye"></i>Icons</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="icons-feather.html" data-toggle="dropdown" data-i18n="Feather"><i class="feather icon-circle"></i>Feather</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="icons-font-awesome.html" data-toggle="dropdown" data-i18n="Font Awesome"><i class="feather icon-circle"></i>Font Awesome</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Components"><i class="feather icon-briefcase"></i>Components</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="component-alerts.html" data-toggle="dropdown" data-i18n="Alerts"><i class="feather icon-circle"></i>Alerts</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-buttons-basic.html" data-toggle="dropdown" data-i18n="Buttons"><i class="feather icon-circle"></i>Buttons</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-breadcrumbs.html" data-toggle="dropdown" data-i18n="Breadcrumbs"><i class="feather icon-circle"></i>Breadcrumbs</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-carousel.html" data-toggle="dropdown" data-i18n="Carousel"><i class="feather icon-circle"></i>Carousel</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-collapse.html" data-toggle="dropdown" data-i18n="Collapse"><i class="feather icon-circle"></i>Collapse</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-dropdowns.html" data-toggle="dropdown" data-i18n="Dropdowns"><i class="feather icon-circle"></i>Dropdowns</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-list-group.html" data-toggle="dropdown" data-i18n="List Group"><i class="feather icon-circle"></i>List Group</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-modals.html" data-toggle="dropdown" data-i18n="Modals"><i class="feather icon-circle"></i>Modals</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-pagination.html" data-toggle="dropdown" data-i18n="Pagination"><i class="feather icon-circle"></i>Pagination</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-navs-component.html" data-toggle="dropdown" data-i18n="Navs Component"><i class="feather icon-circle"></i>Navs Component</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-navbar.html" data-toggle="dropdown" data-i18n="Navbar"><i class="feather icon-circle"></i>Navbar</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-tabs-component.html" data-toggle="dropdown" data-i18n="Tabs Component"><i class="feather icon-circle"></i>Tabs Component</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-pills-component.html" data-toggle="dropdown" data-i18n="Pills Component"><i class="feather icon-circle"></i>Pills Component</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-tooltips.html" data-toggle="dropdown" data-i18n="Tooltips"><i class="feather icon-circle"></i>Tooltips</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-popovers.html" data-toggle="dropdown" data-i18n="Popovers"><i class="feather icon-circle"></i>Popovers</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-badges.html" data-toggle="dropdown" data-i18n="Badges"><i class="feather icon-circle"></i>Badges</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-pill-badges.html" data-toggle="dropdown" data-i18n="Pill Badges"><i class="feather icon-circle"></i>Pill Badges</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-progress.html" data-toggle="dropdown" data-i18n="Progress"><i class="feather icon-circle"></i>Progress</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-media-objects.html" data-toggle="dropdown" data-i18n=""><i class="feather icon-circle"></i>Media Objects</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-spinner.html" data-toggle="dropdown" data-i18n="Spinner"><i class="feather icon-circle"></i>Spinner</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="component-bs-toast.html" data-toggle="dropdown" data-i18n="Toasts"><i class="feather icon-circle"></i>Toasts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Extra Components"><i class="feather icon-box"></i>Extra Components</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="ex-component-avatar.html" data-toggle="dropdown" data-i18n="Avatar"><i class="feather icon-circle"></i>Avatar</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ex-component-chips.html" data-toggle="dropdown" data-i18n="Chips"><i class="feather icon-circle"></i>Chips</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ex-component-divider.html" data-toggle="dropdown" data-i18n="Divider"><i class="feather icon-circle"></i>Divider</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Extensions"><i class="feather icon-box"></i>Extensions</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-sweet-alerts.html" data-toggle="dropdown" data-i18n="Sweet Alert"><i class="feather icon-circle"></i>Sweet Alert</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-toastr.html" data-toggle="dropdown" data-i18n="Toastr"><i class="feather icon-circle"></i>Toastr</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-noui-slider.html" data-toggle="dropdown" data-i18n="NoUi Slider"><i class="feather icon-circle"></i>NoUi Slider</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-file-uploader.html" data-toggle="dropdown" data-i18n="File Uploader"><i class="feather icon-circle"></i>File Uploader</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-quill-editor.html" data-toggle="dropdown" data-i18n="Quill Editor"><i class="feather icon-circle"></i>Quill Editor</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-drag-drop.html" data-toggle="dropdown" data-i18n="Drag &amp; Drop"><i class="feather icon-circle"></i>Drag &amp; Drop</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-tour.html" data-toggle="dropdown" data-i18n="Tour"><i class="feather icon-circle"></i>Tour</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-clipboard.html" data-toggle="dropdown" data-i18n="Clipboard"><i class="feather icon-circle"></i>Clipboard</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-plyr.html" data-toggle="dropdown" data-i18n="Media Player"><i class="feather icon-circle"></i>Media Player</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-context-menu.html" data-toggle="dropdown" data-i18n="Context Menu"><i class="feather icon-circle"></i>Context Menu</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-swiper.html" data-toggle="dropdown" data-i18n="swiper"><i class="feather icon-smartphone"></i>swiper</a>
                                                </li>
                                                <li data-menu=""><a class="dropdown-item" href="ext-component-i18n.html" data-toggle="dropdown" data-i18n="l18n"><i class="feather icon-circle"></i>l18n</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="feather icon-more-horizontal"></i><span data-i18n="Others">Others</span></a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Menu Levels"><i class="feather icon-menu"></i>Menu Levels</a>
                                            <ul class="dropdown-menu">
                                                <li data-menu=""><a class="dropdown-item" href="#" data-toggle="dropdown" data-i18n="Second Level"><i class="feather icon-circle"></i>Second Level</a>
                                                </li>
                                                <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown" data-i18n="Second Level"><i class="feather icon-circle"></i>Second Level</a>
                                                    <ul class="dropdown-menu">
                                                        <li data-menu=""><a class="dropdown-item" href="#" data-toggle="dropdown" data-i18n="Third Level"><i class="feather icon-circle"></i>Third Level</a>
                                                        </li>
                                                        <li data-menu=""><a class="dropdown-item" href="#" data-toggle="dropdown" data-i18n="Third Level"><i class="feather icon-circle"></i>Third Level</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="disabled" data-menu=""><a class="dropdown-item" href="" data-toggle="dropdown" data-i18n="Disabled Menu"><i class="feather icon-eye-off"></i>Disabled Menu</a>
                                        </li>
                                        <li data-menu=""><a class="dropdown-item" href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation" data-toggle="dropdown" data-i18n="Documentation"><i class="feather icon-folder"></i>Documentation</a>
                                        </li>
                                        <li data-menu=""><a class="dropdown-item" href="https://pixinvent.ticksy.com/" data-toggle="dropdown" data-i18n="Raise Support"><i class="feather icon-life-buoy"></i>Raise Support</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import '../../../public/app-assets/css/core/menu/menu-types/horizontal-menu.css'
export default {
    
}
</script>

<style>

.horizontal-menu-box{
    background: rgb(255, 255, 255);
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
    border-radius: 0.5rem;
}

.header-navbar.floating-nav {
    margin: 4.3rem 2.2rem 0 !important;
}

.header-navbar.floating-nav {
    position: unset !important;
}

.horizontal-menu .horizontal-menu-wrapper {
    position: unset !important;
}

.header-navbar.floating-nav {
    margin: 4.3rem 0 0 0 !important;
}

.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {
    width: 100%;
}
</style>