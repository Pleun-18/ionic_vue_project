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
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

        <h1>Create Idea</h1>
        <ion-note>This Page needs to be searched with</ion-note>

    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'SearchTab',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
