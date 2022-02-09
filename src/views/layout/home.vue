<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        router
        mode='vertical'
        :default-active="curRouter"
        class="el-menu-vertical-demo"
        background-color="#1C2A39"
        text-color="#fff"
        active-text-color="#19B5FE">

        <el-menu-item index="/aoteman/saijia">
          <i class="el-icon-menu"></i>
          <span slot="title">赛迦</span>
        </el-menu-item>

        <el-menu-item index="/aoteman/aotezhiwang">
          <i class="el-icon-setting"></i>
          <span slot="title">奥特之王</span>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>最喜欢奥特曼</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/aoteman/aotelike/dijia">迪迦</el-menu-item>
            <el-menu-item index="/aoteman/aotelike/aidi">艾迪</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/aoteman/jieke">
          <i class="el-icon-setting"></i>
          <span slot="title">杰克</span>
        </el-menu-item>

      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  computed: {
    curRouter() {
      return this.$route.path;
    }
  }
}
</script>

<style lang='scss' scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-container {
    height: 100%;
  }

  .el-menu {
    height: 100%;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 100%;
  }
</style>