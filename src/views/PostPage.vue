<template>
  <v-container fluid>
    <v-list three-line>
      <template v-for="(item, index) in posts">
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
          @click="$router.push(`/post/${item.postId}`)"
        >
          <!--          <v-list-item-avatar>-->
          <!--            <v-img :src="item.videoPath"></v-img>-->
          <!--          </v-list-item-avatar>-->

          <v-list-item-content>
            <v-list-item-title v-html="item.postTitle"></v-list-item-title>
            <v-list-item-subtitle
              >开始时间：{{ item.startTime.split(' ')[0] }} 结束时间：{{
                item.endTime.split(' ')[0]
              }}
              实习地点：{{ item.location }}</v-list-item-subtitle
            >
            <v-list-item-content>
              {{ item.postContent }}
            </v-list-item-content>
          </v-list-item-content>

          <!--          <v-list-item-action>-->
          <!--            <v-tooltip bottom>-->
          <!--              <template v-slot:activator="{ on }">-->
          <!--                <v-btn icon v-on="on" @click="remove(item.postId)"><v-icon color="red">close</v-icon></v-btn>-->
          <!--              </template>-->
          <!--              <span>删除该贴</span>-->
          <!--            </v-tooltip>-->
          <!--          </v-list-item-action>-->
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
                label="实习名称"
                v-model="title"
                :rules="[v => !!v || '必须填写名称']"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="实习描述"
                v-model="content"
                :rules="[v => !!v || '必须填写描述']"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-clock"
                label="闵行距离"
                v-model="distancemh"
                :rules="[v => !!v || '必须填写距离']"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-clock"
                label="中北距离"
                v-model="distancezb"
                :rules="[v => !!v || '必须填写距离']"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-clock"
                label="实习时长"
                v-model="duration"
                :rules="[v => !!v || '必须填写时长']"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-clock"
                label="实习地点"
                v-model="location"
                :rules="[v => !!v || '必须填写地点']"
              />
            </v-col>
            <v-col cols="6">
              <v-menu
                v-model="startDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="startDate"
                    label="开始时间"
                    :rules="[v => !!v || '必须填写开始时间']"
                    persistent-hint
                    prepend-icon="event"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="startDate"
                  no-title
                  @input="startDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-menu
                v-model="endDateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="endDate"
                    label="结束时间"
                    :rules="[v => !!v || '必须填写结束时间']"
                    persistent-hint
                    prepend-icon="event"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="endDate"
                  no-title
                  @input="endDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <v-menu
                v-model="expirationMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="expiration"
                    label="过期时间"
                    :rules="[v => !!v || '必须填写过期时间']"
                    persistent-hint
                    prepend-icon="event"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="expiration"
                  no-title
                  @input="expirationMenu = false"
                ></v-date-picker>
              </v-menu>
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
import { PostService } from '@/service/PostService'
import { Post } from '@/models/Post'

@Component({
  mounted() {
    // @ts-ignore
    this.initParams()
    this.$data.posts = []

    PostService.getAllPost()
      .then(res => this.$data.posts.push(...res))
      .catch(() => {
        this.$data.popupText = '获取失败'
        this.$data.popup = true
      })
  }
})
export default class PostPage extends Vue {
  deleteDialogue: boolean = false

  posts: Post[] = []

  popup: boolean = false

  popupText: string = ''

  newDialogue: boolean = false

  title: string = ''

  content: string = ''

  startDate: string = ''

  startDateMenu: boolean = false

  endDate: string = ''

  endDateMenu: boolean = false

  expiration: string = ''

  expirationMenu: boolean = false

  duration: number | null = null

  distancemh: number | null = null

  distancezb: number | null = null

  location: string = ''

  upload() {
    if (!this.duration || !this.distancemh || !this.distancezb) {
      this.popupText = '请填写必填字段'
      this.popup = true
      return
    }
    PostService.createPost(
      this.title,
      this.duration,
      this.location,
      this.distancezb,
      this.distancemh,
      this.content,
      this.expiration + ' 14:00:00',
      this.$store.state.uid,
      this.startDate + ' 14:00:00',
      this.endDate + ' 14:00:00'
    )
      .then(res => {
        if (res) {
          this.popupText = '发布成功'
          this.popup = true
          this.initParams()
        } else {
          this.popupText = '发布失败'
          this.popup = true
        }
      })
      .catch(() => {
        this.popupText = '发布失败'
        this.popup = true
      })
  }

  remove(id: number) {
    if (!window.confirm('是否确认删除')) return
    PostService.delete(this.$store.state.uid, id)
      .then((res: boolean) => {
        if (res) {
          this.popupText = '删除成功'
          this.popup = true
        } else {
          this.popupText = '删除失败'
          this.popup = true
        }
      })
      .catch(() => {
        this.popupText = '删除失败'
        this.popup = true
      })
  }

  initParams() {
    this.$data.newDialogue = false

    this.$data.title = ''

    this.$data.content = ''

    this.$data.startDate = ''

    this.$data.startDateMenu = false

    this.$data.endDate = ''

    this.$data.endDateMenu = false

    this.$data.expiration = ''

    this.$data.expirationMenu = false

    this.$data.duration = null

    this.$data.distancemh = null

    this.$data.distancezb = null

    this.$data.location = ''

    this.$data.deleteDialogue = false
  }
}
</script>

<style scoped></style>
