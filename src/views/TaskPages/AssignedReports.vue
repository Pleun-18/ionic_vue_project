<template>
  <ion-page>

    <TopHeader />
    
    <ion-content :fullscreen="true">

       <ion-list>
        <ion-item v-for="inspection in filteredInspections" :key="inspection.id">
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <p> {{ inspection.date }} </p>
            <h1> {{ inspection.location }} </h1>
            <ion-note> {{ inspection.description }} {{ inspection.comment }} </ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> {{ inspection.type }} </ion-badge>
        </ion-item>
      </ion-list>

      <div> {{ test }} </div>

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
  import { IonContent } from '@ionic/vue';
  import header from '/src/components/TopHeader'
  // import axios from 'axios';
  // import json from '/src/data/FinishedInspections.json'

  export default defineComponent({
    name: 'AssignedReports', 
    setup() {
      return {
        add
      }
    },
    data(){
      return { 
        inspections: []
      }
    },
    components: {
      'TopHeader': header,
      IonContent
    },
    mounted() {
      fetch("http://localhost:3000/inspections")
          .then(response => response.json())
          .then(data => this.inspections = data)
          .catch(err => console.log(err.message))
    },
    computed: {
      filteredInspections() { 
        let inspections = this.inspections
        return inspections.sort(function (a, b) {
          let dateA = new Date(a.date), dateB = new Date(b.date)
          return dateA - dateB
        });
      }
    }
  });

</script>

<style scoped>
</style>
