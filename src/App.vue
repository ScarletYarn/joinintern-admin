<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped v-if="loginState">
      <v-list dense>
        <v-list-item-group v-model="activeIndex">
          <v-list-item @click="$router.push({ name: 'video' })">
            <v-list-item-action>
              <v-icon>mdi-book-search</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>审核视频</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$router.push({ name: 'post' })">
            <v-list-item-action>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>查看发贴</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$router.push({ name: 'user' })">
            <v-list-item-action>
              <v-icon>mdi-checkbox-multiple-marked-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>审核用户</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$router.push({ name: 'statistic' })">
            <v-list-item-action>
              <v-icon>mdi-checkbox-multiple-marked-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>统计信息</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!--          <v-list-item @click="$router.push({ name: 'home' })">-->
          <!--            <v-list-item-action>-->
          <!--              <v-icon>mdi-dots-horizontal-circle</v-icon>-->
          <!--            </v-list-item-action>-->
          <!--            <v-list-item-content>-->
          <!--              <v-list-item-title>关于优学课</v-list-item-title>-->
          <!--            </v-list-item-content>-->
          <!--          </v-list-item>-->
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-dialog width="300" v-model="logoutDialogue">
            <template v-slot:activator="{ on }">
              <v-btn block v-on="on">注销</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline" primary-title>
                提示
              </v-card-title>

              <v-card-text>确定要退出吗？</v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" text @click="logoutDialogue = false">
                  取消
                </v-btn>
                <v-btn color="primary" text @click="logout">
                  确认
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="deep-purple darken-1" v-if="loginState">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="color:white" />
      <v-toolbar-title style="color:white">Join实习</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
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
import { LOGOUT } from '@/store/mutation-types'
import { initMajor } from '@/utils/majorConvertor'
import { MajorService } from '@/service/MajorService'
import { Major } from '@/models/Major'
import { EnterpriseTypeService } from '@/service/EnterpriseTypeService'
import { EnterpriseType } from '@/models/EnterpriseType'
import { initType } from '@/utils/enterpriseTypeConverter'

@Component({
  mounted() {
    this.$data.activeIndex = 0
    this.$data.logoutDialogue = false
  },
  created() {
    MajorService.getAllMajor().then((res: Major[]) => initMajor(res))
    EnterpriseTypeService.getAllType().then((res: EnterpriseType[]) =>
      initType(res)
    )
  }
})
export default class App extends Vue {
  activeIndex: number = 0

  logoutDialogue: boolean = false

  drawer: boolean = true

  get loginState(): boolean {
    return this.$store.state.uid !== null
  }

  logout() {
    this.$store.commit(LOGOUT)
    this.$router.push({ name: 'default' })
    this.logoutDialogue = false
    this.activeIndex = 0
    this.drawer = true
  }
}
</script>
