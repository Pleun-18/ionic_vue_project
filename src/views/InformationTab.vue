<template>
  <ion-page>

    <TopHeader />
    
    <ion-content :fullscreen="true">
    
      <h1>Real Estate Information</h1>
      <ion-note>Page for random information</ion-note>

    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';
import header from '/src/components/TopHeader'

export default defineComponent({
  name: 'InformationTab', 
  components: {
      'TopHeader': header,
      IonContent
  }
});
</script>
