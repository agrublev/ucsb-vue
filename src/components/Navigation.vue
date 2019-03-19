<template>
    <div class="theme-main-menu theme-menu-one">
        <div class="logo">
            <a title="UCSB ROCKS" href="#" class="logo-link">
                <img title="UCSB YEAH!" src="../../public/logo.svg" alt=""/></a>
        </div>
        <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
            <div class="container position-relative nav-container">
                <button
                    class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="flaticon-setup"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <router-link
                            tag="li"
                            to="/home"
                            class="nav-item  dropdown position-relative"
                        >
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                >Home.</a
                            >
                        </router-link>
                        <router-link
                            tag="li"
                            to="/bootstrap"
                            class="nav-item  dropdown position-relative"
                        >
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                >Bootstrap.</a
                            >
                        </router-link>
                        <router-link
                            tag="li"
                            to="/about"
                            class="nav-item  dropdown position-relative"
                        >
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                >About.</a
                            >
                        </router-link>
                        <li class="nav-item dropdown position-relative">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                >News.</a
                            >
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" class="dropdown-item">Blog default</a>
                                </li>
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /.container -->
        </nav>
        <div class="header-right-widget">
            <ul>
                <li class="call-us">Call Us <a href="#">+880.762.009</a></li>
                <li class="language-switcher">
                    <div class="dropdown">
                        <button type="button" class="dropdown-toggle" data-toggle="dropdown">
                            En
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <ul class="ct-language__dropdown">
                                <li>
                                    <a href="#" class="lang-en lang-select" data-lang="en">USA</a>
                                </li>
                                <li>
                                    <a href="#" class="lang-es lang-select" data-lang="es"
                                        >MEXICO</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="lang-es lang-select" data-lang="fr"
                                        >FRANCE</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="lang-es lang-select" data-lang="zh-CN"
                                        >CHINA</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="lang-es lang-select" data-lang="de"
                                        >German</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="lang-es lang-select" data-lang="hi">Hindi</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="contact-us white-shdw-button"
                        >Contact Us <i class="icon flaticon-next"></i
                    ></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
body {
    padding-top: 150px;
}
div.logo a.logo-link {
    background-image: linear-gradient(40deg, #dddae3 0%, #ebebeb 100%) !important;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        display: block;
        width: 60px;
        height: 60px;
    }
    height: 100px;
}
</style>
