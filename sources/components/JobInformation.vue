<template>
    <div class="flex gap-3 mb-3">
        <SelectBox
            :options="jobList.jobs"
            v-model:model-value="jobInfo.job_code"
            key-item="code"
            lable-item="name"
            label-form="Nghề nghiệp"
            grow
            max-width="[50%]"
            :input-value="jobInfo.job_code"
        />
        <SelectBox
            :options="jobList.positions"
            v-model:model-value="jobInfo.position_code"
            key-item="code"
            lable-item="name"
            label-form="Chức vụ"
            grow
            max-width="[50%]"
            :input-value="jobInfo.position_code"/>
    </div>
    <InputForm
        v-model:model-value="this.jobInfo.workspace"
        :input-value="this.jobInfo.workspace"
        label-form="Đơn vị công tác"
        :border-main="false"/>
</template>
<script>
import InputForm from "./InputForm.vue";
import SelectBox from "./SelectBox.vue";

export default {
    name: 'JobInformation',
    components: {SelectBox, InputForm},
    props: {
        jobInfo: {
            type: Object,
            default: {
                job: Number,
                position: Number,
                workspace: '',
                job_code: String,
                position_code: String,
            },
            required: true,
        },
        jobList: {
            type: Object,
            default: {
                job: Object,
                position: Object,
            },
            required: true,
        }
    },
    computed: {
        jobInfo: {
            get() {
                return this.jobInfo;
            },
            set(value) {
                this.$emit('update:jobInfo', value);
            }
        }
    },
    created() {
        console.log('pppppp',this.jobInfo,this.jobList)
    }
}
</script>
