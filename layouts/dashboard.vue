<template>
    <div class="dashboard-body">
        <div class="horizontal-menu d-flex" >
            <b-navbar class="" style="width: 100%;">

                <div class="mobile_nav">
                    <div id="N_sidenav" class="sidenav">
                            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
                        <div class="logo">
                            <img height="40" src="~assets/images/new_logo.svg" alt="img">
                        </div>
                        <div class="menu-headline">
                            Manage
                        </div>
                        <ul>
                            <nuxt-link @click="closeNav()" v-for="(item, index) in menus" :key="index" :to="item.url">
                            <li  :class="$route.path == item.url? 'menu-active': ''">
                                    <span class="material-icons mr-2">{{ item.icon }}</span> {{ item.name }}
                            </li>
                            </nuxt-link>
                        </ul>
                        <div class="menu-headline">
                            Support
                        </div>
                        <ul>
                            <li  v-for="(item, index) in menus2" :key="index" :class="$route.path == item.url? 'menu-active': ''">
                                <nuxt-link :to="item.url">
                                    <span class="material-icons">{{ item.icon }}</span> {{ item.name }}
                                </nuxt-link>
                            </li>
                            <li @click="logout()" class="logout_btn">
                                <span class="material-icons">logout</span> <p>Logout</p>
                            </li>
                        </ul>
                        <div class="left_menu_footer">
                            <div class="copyright">
                                © Easy Invoice Builder. 2022 
                            </div>
                            <div class="copyright_sub_text">
                                Simply Build Invoice(s)
                            </div>
                        </div>
                    </div>
                        <span @click="openNav()">&#9776;</span>
                </div>
                <div class="profile_name">
                    <div class="name">{{'Hi' + ' ' + $auth.user.firstname + "," }} </div>
                    <div class="dashboard_welcom">Welcome to Easy invoice builder!</div>
                </div>
            <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto hori-navbar">
                    <!-- <div class="search_pop_up">
                        <span class="material-icons search_mob_btn"> search </span>
                        <div class="search-bar">
                            <div class="src_inp">
                                <span class="material-icons"> search </span>
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div> -->
                    <div class="notification-icon">
                        <span class="material-icons">notifications</span>
                    </div>
                    <div class="profile" @click="$router.push('/dashboard/profile')">
                        <div class="profile-name">
                            <div class="name">{{$auth.user.firstname +' '+ $auth.user.lastname}} </div>
                            <!-- <div class="designation">{{$auth.user.email}}</div> -->
                        </div>
                        <div class="profile-pic">
                            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                        </div>
                    </div>
                    <!-- Dot Menue  -->
                    <!-- <div class="dots-menu">
                        <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                            <template #button-content>
                            <span class="material-icons-outlined">more_vert</span>
                            </template>
                            <b-dropdown-item href="#">Action</b-dropdown-item>
                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                        </b-dropdown>
                    </div> -->
                </b-navbar-nav>
            </b-navbar>
        </div>
    
       
        <div class="left-menu">
            <div class="logo">
                <nuxt-link to="/">
                    <img height="40" src="~assets/images/new_logo.svg" alt="img">
                </nuxt-link>
            </div>
            <div class="menu-headline">
                Manage
            </div>
            <ul>
                <nuxt-link v-for="(item, index) in menus" :key="index" :to="item.url">
                <li   :class="$route.path == item.url? 'menu-active': ''">   
                    <span class="material-icons">{{ item.icon }}</span> {{ item.name }}
                </li>
                </nuxt-link>
            </ul>
            <div class="menu-headline">
                Support
            </div>
            
            <ul>
                <nuxt-link v-for="(item, index) in menus2" :key="index" :to="item.url">
                <li :class="$route.path == item.url? 'menu-active': ''">
                    <span class="material-icons">{{ item.icon }}</span> {{ item.name }}
                </li>
                </nuxt-link>
                <li @click="logout()" class="logout_btn">
                    <span class="material-icons">logout</span> <p>Logout</p>
                </li>
            </ul>
            <div class="left_menu_footer">
                <div class="copyright">
                    © Easy Invoice Builder. 2022 
                </div>
                <div class="copyright_sub_text">
                    Simply Build Invoice(s)
                </div>
            </div>
        </div>

        <div class="page-area">
            <Nuxt/>
        </div>

    </div>
</template>



