<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">发帖详情</div>
          <v-list-item-title class="headline mb-1">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <span style="cursor: pointer;" v-on="on" :class="titleColor">{{
                  postInfo.postTitle
                }}</span>
              </template>
              <span>{{
                postInfo.completed ? '该实习已经结束' : '该实习尚未结束'
              }}</span>
            </v-tooltip>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <span
                  style="cursor: pointer"
                  v-on="on"
                  @click="$router.push({ path: `/user/${postInfo.authorId}` })"
                >
                  {{ authorName }}
                </span>
              </template>
              <span>点击查看作者</span>
            </v-tooltip>
            发布于
            {{ postInfo.postDate.split(' ')[0] }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            中北距离：{{ postInfo.distancezb }}km
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            闵行距离：{{ postInfo.distancemh }}km
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            实习地点：{{ postInfo.location }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            实习时间：{{ postInfo.startTime.split(' ')[0] }}至{{
              postInfo.endTime.split(' ')[0]
            }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            实习时长：{{ postInfo.duration }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            过期时间：{{ postInfo.expiration.split(' ')[0] }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            所需专业：
            <v-chip v-for="item of majors" :key="item.majorId">
              {{ item.majorName }}
            </v-chip>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-chip
              v-for="item of labels"
              :key="item.labelId"
              color="primary"
              >{{ item.labelContent }}</v-chip
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            {{ postInfo.postContent }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          v-if="!postInfo.completed"
          @click="complete(postInfo.postId)"
          >完成该实习</v-btn
        >
        <v-btn text v-else disabled>该实习已完成</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="popup" :timeout="1500" top>
      {{ popupText }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PostService } from '@/service/PostService'
import { Post } from '@/models/Post'
import { UserService } from '@/service/UserService'
import { Label } from '@/models/Label'
import { Major } from '@/models/Major'

@Component({
  async mounted() {
    this.$data.postInfo = await PostService.query(
      <number>(<unknown>this.$route.params.postId)
    )
    this.$data.authorName = (
      await UserService.query(this.$data.postInfo.authorId)
    ).nickname
    this.$data.labels = await PostService.getLabels(
      <any>this.$route.params.postId
    )
    this.$data.majors = await PostService.getMajors(
      <any>this.$route.params.postId
    )
  }
})
export default class PostDetail extends Vue {
  popup: boolean = false

  popupText: string = ''

  public authorName = '正在获取中'

  get titleColor() {
    if (this.postInfo.completed) return { 'red--text': true }
    else return { 'green--text': true }
  }

  postInfo: Post = new Post(
    0,
    '正在获取',
    0,
    '',
    0,
    0,
    '',
    false,
    '',
    '',
    '',
    '',
    ''
  )

  labels: Label[] = []

  majors: Major[] = []

  complete(id: number) {
    if (!window.confirm('确认完成此实习？')) return
    PostService.completePost(id)
      .then((res: boolean) => {
        if (res) {
          this.postInfo.completed = true
          this.popupText = '修改成功'
          this.popup = true
        } else {
          this.popupText = '修改失败'
          this.popup = true
        }
      })
      .catch(() => {
        this.popupText = '修改失败'
        this.popup = true
      })
  }
}
</script>

<style scoped></style>
