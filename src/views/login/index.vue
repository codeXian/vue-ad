<template>
  <div class="login-container">
    <div class="login-inner">
      <el-container>
        <el-header>
          <div class="header">
            <div class="title">
              admin
            </div>
          </div>
        </el-header>
        <el-main>
          <el-form :model="loginForm"
                   class="login-form"
                   :rules="loginRules"
                   ref="loginForm">
            <el-form-item prop="username">
              <span class="icon-container">
                <svg-icon icon-class="user"></svg-icon>
              </span>
              <el-input v-model="loginForm.username"
                        placeholder="username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span class="icon-container">
                <svg-icon icon-class="password"></svg-icon>
              </span>
              <el-input v-model="loginForm.password"
                        :type="passwordType"
                        placeholder="password"></el-input>
              <span class="icon-container icon-show-pointer"
                    @click="changePassWordType">
                <svg-icon icon-class="eye"></svg-icon>
              </span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click.native.prevent="handleLogin"
                         :loading="loading">Sign in</el-button>
            </el-form-item>
            <el-form-item style="border:none; background: transparent">
              <div class="footer">
                <span class="user">username: admin</span>
                <span class="password">password: admin</span>
              </div>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { isVaildUsername } from '@/utils/validate'
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isVaildUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      passwordType: 'password',
      loading: false,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      }
    }
  },
  methods: {
    changePassWordType () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = false
          this.$store
            .dispatch('Login', this.loginForm)
            .then(() => {
              this.loading = true
              this.$router.push({ path: '/' })
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  .login-inner {
    margin-top: 200px;
    .header {
      font-size: 26px;
      line-height: 60px;
      color: #eee;
      font-weight: bolder;
      .title {
        width: 320px;
        margin: 0 auto;
        text-align: center;
      }
    }
    .login-form {
      width: 400px;
      margin: 0 auto;
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.1);
        .icon-container {
          display: inline-block;
          padding: 6px 5px 6px 15px;
          vertical-align: middle;
          color: #889aa4;
          &.icon-show-pointer {
            cursor: pointer;
          }
        }
        .el-input {
          width: 80%;
          input {
            background: transparent;
            border-color: transparent;
            color: #fff;
          }
        }
        .el-button {
          width: 100%;
        }
        .footer {
          color: #fff;
        }
      }
    }
  }
}
</style>
