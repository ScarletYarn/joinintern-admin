<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">用户信息</div>
          <v-list-item-title class="headline mb-1">{{
            userInfo.nickname
          }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ gender }} {{ userInfo.level }}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile color="gray" size="80">
          <v-img :src="userInfo.avatar" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> 用户ID：{{ userInfo.userId }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            用户学号：{{ userInfo.studentId }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> 专业：{{ major }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            是否通过验证：<span :class="validation_color">{{
              validation
            }}</span>
            &emsp;&emsp;
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  :disabled="userInfo.validation !== 'unvalidated'"
                  icon
                  text
                  small
                  v-on="on"
                >
                  <v-icon color="green">check</v-icon>
                </v-btn>
              </template>
              <span>通过审核</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  :disabled="userInfo.validation !== 'unvalidated'"
                  icon
                  text
                  small
                  v-on="on"
                >
                  <v-icon color="red">close</v-icon>
                </v-btn>
              </template>
              <span>拒绝审核</span>
            </v-tooltip>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> 用户身份：{{ identity }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            企业类型：{{ enterpriseType }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-spacer />
        <v-btn text @click="cardPrompt = true">查看校园卡照片</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="cardPrompt">
      <v-card>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-img :src="userInfo.cardPhotoPath" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { MyUser } from '@/models/MyUser'
import { UserService } from '@/service/UserService'
import { convertType } from '@/utils/enterpriseTypeConverter'
import { convertMajor } from '@/utils/majorConvertor'

@Component({
  mounted() {
    UserService.find(this.$route.params.userId).then((res: MyUser) => {
      this.$data.userInfo = res
    })
  }
})
export default class UserDetail extends Vue {
  cardPrompt = false

  userInfo: MyUser = new MyUser('', '', 0, 0, '', '', '', '正在获取', '', 0, '')

  get gender() {
    if (this.userInfo.gender == 'male') return '男'
    else if (this.userInfo.gender == 'female') return '女'
    else return '未知'
  }

  get validation() {
    if (this.userInfo.validation == 'validate') return '已通过'
    else if (this.userInfo.validation == 'unvalidated') return '等待验证'
    else return '验证拒绝'
  }

  get validation_color() {
    if (this.userInfo.validation == 'validate') return { 'green--text': true }
    else if (this.userInfo.validation == 'unvalidated')
      return { 'grey--text': true }
    else return { 'red--text': true }
  }

  get identity() {
    if (this.userInfo.userIdentity == 'admin') return '管理员'
    else if (this.userInfo.userIdentity == 'stu') return '普通用户'
    else return '身份错误'
  }

  get enterpriseType() {
    return convertType(this.userInfo.enterpriseTypeId)
  }

  get major() {
    return convertMajor(this.userInfo.major)
  }
}
</script>

<style scoped></style>
