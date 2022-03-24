<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style>
  .logo{
    width: 180px;
    z-index: 99;
  }

.header{
  background: #00AAA2;
  padding: 15px 0 15px 0;
}
.toolbar{
  --background: #00AAA2;
}

</style>