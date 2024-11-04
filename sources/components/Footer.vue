<template>
    <footer class="overflow-x-auto">
        <div class="logo">
            <img src="/images/gotech.png"/>
        </div>
        <div class="information lg:flex lg:pt-4 pt-8">
            <div class="company">
                <h4>Công ty cổ phần sản xuất và thương mại GOTECH</h4>
                <div class="infor-1">
                    <img src="/images/building.png" alt="head quater"/>
                    <div>
                        <h5>Trụ sở chính:</h5>
                        <p>Số 31 lô E2/D21 khu ĐTM Cầu Giấy, đường Tôn Thất Thuyết, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội</p>
                    </div>
                </div>
                <div class="infor-1">
                    <img src="/images/current-location.png" alt="head quater"/>
                    <div>
                        <h5>Văn phòng Hà Nội:</h5>
                        <p>Số TT4.08, khu đô thị Xuân Phương Tasco, P. Xuân Phương, Q. Nam Từ Liêm, Hà Nội</p>
                        <p><font-awesome-icon :icon="faPhone" /> 1900.633.642</p>
                        <p><font-awesome-icon :icon="faEnvelope" /> contact@gotech.vn</p>
                    </div>
                </div>
                <div class="infor-1">
                    <img src="/images/current-location.png" alt="head quater"/>
                    <div>
                        <h5>Văn phòng TP. Hồ Chí Minh:</h5>
                        <p>Số 53 Thiên Hộ Dương, Phường 1, Quận Gò Vấp, TP. Hồ Chí Minh</p>
                        <p><font-awesome-icon :icon="faPhone" /> 1900.633.642</p>
                        <p><font-awesome-icon :icon="faEnvelope" /> contact@gotech.vn</p>
                    </div>
                </div>
            </div>
            <div class="access lg:pt-4 pt-8">
                <h4>Truy cập nhanh</h4>
                <div class="access-1">
                    <ul>
                        <li>
                            <nuxt-link to="/contact">Về GOTECH</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Tin tức</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Liên hệ</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Định vị xe</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="access-2">
                    <img src="/images/officer.png" alt="Đã thông báo với bộ công thương"/>
                </div>
            </div>
            <div class="support lg:pt-4 pt-8">
                <h4>Hỗ trợ khách hàng</h4>
                <div class="access-1">
                    <ul>
                        <li>
                            <nuxt-link to="/contact">Hướng dẫn sử dụng</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Chính sách bảo mật thông tin</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Chính sách bảo hành</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Chính sách thanh toán</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Chính sách đổi trả</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    min-height: 543px;
    padding-top: 44px;

    background-image: url('/images/map.png');
    background-repeat: no-repeat;
    background-position: top 44px center;
    border-top: 2px solid red;

    .logo {
        img {
            width: 230px;
            height: 40px;       
        }
    }

    .information {
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
        h4 {
            font-size: 18px;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            text-transform: uppercase;
        }
        .company {
            .infor-1 {
                display: flex;
                margin-top: 24px;
                max-width: 350px;
                img {
                    height: 24px;
                    width: 24px;
                    margin-top: 6px;
                    margin-right: 16px;
                }

                h5 {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 700;
                }

                p {
                    font-size: 14px;
                    font-weight: 400;
                    margin-top: 8px;
                    margin-bottom: 0px;
                }
            }
        }

        .access-1 {
            margin-top: 24px;
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
                li {
                    margin-top: 15px;
                }
                a {
                    font-size: 14px;
                    color: #000000;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }

        .access {
            .access-2 {
                margin-top: 15px;
            }
        }

    }
}
</style>