<script>
export default {
    data(){
        return {
            menus: [
                {
                    name: "Overview",
                    url: '/',
                    icon: 'space_dashboard'
                },
                {
                    name: "Invoice",
                    url: '/dashboard/invoice',
                    icon: 'receipt'
                },
                {
                    name: "Profiles",
                    url: '/dashboard/profiles',
                    icon: 'account_circle'
                },
                {
                    name: "Clients",
                    url: '/dashboard/clients',
                    icon: 'people_alt'
                },
                {
                    name: "Payments",
                    url: '/dashboard/payments',
                    icon: 'credit_card'
                }
            ],

            menus2: [
                {
                    name: "Contact Us",
                    url: '#',
                    icon: 'call'
                }
            ]
        }
    },
    // beforeMount(){
    //     document.getElementById("N_sidenav").style.display = "none";
    // },
    methods: {
        async logout() {
            try {
                await this.$auth.logout().then((response) => {
                    this.$router.push('/auth/login');
                });
            } catch (error) {
                
            }
        },

        // MObile menu scripts 

        openNav(){
            document.getElementById("N_sidenav").style.width = "100%";
            document.getElementById("N_sidenav").style.display = "block";
        },

        closeNav(){
            document.getElementById("N_sidenav").style.width = "0";
            document.getElementById("N_sidenav").style.display = "block";
        }
    }
}


</script>

