<template>
    <ion-header class="header">
        <ion-toolbar class="toolbar">
            <ion-title>
                <ion-img class="logo" src="./assets/logo_white.png" />
            </ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default defineComponent({
    name: 'TopHeader',
    components: { IonHeader, IonToolbar, IonTitle }
})
</script>

<style scoped>

</style>