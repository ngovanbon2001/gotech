<template>
    <div class="w-full">
        <model-address
            v-model:value="address.province"
            :list-options="addressList.province"
            label="Thành phố/ Tỉnh"
        />
        <div class="w-full mt-3 flex flex-row items-center">
            <div class="flex flex-1 mr-3">
                <model-address
                    v-model:value="address.district"
                    :list-options="districts"
                    :isDisabled="!address.province>0"
                    label="Quận/ Huyện"
                />
            </div>
            <div class="flex flex-1">
                <model-address
                    v-model:value="address.wards"
                    :list-options="wards"
                    :isDisabled="!address.district > 0"
                    label="Phường/ Xã"
                />
            </div>
        </div>
        <InputForm
            v-model:model-value="address.detail"
            :input-value="address.detail"
            label-form="Số nhà, tên đường"
            :borderMain="false"
        />
    </div>
</template>

<script>
import ModelAddress from "./ModelAddress.vue";
import InputForm from "./InputForm.vue";

export default {
    components: {InputForm, ModelAddress},
    props: {
        addressList: {
            type: Object,
            required: true
        },
        address: {
            type: Object,
            required: true
        },
    },
    computed: {
        province() {
            return this.address.province
        },
        district() {
            return this.address.district
        },
        districts() {
            return this.addressList.districts.filter(item => item.parent_code == this.address.province)
        },
        wards() {
            return this.addressList.wards.filter(item => item.parent_code == this.address.district)
        },
    },
    watch: {
        province(){
            this.address.district = 0
            this.address.ward = 0
        },
        district: {
            handler() {
                this.address.ward = 0
            }
        }
    }
}
</script>
