<template>
  <ion-page>
    
    <TopHeader />

    <ion-content>
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
import { IonContent } from '@ionic/vue';
import header from '/src/components/TopHeader'

export default defineComponent({
  name: 'SearchTab',
  components: {
      'TopHeader': header,
      IonContent
  }
});
</script>
