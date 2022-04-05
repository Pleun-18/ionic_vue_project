<template>
  <ion-page>
    <ion-content>

      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Scheduled / Completed/ Knowledge Base / Settings</h1>
            <ion-note>Her will be 4 blocks for tools</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 Days </ion-badge>
        </ion-item>
      </ion-list>

      <ion-grid>
        <ion-row class="ion-align-items-center" v-on:click="greet">
          <ion-col col-6 class="task_img">
            <div>
              <ion-icon src="../assets/tasks.svg"></ion-icon>
              <p>Tasks</p>
            </div>
          </ion-col>
          <ion-col col-6 class="task_img" v-on:click="greet">
            <div>
              <ion-icon src="../assets/knowledge.svg"></ion-icon>
              <p>Knowledge</p>
            </div>
          </ion-col>
          </ion-row>
          <ion-row>
          <ion-col col-6 class="task_img" v-on:click="greet">
            <div>
              <ion-icon src="../assets/completed.svg"></ion-icon>
              <p>Completed</p>
            </div>
          </ion-col>
          <ion-col col-6 class="task_img" v-on:click="greet">
            <div>
              <ion-icon src="../assets/settings.svg"></ion-icon>
              <p>Settings</p>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      

    </ion-content>
  </ion-page>
</template>

<script lang="js">
  import { defineComponent } from 'vue';
  import { add } from 'ionicons/icons';

  export default defineComponent({
    name: 'ExploreContainer',
    setup() {
      return {
        add
      }
    },
    props: {
      name: String
    }, 
    methods: {
      greet() {
        alert('Hello you clicked on me')
      }
    }
  });
</script>

<style scoped>
  ion-icon{
    font-size: 100px !important;
    color: rgb(35, 35, 35);
  }

  .task_img{
    margin: 10px !important;
    cursor: pointer;
  }

  /* ion-grid{

  }
  ion-row{
    
  } */
  ion-col{
    box-shadow: 0px 2px 6px gray;
    border-radius: 5px;
    text-align: center;
  }
</style>
