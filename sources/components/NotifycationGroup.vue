<script setup>
import {mdiAlert, mdiAlertCircle, mdiCheckCircle, mdiClose} from '@mdi/js';
import BaseIcon from './BaseIcon.vue';

</script>
<template>
    <NotificationGroup group="foo">
        <div class="fixed inset-0 z-50 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
            <div class="w-full max-w-sm">
            <Notification
                v-slot="{ notifications }"
                enter="transform ease-out duration-300 transition"
                enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                leave="transition ease-in duration-0"
                leave-from="opacity-100"
                leave-to="opacity-0"
                move="transition duration-0"
                move-delay="delay-0"
            >
                <div
                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-xl shadow-md py-1"
                :class="notification.title == 'success' ? 'bg-green-500':'bg-red-500'"
                v-for="notification in notifications.slice(notifications.length-1)"
                :key="notification.id"
                >
                    <div class="flex items-center justify-center w-12" >
                        <BaseIcon v-if="notification.title == 'success'" size="64" :path="mdiCheckCircle" class="text-white"></BaseIcon>
                        <BaseIcon v-else :path="mdiAlert " size="64" class="text-white"></BaseIcon>
                    </div>

                    <div class="px-4 py-2 -mx-3">
                        <div class="mx-3">
                        <span v-if="notification.title == 'success'" class="font-semibold text-green"> {{ notification.text }}</span>
                        <span v-else class="font-semibold bg-red-500 text-white"> {{ notification.text }} </span>
                        <!-- <p class="text-sm text-gray">{{ notification.text }}</p> -->
                        </div>
                    </div>
                    <div class="flex items-center justify-center" @click="close(notification.id)">
                        <BaseIcon :path="mdiClose " size="64" class="text-white"></BaseIcon>
                    </div>
                </div>
            </Notification>
            </div>
        </div>
    </NotificationGroup>
</template>
