<template>
<ion-page>
  <ion-header>
    <ion-title>
<h1>This is the Second Test of lib using NWRL</h1>
    </ion-title>
  </ion-header>
</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {IonPage, IonHeader, IonTitle} from '@ionic/vue';
export default defineComponent({
  name: 'SecondTest',
  components: {
    IonPage,
    IonHeader,
    IonTitle,
  },
});
</script>
