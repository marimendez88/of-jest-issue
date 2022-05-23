<template>
<ion-page>
  <ion-header>

<h3>External 3 Library</h3>
  </ion-header>
</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {IonPage, IonHeader, IonTitle} from '@ionic/vue';
export default defineComponent({
  name: 'ThirdComponent',
  components: {
    IonPage,
    IonHeader,
    IonTitle,
  },
});
</script>
