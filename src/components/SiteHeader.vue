<template>

    <div id="side_block" :class="{'open': isOpenMobileMenu}">
        <div class="wrapper">

          
            <div class="wrap_mobile_menu" @click="toggleMobileMenu">

                <div class="mobile_menu_top_wrap">
                    <div class="logo">
                        <div class="pic">
                            <!-- <a href="#"> -->
                            <router-link to="/">
                                <!-- <img class="lazy" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==" data-src="../assets/images/logo-gorshenko.png" alt="logo Gorshenko"> -->
                                <img id="mobile_logo" src="@/assets/images/logo-gorshenko.png" alt="logo Gorshenko">
                            </router-link>
                            <!-- </a> -->
                        </div>
                    </div>

                    <button class="hamburger hamburger--spin" :class="{'is-active': isOpenMobileMenu}" type="button">
                            <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                            </span>
                    </button>
                </div>
                
                
                    
                <div class="menu_bottom_wrap">

                    <nav class="mobile_menu">
                        <ul itemscope itemtype="http://schema.org/SiteNavigationElement">
                            <li><router-link to="/">Головна</router-link></li>
                            <li><router-link to="/about-us">Про нас</router-link></li>
                            <li><router-link to="/services">Послуги</router-link></li>
                            <li><router-link to="/prices">Ціни</router-link></li>
                            <li><router-link to="/for-psychologists">Психологам</router-link></li>
                            <li><router-link to="/seminars">Семінари</router-link></li>
                            <li><router-link to="/successes">Успіхи</router-link></li>
                            <li><router-link to="/contacts">Контакти</router-link></li>
                            <li>
                                <router-link to="/payment" class="header_wallet_text">
                                    Оплата
                                    <svg class="header_wallet" width="40" height="37" viewbox="0 0 40 37" fill="#536779" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.1911 18.9967H36.3211V12.1691C36.3211 12.1378 36.3178 12.1072 36.316 12.0763V6.81856C36.316 6.46104 36.0028 6.17125 35.6162 6.17125H28.1962L21.7814 0.237457C21.6501 0.116097 21.4721 0.0478935 21.2865 0.0478935C21.1009 0.0478935 20.9229 0.116076 20.7916 0.237457L15.9546 4.71172L13.6807 2.60829C13.4074 2.35552 12.9643 2.35552 12.691 2.60829L8.8346 6.1754C8.80913 6.17279 8.78324 6.17125 8.757 6.17125H0.809175C0.422664 6.17125 0.109375 6.46104 0.109375 6.81856V13.7079C0.109375 13.729 0.110642 13.7499 0.112797 13.7705V35.1951C0.112797 36.1639 0.964908 36.9521 2.01226 36.9521H34.4216C35.469 36.9521 36.3211 36.1639 36.3211 35.1951V28.3675H39.1911C39.5777 28.3675 39.8909 28.0777 39.8909 27.7202V19.6441C39.8909 19.2865 39.5776 18.9967 39.1911 18.9967ZM34.9164 7.4659V10.4747C34.7584 10.4351 34.593 10.4121 34.4216 10.4121H32.7808L29.5957 7.4659H34.9164ZM21.2865 1.61065L30.8015 10.4121H28.6774L20.2245 2.59302L21.2865 1.61065ZM19.2348 3.50856L26.6979 10.4121H22.1173L16.9444 5.62716L19.2348 3.50856ZM13.1858 3.98149L14.9649 5.62714L15.9546 6.54258L20.1378 10.4121H18.2303L12.2321 4.86369L13.1858 3.98149ZM16.2508 10.4121H6.23386L11.2423 5.77923L16.2508 10.4121ZM4.25442 10.4121H2.01226C1.8378 10.4121 1.6696 10.4357 1.509 10.4766V7.4659H7.43949L4.25442 10.4121ZM34.9215 35.1951C34.9215 35.45 34.6972 35.6575 34.4216 35.6575H2.01226C1.73666 35.6575 1.51242 35.45 1.51242 35.1951V12.1691C1.51242 11.9142 1.73666 11.7067 2.01226 11.7067H34.4216C34.6801 11.7067 34.8908 11.8898 34.9164 12.1226V13.7079C34.9164 13.7333 34.9185 13.7583 34.9215 13.783V18.9968H28.5608C25.7678 18.9968 23.4955 21.0986 23.4955 23.6821C23.4955 26.2657 25.7678 28.3676 28.5608 28.3676H34.9215V35.1951H34.9215ZM38.4913 27.0729H36.3211H34.9215H28.5608C26.5396 27.0729 24.8951 25.5518 24.8951 23.6821C24.8951 21.8124 26.5396 20.2914 28.5608 20.2914H34.9215H36.3211H38.4913V27.0729Z"/>
                                        <path d="M28.5937 21.4627C27.2707 21.4627 26.1943 22.4583 26.1943 23.6821C26.1943 24.9058 27.2707 25.9015 28.5937 25.9015C29.9166 25.9015 30.993 24.9058 30.993 23.6821C30.993 22.4583 29.9166 21.4627 28.5937 21.4627ZM28.5937 24.6068C28.0424 24.6068 27.594 24.1919 27.594 23.6821C27.594 23.1722 28.0425 22.7573 28.5937 22.7573C29.1449 22.7573 29.5934 23.1722 29.5934 23.6821C29.5934 24.1919 29.1449 24.6068 28.5937 24.6068Z"/>
                                    </svg>
                                </router-link>
                            </li>
                            
                        </ul>
                    </nav>

                    <div class="mobile_contacts_wrap">
                        <div>
                            <a href="tel:+380974070110" title="phone">
                                <svg class="icon_contacts" width="40" height="40" viewbox="0 0 40 40" fill="#D3DDE6" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="5"/>
                                    <path d="M23.7333 22.1427C22.6667 23.3232 22.6667 24.5037 21.6 24.5037C20.5333 24.5037 19.4667 23.3232 18.4 22.1427C17.3333 20.9622 16.2667 19.7817 16.2667 18.6012C16.2667 17.4207 17.3333 17.4207 18.4 16.2402C19.4667 15.0597 16.2667 11.5182 15.2 11.5182C14.1333 11.5182 12 15.0597 12 15.0597C12 17.4207 14.192 22.2076 16.2667 24.5037C18.3413 26.7998 22.6667 29.2257 24.8 29.2257C24.8 29.2257 28 26.8647 28 25.6842C28 24.5037 24.8 20.9622 23.7333 22.1427Z" fill="white"/>
                                </svg>
                                <span>+38 (097) <b>407-01-10</b></span>
                            </a>
                        </div>
                        <div>
                            <a class="contacts_icons" href="mailto:hello@mgoroshenko.com.ua" rel="nofollow, noreferrer" target="_blank" title="email">
                                <svg class="icon_contacts" width="40" height="40" viewbox="0 0 40 40" fill="#D3DDE6" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.00012207" width="40" height="40" rx="5"/>
                                    <path d="M27.7778 12.0001H12.2222C10.9949 12.0001 10 13.0235 10 14.2858V25.7144C10 26.9768 10.9949 28.0001 12.2222 28.0001H27.7778C29.0051 28.0001 30 26.9768 30 25.7144V14.2858C30 13.0235 29.0051 12.0001 27.7778 12.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 15.0001L20 21.0001L30 15.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>hello@mgoroshenko.com.ua</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://goo.gl/maps/p1smwKevMyWX4RhLA" rel="nofollow, noreferrer" target="_blank" title="adress">
                                <svg class="icon_contacts icon_map_left" width="30" height="40" viewbox="0 0 30 40" fill="#D3DDE6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 15.4545C30 6.89394 23.3088 0 15 0C6.69118 0 0 6.89394 0 15.4545C0 24.0152 15 40 15 40C15 40 30 24.0152 30 15.4545ZM8.0147 15.1515C8.0147 11.2121 11.1765 7.95455 15 7.95455C18.8235 7.95455 21.9853 11.1364 21.9853 15.1515C21.9853 19.0909 18.8971 22.3485 15 22.3485C11.1765 22.3485 8.0147 19.0909 8.0147 15.1515Z" />
                                </svg>
                                <span>Львів, вул. Зелена 44</span>
                            </a>
                        </div>
                    </div>
                    
                    
                    <button class="btn btn_callback" type="button" @click.prevent="showForm">Вам передзвонити?</button>
                        
                    
                </div>

            </div> 
            

            

        </div>
    </div>

    <div id="page_overlay" :class="{'open': isOpenMobileMenu}" @click="toggleMobileMenu"></div>



     <header id="header" :class="{'fixed': isFixed}">
        <div class="container">
            <!-- <div class="wrap_menu" :class="{'up_scroll': isFixed}"> -->
            <div class="wrap_menu">

                <div class="menu_top_wrap">
                    <div class="logo">
                        <div class="pic">
                            <!-- <a href="#"> -->
                            <router-link to="/">
                                <!-- <img class="lazy" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==" data-src="../assets/images/logo-gorshenko.png" alt="logo Gorshenko"> -->
                                <img src="@/assets/images/logo-gorshenko.png" alt="logo Gorshenko">
                            </router-link>
                            <!-- </a> -->
                        </div>
                    </div>
                    <div class="address">

                        <a href="https://goo.gl/maps/p1smwKevMyWX4RhLA" rel="nofollow, noreferrer" target="_blank">
                            <svg class="icon" width="30" height="40" viewbox="0 0 30 40" fill="#D3DDE6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 15.4545C30 6.89394 23.3088 0 15 0C6.69118 0 0 6.89394 0 15.4545C0 24.0152 15 40 15 40C15 40 30 24.0152 30 15.4545ZM8.0147 15.1515C8.0147 11.2121 11.1765 7.95455 15 7.95455C18.8235 7.95455 21.9853 11.1364 21.9853 15.1515C21.9853 19.0909 18.8971 22.3485 15 22.3485C11.1765 22.3485 8.0147 19.0909 8.0147 15.1515Z" />
                            </svg>
                            Львів, вул. Зелена 44
                        </a>
                    </div>
                    <div class="phone">
                        <a href="tel:+380974070110">
                            <svg class="icon" width="40" height="40" viewbox="0 0 40 40" fill="#D3DDE6" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="5"/>
                                <path d="M23.7333 22.1427C22.6667 23.3232 22.6667 24.5037 21.6 24.5037C20.5333 24.5037 19.4667 23.3232 18.4 22.1427C17.3333 20.9622 16.2667 19.7817 16.2667 18.6012C16.2667 17.4207 17.3333 17.4207 18.4 16.2402C19.4667 15.0597 16.2667 11.5182 15.2 11.5182C14.1333 11.5182 12 15.0597 12 15.0597C12 17.4207 14.192 22.2076 16.2667 24.5037C18.3413 26.7998 22.6667 29.2257 24.8 29.2257C24.8 29.2257 28 26.8647 28 25.6842C28 24.5037 24.8 20.9622 23.7333 22.1427Z" fill="white"/>
                            </svg>
                            +38 (097) 407-01-10
                        </a>
                    </div>
                    <button class="btn btn_callback" type="button" @click.prevent="showForm">Вам передзвонити?</button>
                    <div class="hamb_menu ">
                        <button class="hamburger hamburger--spin" :class="{'is-active': isOpenMobileMenu}" @click="toggleMobileMenu" type="button">
                            <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>

                <div class="menu_bottom_wrap">
                    <nav class="main_menu">
                        <ul itemscope itemtype="http://schema.org/SiteNavigationElement">
                            <li> <router-link to="/">Головна</router-link></li>
                            <li><router-link to="/about-us">Про нас</router-link></li>
                            <li><router-link to="/services">Послуги</router-link></li>
                            <li><router-link to="/prices">Ціни</router-link></li>
                            <li><router-link to="/for-psychologists">Психологам</router-link></li>
                            <li><router-link to="/seminars">Семінари</router-link></li>
                            <li><router-link to="/successes">Успіхи</router-link></li>
                            <li><router-link to="/contacts">Контакти</router-link></li>
                            <li>
                                <router-link to="/payment" class="header_wallet_text">
                                    Оплата
                                    <svg class="header_wallet" width="40" height="37" viewbox="0 0 40 37" fill="#536779" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.1911 18.9967H36.3211V12.1691C36.3211 12.1378 36.3178 12.1072 36.316 12.0763V6.81856C36.316 6.46104 36.0028 6.17125 35.6162 6.17125H28.1962L21.7814 0.237457C21.6501 0.116097 21.4721 0.0478935 21.2865 0.0478935C21.1009 0.0478935 20.9229 0.116076 20.7916 0.237457L15.9546 4.71172L13.6807 2.60829C13.4074 2.35552 12.9643 2.35552 12.691 2.60829L8.8346 6.1754C8.80913 6.17279 8.78324 6.17125 8.757 6.17125H0.809175C0.422664 6.17125 0.109375 6.46104 0.109375 6.81856V13.7079C0.109375 13.729 0.110642 13.7499 0.112797 13.7705V35.1951C0.112797 36.1639 0.964908 36.9521 2.01226 36.9521H34.4216C35.469 36.9521 36.3211 36.1639 36.3211 35.1951V28.3675H39.1911C39.5777 28.3675 39.8909 28.0777 39.8909 27.7202V19.6441C39.8909 19.2865 39.5776 18.9967 39.1911 18.9967ZM34.9164 7.4659V10.4747C34.7584 10.4351 34.593 10.4121 34.4216 10.4121H32.7808L29.5957 7.4659H34.9164ZM21.2865 1.61065L30.8015 10.4121H28.6774L20.2245 2.59302L21.2865 1.61065ZM19.2348 3.50856L26.6979 10.4121H22.1173L16.9444 5.62716L19.2348 3.50856ZM13.1858 3.98149L14.9649 5.62714L15.9546 6.54258L20.1378 10.4121H18.2303L12.2321 4.86369L13.1858 3.98149ZM16.2508 10.4121H6.23386L11.2423 5.77923L16.2508 10.4121ZM4.25442 10.4121H2.01226C1.8378 10.4121 1.6696 10.4357 1.509 10.4766V7.4659H7.43949L4.25442 10.4121ZM34.9215 35.1951C34.9215 35.45 34.6972 35.6575 34.4216 35.6575H2.01226C1.73666 35.6575 1.51242 35.45 1.51242 35.1951V12.1691C1.51242 11.9142 1.73666 11.7067 2.01226 11.7067H34.4216C34.6801 11.7067 34.8908 11.8898 34.9164 12.1226V13.7079C34.9164 13.7333 34.9185 13.7583 34.9215 13.783V18.9968H28.5608C25.7678 18.9968 23.4955 21.0986 23.4955 23.6821C23.4955 26.2657 25.7678 28.3676 28.5608 28.3676H34.9215V35.1951H34.9215ZM38.4913 27.0729H36.3211H34.9215H28.5608C26.5396 27.0729 24.8951 25.5518 24.8951 23.6821C24.8951 21.8124 26.5396 20.2914 28.5608 20.2914H34.9215H36.3211H38.4913V27.0729Z"/>
                                        <path d="M28.5937 21.4627C27.2707 21.4627 26.1943 22.4583 26.1943 23.6821C26.1943 24.9058 27.2707 25.9015 28.5937 25.9015C29.9166 25.9015 30.993 24.9058 30.993 23.6821C30.993 22.4583 29.9166 21.4627 28.5937 21.4627ZM28.5937 24.6068C28.0424 24.6068 27.594 24.1919 27.594 23.6821C27.594 23.1722 28.0425 22.7573 28.5937 22.7573C29.1449 22.7573 29.5934 23.1722 29.5934 23.6821C29.5934 24.1919 29.1449 24.6068 28.5937 24.6068Z"/>
                                    </svg>
                                </router-link>
                            </li>
                            
                        </ul>
                    </nav> 
                </div>

            </div>       
        
        </div>

        <back-to-top bottom="50px" right="50px" visibleoffset="700">
            <button type="button" class="btn btn_to_top test"></button>
        </back-to-top>

        <modal-window v-if="showModal" @close="showModal = false">
            <!-- <template v-slot:header></template> -->
            <template #header>
                <button type="button" class="close_modal_btn" @click="showModal = false"></button>
            </template>
            <template #body>
                <!-- <FeedbackForm/> -->
                <FeedbackForm/>
            </template>
            <template #footer>
                <div></div>
            </template>

        </modal-window>
    </header>
