<template>
  <v-container fluid>
    <v-list three-line>
      <template v-for="(item, index) in videos">
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

        <v-list-item v-else :key="item.videoTitle" @click="$router.push({ path: `/video/${item.videoId}` })">
<!--          <v-list-item-avatar>-->
<!--            <v-img :src="item.videoPath"></v-img>-->
<!--          </v-list-item-avatar>-->

          <v-list-item-content>
            <v-list-item-title v-html="item.videoTitle"></v-list-item-title>
            <v-list-item-subtitle
              >发布时间：{{ item.postDate }}</v-list-item-subtitle
            >
            <v-list-item-content>
              {{ item.videoDescription }}
            </v-list-item-content>
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  @click="pass(item, true)"
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
                  @click="pass(item, false)"
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
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="newDialogue = !newDialogue"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="newDialogue" width="800px">
      <v-card>
        <v-card-title class="deep-purple darken-1" style="color:white">
          发布视频
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-mail"
                label="视频名称"
                v-model="title"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-text"
                label="视频描述"
                v-model="description"
              />
            </v-col>
            <v-col cols="12">
              <v-file-input
                prepend-icon="mdi-text"
                label="上传视频"
                v-model="file"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn text color="pink" @click="newDialogue = false">取消</v-btn>
          <v-btn text @click="upload">发布</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="popup" :timeout="1500" top>
      {{ popupText }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { VideoService } from '@/service/VideoService'
import { Video } from '@/models/Video'

@Component({
  mounted() {
    this.$data.videos = []
    this.$data.newDialogue = false
    // @ts-ignore
    this.initParams()

    VideoService.getAllVideos()
      .then((res: Video[]) => {
        this.$data.videos.push(...res)
      })
      .catch(() => {
        this.$data.popupText = '获取视频错误'
        this.$data.popup = true
      })
  }
})
export default class VideoPage extends Vue {
  newDialogue: boolean = false

  videos = []

  title: string = ''

  description: string = ''

  file: File | null = null

  popup: boolean = false

  popupText: string = ''

  upload() {
    this.newDialogue = false

    if (!this.file) {
      this.popupText = '请选择文件'
      this.popup = true
      return
    }

    VideoService.uploadVideo(
      this.file,
      this.title,
      this.description,
      this.$store.state.uid
    )
      .then(() => {
        this.popupText = '上传成功'
        this.popup = true
        this.initParams()
      })
      .catch(() => {
        this.popupText = '上传失败'
        this.popup = true
      })
  }

  pass(video: Video, pass: boolean) {
    VideoService.validateVideo(this.$store.state.uid, video.videoId, pass)
      .then((res: boolean) => {
        if (res) {
          this.popupText = '审核成功'
          this.popup = true
          if (pass) video.validation = 'validate'
          else video.validation = 'reject'
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

  initParams() {
    this.newDialogue = false

    this.title = ''

    this.description = ''

    this.file = null
  }
}
</script>

<style scoped></style>
