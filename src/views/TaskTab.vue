<template>
  <ion-page>
    
    <TopHeader />
    
    <ion-content :fullscreen="true">
    
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col col-6 class="task_img">
            <router-link to="/tabs/assigned">
            <div>
              <ion-icon src="./assets/tasks.svg"></ion-icon>
              <p>Assigned reports</p>
            </div>
            </router-link>
          </ion-col>
          <ion-col col-6 class="task_img">
            <router-link to="/tabs/assigned">
            <div>
              <ion-icon src="../assets/completed.svg"></ion-icon>
              <p>Finnished Reports</p>
            </div>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col col-6 class="task_img">
            <router-link to="/tabs/assigned">
            <div>
              <ion-icon src="../assets/knowledge.svg"></ion-icon>
              <p>knowledge base</p>
            </div>
            </router-link>
          </ion-col>
          <ion-col col-6 class="task_img" v-on:click="greet">
            <router-link to="/tabs/assigned">
            <div>
              <ion-icon src="../assets/settings.svg"></ion-icon>
              <p>Settings</p>
            </div>
            </router-link>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';
import header from '/src/components/TopHeader'

export default  defineComponent({
  name: 'TaskTab',
  components: {
      'TopHeader': header,
      IonContent
  }
})
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