</template>

<script>
import BackToTop from "../../node_modules/vue-backtotop/src/BackToTop.vue";
import ModalWindow from '@/components/Modules/ModalWindow'
import FeedbackForm from '@/components/Modules/FeedbackForm.vue'

export default {
    name: 'SiteHeader',
    components: {
    BackToTop,
    ModalWindow,
    FeedbackForm
},
    data() {
        return {
            isFixed: false,
            isOpenMobileMenu: false,
            showModal: false
        }
    },
    created() {
        window.addEventListener("scroll", this.toggleFixedScroll);
    },
    // mounted () {
    //     document.body.classList.add('lock')
    // },
    methods: {
        // toggleFixedScroll() {
        //     // this.isFixed = window.scrollY > 148
        //     this.isFixed = window.scrollY > 80;
        // },
        toggleFixedScroll() {
        const scy = window.scrollY
        if (scy > this.prevScroll && scy > 180) {
                this.isFixed = true
        } else {
            this.isFixed = false
        }
            this.prevScroll = scy <= 0 ? 0 : scy
        },
        toggleMobileMenu() {
            this.isOpenMobileMenu = !this.isOpenMobileMenu
            this.isOpenMobileMenu === true ? document.body.classList.add('lock') : document.body.classList.remove('lock')
        },
        showForm() {
            this.showModal = true
        }
    }
}
</script>
