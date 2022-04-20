<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar class="toolbar">
        <ion-title>
              <ion-img class="logo" src="./assets/logo_white.png" />
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <TopMenu />
    
    <ion-content :fullscreen="true">

       <ion-list>
        <ion-item v-for="inspection in inspections" :key="inspection.id">
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1> {{ inspection.location }} </h1>
            <ion-note> {{ inspection.description }} {{ inspection.comment }} </ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> {{ inspection.type }} </ion-badge>
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
  import json from '/src/data/FinishedInspections.json'

  export default defineComponent({
    name: 'AssignedReports', 
    setup() {
      return {
        add
      }
    },
    data(){
      return {
        inspections: json
      }
    }
  });

</script>

<style scoped>
</style>
