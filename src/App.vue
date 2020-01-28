<template>
  <v-app id="inspire">
    <router-view />
    <v-footer app dark color="blue-grey lighten-3">
      <v-btn
        href="http://beian.miit.gov.cn"
        text
        x-small
        class="white--text body-2"
        >沪ICP备20002317号</v-btn
      >
      <v-spacer />
      <span class="white--text body-2">&copy; Join实习团队2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>
