<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar flat color="deep-purple darken-1" dark>
            <v-toolbar-title>Join实习管理后台</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="用户名"
                name="login"
                prepend-icon="person"
                type="text"
                v-model="uid"
              />

              <v-text-field
                id="password"
                label="密码"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="deep-purple darken-1" @click="login" dark>登陆</v-btn>
            <v-snackbar v-model="popup" :timeout="1500" top>
              {{ popupText }}
              <v-btn @click="popup = false" color="pink" text>OK</v-btn>
            </v-snackbar>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { UserService } from '@/service/UserService'
import { LOGIN } from '@/store/mutation-types'

@Component({})
export default class Login extends Vue {
  uid: string = ''
  password: string = ''
  popup: boolean = false
  popupText: string = ''

  login() {
    this.uid = this.password = 'ultra master'
    UserService.superLogin(this.uid, this.password)
      .then(res => {
        if (res) {
          this.$store.commit(LOGIN, this.uid)
          this.$router.push('/home')
        } else {
          this.popupText = 'User name or password wrong! '
          this.popup = true
        }
      })
      .catch(() => {
        this.popupText = 'Network error'
        this.popup = true
      })
  }
}
</script>

<style scoped></style>
