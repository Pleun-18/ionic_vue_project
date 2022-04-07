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
      
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Real Estate Information</h1>
            <ion-note>Page for random information</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 Days </ion-badge>
        </ion-item>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Real Estate Information</h1>
            <ion-note>Page for random information</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 Days </ion-badge>
        </ion-item>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Real Estate Information</h1>
            <ion-note>Page for random information</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 Days </ion-badge>
        </ion-item>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Real Estate Information</h1>
            <ion-note>Page for random information</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 Days </ion-badge>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      

    </ion-content>
  </ion-page>
</template>

<script lang="js">
  import { defineComponent } from 'vue';
  import { add } from '@ionic/vue';

  export default defineComponent({
    name: 'AssignedReports', 
    setup() {
    return {
      add
    }
  }
  });

</script>

<style scoped>
</style>
