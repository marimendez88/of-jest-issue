<template>
<ion-page>
  <ion-header>

<h1>This is the Second Test of lib using NWRL</h1>
<ThirdComponent />
  </ion-header>
</ion-page>
</template>

<script lang="ts">
import {ThirdComponent} from '../../../third-library-nx/src/index';
import { defineComponent } from 'vue';
import {IonPage, IonHeader, IonTitle} from '@ionic/vue';
export default defineComponent({
  name: 'SecondTest',
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    ThirdComponent,
  },
});
</script>
