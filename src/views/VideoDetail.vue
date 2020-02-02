<template>
  <v-container fluid>
    <v-card class="mx-auto">
      <v-row justify="space-between">
        <v-col cols="6">
          <video width="100%" controls="controls" :src="videoPath" />
        </v-col>
        <v-col cols="6">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                {{ video.videoTitle }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                发布者：
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span
                      style="cursor: pointer"
                      v-on="on"
                      @click="$router.push({ path: `/user/${video.posterId}` })"
                    >
                      {{ authorName }}
                    </span>
                  </template>
                  <span>点击查看作者</span>
                </v-tooltip>
              </v-list-item-title>
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
                      :disabled="video.validation !== 'unvalidated'"
                      icon
                      text
                      small
                      v-on="on"
                      @click="validate(true)"
                    >
                      <v-icon color="green">check</v-icon>
                    </v-btn>
                  </template>
                  <span>通过审核</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :disabled="video.validation !== 'unvalidated'"
                      icon
                      text
                      small
                      v-on="on"
                      @click="validate(false)"
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
              <v-list-item-title>
                审核时间：{{ validateDate }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-tooltip bottom v-if="video.validation !== 'unvalidated'">
                  <template v-slot:activator="{ on }">
                    <span style="cursor: pointer" v-on="on" @click="nav">
                      审核者：{{ validatorName }}
                    </span>
                  </template>
                  <span>点击查看审核者</span>
                </v-tooltip>
                <span v-else>审核者：尚未审核</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                发布者身份：{{ identity }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                发布日期：{{ video.postDate.split(' ')[0] }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ video.videoDescription }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Video } from '@/models/Video'
import { VideoService } from '@/service/VideoService'
import { UserService } from '@/service/UserService'

@Component({
  async mounted() {
    // @ts-ignore
    let v = await VideoService.query(this.$route.params.videoId)
    this.$data.video = v
    let info = await UserService.find(this.$data.video.posterId)
    this.$data.authorName = info.nickname
    if (info.userIdentity === 'stu') this.$data.identity = '学生'
    else if (info.userIdentity === 'admin') this.$data.identity = '管理员'
    else this.$data.identity = '未知'
    if (v.validation === 'unvalidated') {
      this.$data.video.validateDate = '尚未审核'
      this.$data.video.validatorId = '尚未审核'
      this.$data.validatorName = '尚未审核'
    } else {
      let ue = await UserService.query(v.validatorId)
      this.$data.validatorName = ue.nickname
      this.$data.validatorId = v.validatorId
    }
  }
})
export default class VideoDetail extends Vue {
  authorName = ''

  popup = false

  popupText = ''

  identity = '正在获取'

  validatorId = ''

  validatorName = ''

  get validation_color() {
    if (this.video.validation == 'validate') return { 'green--text': true }
    else if (this.video.validation == 'unvalidated')
      return { 'grey--text': true }
    else return { 'red--text': true }
  }

  get validation() {
    if (this.video.validation == 'validate') return '已通过'
    else if (this.video.validation == 'unvalidated') return '等待验证'
    else return '验证拒绝'
  }

  validate(pass: boolean) {
    let msg = ''
    if (pass) msg = '是否确认通过此视频'
    else msg = '是否确认拒绝此视频'
    if (!window.confirm(msg)) return
    VideoService.validateVideo(this.$store.state.uid, this.video.videoId, pass)
      .then((res: boolean) => {
        if (res) {
          this.popupText = '审核成功'
          this.popup = true
          if (pass) this.video.validation = 'validate'
          else this.video.validation = 'invalidate'
        } else {
          this.popupText = '审核失败'
          this.popup = true
        }
      })
      .catch(() => {
        this.popupText = '审核失败'
        this.popup = true
      })
  }

  video = new Video(0, '正在获取', '正在获取', '#', '', '', '', '', '')

  get validateDate() {
    let t = this.video.validateDate
    if (t === null || t === '') return '未审核'
    else return t.split(' ')[0]
  }

  nav() {
    if (this.video.validation !== 'unvalidated')
      this.$router.push({ path: `/user/${this.video.validatorId}` })
  }

  get videoPath() {
    if (this.video.videoPath === '' || this.video.videoPath === null) return '#'
      else if (/^http[s]?:\/\//.exec(this.video.videoPath) !== null) return this.video.videoPath
    else if (this.video.videoPath[0] !== '/') return '/' + this.video.videoPath
    else return this.video.videoPath
  }
}
</script>

<style scoped></style>
