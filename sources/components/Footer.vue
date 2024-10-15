<template>
    <div class="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200">
        <Container>
            <div class="flex justify-between text-base">
                <div class="flex flex-col content-center justify-between items-center w-1/5 gap-1"
                     @click="handleClickNav(Url.loan)">
                    <div class="w-6 h-6">
                        <!--                        <img class="w-full" :src="iconLoan">-->
                        <BaseIcon is-image :path="checkMenu('/loan') ? iconLoanActive : iconLoan" size="24"/>
                    </div>
                    <p class="text-xs text-color-sub">Khoản vay</p>
                </div>
                <div class="flex flex-col content-center justify-between items-center w-1/5 gap-1"
                     @click="handleClickNav(Url.notification)">
                    <div class="w-8 relative">
                        <!--                        <img class="w-full" :src="iconNotification">-->
                        <BaseIcon is-image :path="checkMenu('/notification') ? bellActive : bell" size="24"/>
                        <label v-if="notification"
                               class="absolute bg-main py-0.5 px-1 rounded flex justify-center items-center text-xs bottom-4 left-3 text-white">
                            {{ notification }}
                        </label>
                    </div>
                    <p class="text-xs text-color-sub">Thông báo</p>
                </div>
                <div class="flex flex-col content-center items-center w-1/5 gap-1"
                     @click="handleClickNav(Url.account)">
                    <div class="w-8">
                        <!--                        <img class="w-full" :src="iconProfile">-->
                        <BaseIcon is-image :path="checkMenu('/account') ? profileActive : profile" size="24"/>
                    </div>
                    <p class="text-xs text-color-sub">Tài khoản</p>
                </div>
            </div>
        </Container>
    </div>

</template>
<script>
import Container from "./Container.vue";
import iconNotification from '../assets/icon-noti.svg';
import iconProfile from '../assets/icon-profile.svg';
import Button from "./Button.vue";
import Url from "../config/Url";
import BaseIcon from "./BaseIcon.vue";
import {mdiAccount, mdiAccountOutline, mdiBell, mdiBellOutline, mdiHandCoin, mdiHandCoinOutline} from "@mdi/js";
import iconLoan from './../assets/loan.svg';
import iconLoanActive from './../assets/loan-active.svg';
import bell from './../assets/bell.svg';
import bellActive from './../assets/bell-active.svg';
import profile from './../assets/profile.svg';
import profileActive from './../assets/profile-active.svg';

export default {
    name: 'Footer',
    computed: {
        Url() {
            return Url
        },
    },
    props: {
        notification: {
            type: Number,
            default: 0,
        }
    },
    components: {
        BaseIcon,
        Button,
        Container
    },
    data() {
        return {
            iconLoan: iconLoan,
            iconLoanActive: iconLoanActive,
            iconNotification: iconNotification,
            iconProfile: iconProfile,
            bell: bell,
            bellActive: bellActive,
            profile: profile,
            profileActive: profileActive,
        }
    },
    created() {
        this.getUrl();
    },
    methods: {
        handleClickNav(url) {
            this.$inertia.get(url);
        },
        getUrl() {
            return window.location.pathname;
        },
        checkMenu(url) {
            return this.getUrl() === url;
        },
    },

}
</script>
