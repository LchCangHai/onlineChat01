<template>
  <div id="app">
    <el-container>
      <el-aside width="70px">
        <div class="logo">
          <img src="./assets/image/logo.png" />
        </div>
        <div class="functions">
          <i
            class="el-icon-edit-outline"
            :class="{active : activeItem === 1 ? true : false}"
            @click="toCreatRoom"
          ></i>
          <div>
            <i
              class="el-icon-chat-square"
              :class="{active : activeItem === 2 ? true : false}"
              @click="toChatSpace"
            ></i>
            <span class="chatInfo">.</span>
          </div>
          <i
            class="el-icon-user"
            :class="{active : activeItem == 3 ? true : false}"
            @click="toMyInfo"
          ></i>
        </div>
        <div class="setting">
          <i class="el-icon-setting"></i>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
function getUrl (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return 'null'
}
export default {
  name: 'app',
  roomID: getUrl('roomID')
}
</script>

<style lang="less" scoped>
.temp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.el-container {
  height: 100%;
  padding: 0;
}
.el-aside {
  height: 100%;
  background-color: white;
  border: 2px solid #f5f6fa;
  .temp;
}
.el-main {
  height: 100%;
  width: calc(100% - 76px);
  padding: 0;
}
.functions {
  height: 120px;
  .temp;
  > div {
    padding-top: 10px;
    .temp;
    span {
      position: relative;
      margin-top: 0;
      font-weight: 900;
      top: -10px;
    }
  }
}
.setting {
  height: 50px;
}
i[class^='el-icon'] {
  cursor: pointer;
}
.active {
  color: #308fff;
  font-weight: bolder;
}
</style>

<script>
  export default {
    data () {
      return {
        isCollapse: true,
        activeItem: 2,
      }
    },
    methods: {
      toCreatRoom () {
        this.activeItem = 1;
        this.$router.push({path:'/creatRoom'})
      },
      toChatSpace () {
        this.activeItem = 2;
        this.$router.push({path:'/chatSpace'})
      },
      toMyInfo () {
        this.activeItem = 3;
        this.$router.push({path:'/myInfo'})
      }
    }
  }
</script>
