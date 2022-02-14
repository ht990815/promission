<template>
  <div class='loginbox'>
    <el-row style="background:gray;padding:50px;border-radius:10px;">
      <el-row>
        <el-row>
          <span>账号：</span><el-input v-model='form.acc' style="width:200px;"></el-input>
        </el-row>
        <el-row>
          <span>密码：</span><el-input v-model='form.pwd' style="width:200px;" type="password"></el-input>
        </el-row>
      </el-row>
      <el-row>
        <el-button @click="Login">登录</el-button>
        <el-button type="primary">重置</el-button>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        acc: '',
        pwd: ''
      }
    }
  },
  methods: {
    Login() {
      this.$router.push('/aoteman/like/index');
    }
  }
}
</script>

<style lang='scss' scoped>
  body .loginbox {
    width: 100%;
    height: 100%;
    background-color: rgb(24, 23, 23);
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
 }
</style>