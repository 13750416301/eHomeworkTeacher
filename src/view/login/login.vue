<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <h1 class="title">STU学生作业系统</h1>
    <div class="center">
      <div class="logo">
        <img src="../../assets/images/stu.jpg" />
      </div>
      <div class="login-con">
        <!-- <Card icon="log-in" title="管理员登陆" :bordered="false">
          <div class="form-con">
            <login-form @on-success-valid="handleSubmit"></login-form>
            <p class="login-tip">忘记密码？</p>
          </div>
        </Card> -->
        <Tabs class="tabs" value="stuLogin" type="line" size="small">
          <TabPane label="学生登陆" name="stuLogin">
            <div class="form-con">
              <login-form @on-success-valid="handleSubmit"></login-form>
              <p class="login-tip">忘记密码？</p>
            </div>
          </TabPane>
          <TabPane label="教师登陆" name="teacherLogin">
            <div class="form-con">
              <login-form @on-success-valid="handleSubmit"></login-form>
              <p class="login-tip">忘记密码？</p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>

  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
