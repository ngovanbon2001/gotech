<template>
    <div class="w-full">
        <ModalSelectCityProvince
            :key="isShowModelProvince"
            :dataList="dataProvince()"
            v-model="this.address.province"
            v-model:isShow="isShowModelProvince"
            title="Chọn Thành phố/ Tỉnh"
            @handleClickClose="handleClickCloseModelProvince"
        />
        <div class="w-full px-3 py-2 border-b border-gray-200 mb-3 flex justify-between"
             @click.stop="handleClickShowModel('province')">
        <span class="grow">{{
                getAddressLabel(this.dataProvince(), this.address.province) || 'Chọn Thành phố/ Tỉnh'
            }}</span>
            <BaseIcon :path="mdiChevronDown()" size="24"/>
        </div>

        <div class="flex gap-3 mb-5">
            <ModalSelectCityProvince
                :key="isShowModelDistrict"
                :dataList="dataDistrict()"
                v-model="this.address.district"
                v-model:isShow="isShowModelDistrict"
                title="Chọn quận/ huyện"
                @handleClickClose="isShowModelDistrict = false"/>
            <div class="grow px-3 py-4 border-b border-gray-200 flex justify-between w-1/2"
                 :class="{'bg-gray-200':!this.address.province}"
                 @click="handleClickShowModel('district')">
                <span class="grow">{{ getAddressLabel(dataDistrict(), this.address.district) || 'Quận/ Huyện' }}</span>
                <BaseIcon :path="mdiChevronDown()" size="24"/>
            </div>

            <ModalSelectCityProvince
                :key="isShowModelWards"
                :dataList="dataWards()"
                v-model="this.address.wards"
                v-model:isShow="isShowModelWards"
                title="Chọn phường/ xã"
                @handleClickClose="isShowModelWards = false"/>
            <div class="grow px-3 py-4 border-b border-gray-200 flex justify-between w-1/2"
                 :class="{'bg-gray-200':!this.address.district}"
                 @click="handleClickShowModel('ward')">
                <span class="grow">{{ getAddressLabel(dataWards(), this.address.wards) || 'Phường/ Xã' }}</span>
                <BaseIcon :path="mdiChevronDown()" size="24"/>
            </div>
        </div>
        <InputForm
            v-model:model-value="this.address.detail"
            :input-value="this.address.detail"
            label-form="Số nhà, tên đường"
            :borderMain="false"
        />
    </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import ModalSelectCityProvince from "../pages/select_loan/components/ModalSelectCityProvince.vue";
import BaseIcon from "./BaseIcon.vue";
import {mdiChevronDown} from "@mdi/js";

export default {
    name: 'Address',
    components: {BaseIcon, ModalSelectCityProvince, InputForm},
    props: {
        address: {
            type: Object,
            required: true
        },
        addressList: {
            type: Object,
            required: true,
            default: {
                province: Array,
                districts: Array,
                wards: Array,
            }
        }
    },
    data() {
        return {
            isShowModelProvince: false,
            isShowModelDistrict: false,
            isShowModelWards: false,
        }
    },
    computed: {
        address: {
            get() {
                return this.address;
            },
            set(value) {
                this.$emit('update:address', value);
            }
        },
    },
    methods: {
        mdiChevronDown() {
            return mdiChevronDown
        },
        dataProvince() {
            return this.addressList.province;
        },
        dataDistrict() {
            return this.addressList?.districts?.filter(district => district.parent_code == this.address.province);
        },
        dataWards() {
            return this.addressList?.wards?.filter(ward => ward.parent_code == this.address.district);
        },
        handleClickCloseModelProvince() {
            this.isShowModelProvince = false;
        },
        handleOpenModalDistrict() {
            if (!this.address.province) return;
            this.isShowModelDistrict = true
        },
        handleOpenModalWard() {
            if (!this.address.district) return;
            this.isShowModelWards = true
        },
        getAddressLabel(data, code) {
            let address = data.find(item => item.code == code);
            if (address) {
                return `${address.prefix} ${address.name}`;
            }
        },
        handleClickShowModel(type) {
            if (type == 'province') {
                this.isShowModelProvince = true;
            }
            if (type == 'district') {
                this.isShowModelDistrict = true;
            }
            if (type == 'ward') {
                this.isShowModelWards = true;
            }
        }
    },
    watch: {
        'address.province'() {
            this.address.district = '';
            this.address.wards = '';
        },
        'address.district'() {
            this.address.wards = '';
        },
    },
}
</script>


