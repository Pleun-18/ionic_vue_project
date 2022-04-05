<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar class="toolbar">
        <ion-title>
              <ion-img class="logo" src="./assets/logo_white.png" />
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/TaskPage/ExploreContainer.vue';

export default  defineComponent({
  name: 'TaskTab',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
})
</script>