<style scoped>

    .dashboard-body{
        position: relative;
        display: flex;
    }

    /* Mobile Menu  designe start*/
    .mobile_nav{
        display: none;
    }

    #N_sidenav{
        display: none;
    }

    .sidenav {
        height: 100%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #f8f6f6;
        transition: 0.6s;
        transition-delay: .6s;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .sidenav a{
        text-decoration: none;
        font-size: 25px;
        color: #614DFF;
        display: block;
        padding: 6px 8px 6px 16px;
        transition: 0.3s;
    }

    .sidenav a:hover{
        color: #000000;
    }

    .sidenav .closebtn{
        position: absolute;
        top: 15px;
        right: 10px;
        font-size: 36px;
        padding: 0px 18px 0px 50px;
    }
    /* Mobile Menu  designe end*/


    /* desktop designe  */
    .left-menu{
        width: 240px;
        height: 100%;
        position: fixed;
        background-color: #ffffff;
        box-shadow: 8px 4px 24px rgba(0, 0, 0, 0.03);
    }

    .left-menu ul {
        list-style: none;
        margin: 0;
        padding: 0;
        /* overflow-y: scroll; */
    }

    .left-menu ul .menu-active{
        /* background: linear-gradient(90deg, rgba(0, 117, 255, 0.1) 0%, rgba(0, 117, 255, 0) 117.12%); */
        /* border-left: 5px solid #614DFF; */
        background: #614DFF26;
        color: #614DFF !important;
        transition: 0.3s ease-in;
    }

    .left-menu ul .menu-active a{
        color: #614DFF !important;
    }

    .left-menu ul li{
        padding: 15px 10px 15px 30px;
    }

    .left-menu ul a{
    text-decoration: none;
    color: #000000;
    }
    .left-menu ul li{
    color: #000000;
    display: flex;
    }

    .material-icons,
    .logout_btn span{
        cursor: pointer;
        padding-right: 10px;
    }
    
    .left-menu .logout_btn p{
        padding: 0;
        cursor: pointer;
    }

    .left-menu ul li a span{
    padding-right: 10px;
    }

    .left-menu p{
        padding: 0 0 0 30px;
    }

    .logo{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #5b5b5b;
    }

    .page-area {
        position: absolute;
        margin-left: 280px;
        width: calc(100vw - 320px);
        margin-top: 120px;
        padding: 20px;
    }


    /* Horizontal Menu Style Start Here  */

    /* Search Start Here  */

    .search_pop_up{
        display: flex;
        align-items: center;
        max-width: 400px;
        width: 100%;
    }

    .search_mob_btn{
        display: none;
    }
    .search_btn_mobile{
        display: none;
    }

    .search-bar{
        max-width: 400px;
        width: 100%;
    }

    .src_inp{
        
        position: relative;
    }

    .search_pop_up .search-bar input{
        width: 100%;
        height: 50px;
        border: 1px solid #949494;
        border-radius: 30px;
        padding: 0 0 0 45px;
        color: #979797;
    }

    .search-bar input:focus-visible{
        outline-color: #614DFF;
    }

    .search-bar .material-icons{
        position: absolute;
        transform: translate(-50%, -50%);
        top: 51%;
        left: 5%;
        color: #979797;
        z-index: 99;
    }

    /* Search End Here  */

    .horizontal-menu{
        position: fixed;
        display: flex;
        margin-left: 300px;
        z-index: 900;
        width: calc(100% - 300px);
        height: 120px;
        /* background-color: #ffffff; */
        /* box-shadow: 0px 8px 24px rgb(0 0 0 / 3%); */
    }

    .menu-headline{
        font-size: 20px;
        font-weight: 600;
        color: #8c8c8c;
        padding: 20px 0 20px 20px;
    }

    .mobile_nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .mobile_nav ul .menu-active{
        background: linear-gradient(90deg, #0075ff1a 0%, #0075ff00 117.12%);
        border-left: 5px solid #614DFF;
        color: #614DFF !important;
        transition: 0.3s ease-in;
    }

    .mobile_nav ul .menu-active a{
        color: #614DFF !important;
    }

    .mobile_nav ul li{
        padding: 10px;
        margin-left: 20px;
    }

    .mobile_nav ul li a{
    text-decoration: none;
    color: #000000;
    display: flex;
    }

    .mobile_nav ul li a span{
    padding-right: 10px;
    }

    .mobile_nav p{
        padding: 0 0 0 30px;
    }

    .left_menu_footer{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 20px;
        width: 100%;
        border-top: 1px solid #8c8c8c;
        background-color: #f8f6f6;
    }

    .left_menu_footer .copyright {
        font-weight: 700;
        font-size: 14px;
    }

    .profile_name .name{
        font-size: 14px;
        line-height: 1.7;
        font-weight: 700;
        color: #707EAE;
    }

    .dashboard_welcom{
        font-size: 24px;
        line-height: 1.7;
        font-weight: 500;
        color: #2B3674;
    }

    .profile{
        display: flex;
        padding: 20px 30px;
        /* background-color: #F2F8FF; */
        border-radius: 20px;
        margin: 20px;
        align-items: center;
        cursor: pointer;
        transition: 0.3s;
    }

    .profile:hover{
        box-shadow: 0px 0px 6px 6px #614dff63;
    }

    .profile .profile-name{
        padding-right: 20px;
    }

    .profile .profile-name .name{
        font-size: 14px;
        line-height: 1.2;
        font-weight: 500;
    }

    .hori-navbar{
        display: flex;
        align-items: center;
    }

    .notification-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        /* background-color: #F2F8FF; */
        color: #93B0C8;
        cursor: pointer;
        transition: 0.3s;
    }

    .notification-icon .material-icons{
        padding: 0;
    }

    .notification-icon:hover{
        box-shadow: 0px 0px 6px 6px #614dff63;
        
    }


@media all and (max-width: 600px) {
/* Mobile Menu  designe start*/
    .left-menu{
        display: none;
    }

    .mobile_nav{
        display: block;
        z-index: 999;
    }

    .page-area {
        margin-left: 0;
        width: 100%;
    }

    .horizontal-menu{
        margin-left: 0;
        width: 100%;
    }
    .left_menu_footer{
        position: relative;
    }

}
/* Mobile Menu  designe end*/


@media all and (max-width: 1024px) {

    .profile{
        padding: 0;
        position: relative;
    }

    .profile .profile-name{
        position: absolute;
        right: -25px;
        top: 50px;
        padding: 10px;
        width: 100%;
        border-radius: 12px;
        display: none;
    }

    .profile:hover .profile-name{
        width: 200px;
        background: #614DFF;
        color: #ffffff;
        display: block;
    }

    .left-menu{
        display: none;
    }

    .mobile_nav{
        display: block;
        padding-right: 20px;
        z-index: 999;
    }

    .page-area {
        margin-left: 0;
        width: 100%;
    }

    .horizontal-menu{
        margin-left: 0;
        width: 100%;
    }

    .search_btn_mobile{
        display: none;
    }

    .search-bar .material-icons{
        left: 3vw;
    }

    .left_menu_footer{
        bottom: 0vh;
    }

    .left_menu_footer .copyright {
        font-weight: 700;
        font-size: 18px;
    }
}


@media all and (max-width: 480px){
    .left-menu{
        display: none;
    }

    .mobile_nav{
        display: block;
        z-index: 999;
    }

    .page-area {
        margin-left: 0;
        width: 100%;
    }

    .horizontal-menu{
        margin-left: 0;
        width: 100%;
    }

    /* Search Start here  */
    .search_pop_up{
        position: relative;
        max-width: 480px;
        width: 100%;
    }
    .search-bar{
        position: absolute;
        display: none;
    }

    .search-bar .material-icons{
        left: 7vw;
    }

    .search_mob_btn{
        display: inline-block;
    }

    .search_pop_up:hover .search-bar{
        width: 85vw;
        display: inline-block;
        top: 45px;
        left: -10vw;
        animation: search_move .6s;
        animation-timing-function: ease;
    }

    @keyframes search_move{
        from {top: 0px;}
        to {top: 45px;}
    }

    .search_pop_up .search-bar input{
        max-width: 100%;
        width: 100%;
        box-shadow: 1px 1px 3px #b0a6a638;
    }

    .search_pop_up .search-bar input:focus-visible{
        outline-color: #94949496;
    }

    .search_pop_up:hover .search_mob_btn{
        display: none;
    }

    /* Search Css End  */

    :deep(.can_sav_section){
        text-align: center;
    }

    .sidenav a{
        font-size: 16px;
    }


}
</style>