<template>
    <header class="header overflow-x-auto">
        <div class="header-1">
            <div class="logo">
                <img src="/images/gotech.png" alt="logo" />
            </div>
            <form class="search-form">
                <input type="text" placeholder="Tìm kiếm theo sản phẩm, dòng xe" class="search-input" />
                <img src="/images/search.png" alt="search" />
            </form>
            <div class="space">

            </div>
            <div class="information">
                <div class="hotline">
                    <img src="/images/hotline.png" alt="hotline" />
                    <div>
                        <span class="hotline-label" aria-hidden="true">Tổng đài</span>
                        <a href="tel:+123456789" class="hotline-number" aria-label="Call us at +123 456 789">+123 456
                            789</a>
                    </div>
                </div>
                <div class="hotline">
                    <img src="/images/email.png" alt="hotline" />
                    <div>
                        <span class="hotline-label" aria-hidden="true">Email </span>
                        <a href="mailto:contact@example.com" class="email-address">contact@gotech.vn</a>
                    </div>
                </div>
                <div class="hotline">
                    <img src="/images/location.png" alt="hotline" />
                    <div>
                        <span class="hotline-label" aria-hidden="true">Hệ thống đại lý</span>
                        <span class="email-address">Tại 63 tỉnh thành</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-nav">
            <ul class="nav-menu">
                <li class="nav-item">
                    <nuxt-link to="/" exact>Trang chủ</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/about">Về Gotech</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/services" class="has-menu">Độ xe</nuxt-link>
                    <ul class="nav-menu-level-2">
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Sản phẩm theo xe<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Màn hình android ô tô<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Android box ô tô<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Camera hành trình<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Cảm biến áp suất lốp<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Phụ kiện<span></span></nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/contact" class="has-menu">Tạp chí xe</nuxt-link>
                    <ul class="nav-menu-level-2">
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Sản phẩm theo xe<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Màn hình android ô tô<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Android box ô tô<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Camera hành trình<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Cảm biến áp suất lốp<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Phụ kiện<span></span></nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/contact" class="has-menu">Chính sách</nuxt-link>
                    <ul class="nav-menu-level-2">
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Sản phẩm theo xe<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Màn hình android ô tô<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Android box ô tô<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Camera hành trình<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Cảm biến áp suất lốp<span></span></nuxt-link>
                        </li>
                        <li class="nav-item-level-2">
                            <nuxt-link to="/services" class="has-menu">Phụ kiện<span></span></nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/contact">Tính năng</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/contact">Đại lý</nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header-1 {
    width: 80%;
    margin: 16px auto;

    display: flex;
    align-items: center;

    .search-form {
        display: flex;
        margin-left: 36px;
        margin-right: 36px;
        width: 360px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #ccc;
        position: relative;

        img {
            position: absolute;
            height: 22px;
            width: 22px;

            right: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .search-input {
        padding: 10px;
        border-color: transparent;
        font-size: 16px;
        width: 100%;
        margin-right: 10px;
    }

    .information {
        display: flex;

        .hotline {
            display: flex;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            margin-left: 20px;

            img {
                width: 28px;
                height: 28px;
            }

            div {
                margin-left: 8px;
                display: flex;
                flex-direction: column;

                span {
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 18px;
                    color: #000;
                }

                a {
                    color: #DC0F0F;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    text-decoration: none;
                }

                .email-address {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    color: #030303;
                }
            }
        }
    }
}

.header-nav {
    display: flex;
    height: 62px;
    background-color: #DC0F0F;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    .nav-menu {
        height: 100%;
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        width: 100%;
        .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            a {
                text-align: left;
                color: #ffffff;
                text-decoration: none;
                font-size: 16px;
                padding: 10px 25px;
                transition: #DC0F0F;
            }

            a.has-menu {
                background-image: url('/images/arrow-down.png');
                background-repeat: no-repeat;
                background-position: right 10px center;
                padding-right: 30px;
            }

            &:hover {
                background-color: #1E1E1E;

                .nav-menu-level-2 {
                    display: flex;
                }
            }

            .nav-menu-level-2 {
                list-style: none;
                display: none;
                justify-content: center;
                align-items: center;

                box-sizing: border-box;
                position: absolute;
                z-index: 1000;
                top: 100%;
                left: 0;
                width: 100vw;
                height: 42px;

                background-color: #1E1E1E;
            }
        }
    }
}
</style>