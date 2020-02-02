<template>
  <v-container fluid>
    <v-list three-line>
      <template v-for="(item, index) in users">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.videoTitle"
          @click="$router.push({ path: `/user/${item.userId}` })"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.nickname"></v-list-item-title>
            <v-list-item-subtitle>{{
              identity(item.userIdentity)
            }}</v-list-item-subtitle>
            <v-list-item-content>
              {{ item.level }} {{ gender(item.gender) }}
              {{ enterpriseConvert(item.enterpriseTypeId) }}
            </v-list-item-content>
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  :disabled="item.validation !== 'unvalidated'"
                  ><v-icon color="green">check</v-icon></v-btn
                >
              </template>
              <span>通过审核</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  :disabled="item.validation !== 'unvalidated'"
                  ><v-icon color="red">close</v-icon></v-btn
                >
              </template>
              <span>拒绝审核</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    <v-snackbar v-model="popup" :timeout="1500" top>
      {{ popupText }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { UserService } from '@/service/UserService'
import { MyUser } from '@/models/MyUser'
import { convertType } from '@/utils/enterpriseTypeConverter'

@Component({
  mounted() {
    this.$data.users = []
    // @ts-ignore
    this.initParams()
    UserService.getAllUser()
      .then(res => {
        this.$data.users.push(...res)
      })
      .catch(() => {
        this.$data.popupText = '用户信息获取失败'
        this.$data.popup = true
      })
  }
})
export default class User extends Vue {
  users: MyUser[] = []

  popup: boolean = false

  popupText: string = ''

  initParams() {}

  enterpriseConvert(id: number) {
    return convertType(id)
  }

  gender(gen: string) {
    if (gen === 'male') return '男'
    else if (gen === 'female') return '女'
    else return '未知'
  }

  identity(i: string) {
    if (i === 'stu') return '学生'
    else if (i === 'admin') return '管理员'
    else return '未知'
  }
}
</script>

<style scoped></style>
