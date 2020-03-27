<template>
  <div class="container">
    <div class="main" :style="{width: toggle == true ? '75%' : '100%'}">
      <div class="header1">
        <div class="infoShow">
          <div class="avatar">
            <img :src="avatarURL" />
          </div>
          <div class="textInfo-h">
            <strong>{{roomData.name}}</strong>
            <span>{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</span>
          </div>
        </div>
        <div class="headerSet">
          <img src="../assets/image/icon_search.png" @click="searchBtn" />
          <img src="../assets/image/icon_addperson.png" @click="invite" />
          <img src="../assets/image/icon_more.png" @click="infoSet" />
          <div class="setMune" v-show="isSetInfo">
            <div class="dropdownMenu" @click="mute">
              <span>Mute</span>
              <i class="el-icon-s-operation"></i>
            </div>
            <div class="dropdownMenu" @click="Delete">
              <span>Delete</span>
              <i class="el-icon-delete"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="body" @click="isSetInfo=false">
        <div
          class="searchPane"
          v-show="isSearching"
          :style="{width: toggle == true ? 'calc(75% - 58px)' : 'calc(100% - 75px)'}"
        >
          <input class="searchInput" v-model="searchText" />
        </div>
        <div class="chatSpace">
          <div class="myChat">
            <div class="avatar">
              <img src="../assets/image/logo.png" />
            </div>
            <div class="chatText">
              <strong>{{roomData.name +"dsaghtrytjhgfdsfgggggggggg"}}</strong>
              <span>{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</span>
            </div>
          </div>
          <div class="otherChat">
            <div class="chatText">
              <strong>{{roomData.name +"dsaghtrytjhgfdsfgggggggggg"}}</strong>
              <span>{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</span>
            </div>
            <div class="avatar">
              <img src="../assets/image/logo.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
    <div class="Raside" :style="{width: toggle == true ? '25%' : '0px'}" v-show="toggle">
      <div class="aside-header">
        <i class="el-icon-arrow-right" @click="closeAside"></i>
      </div>
      <div class="aside-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: false,
      isSetInfo: false,
      isSearching: false,
      avatarURL: require('../assets/image/vue.png'),
      myText: ' ',
      searchText: 'Search this chat',
      roomData: {
        name: 'mennan',
        memberNum: 15,
        info: 'mennannvzhuang'
      },
      userData: {
        name: 'zhangsan'
      }
    }
  },
  methods: {
    infoSet () {
      this.isSetInfo = !this.isSetInfo
    },
    searchBtn () {
      this.isSearching = !this.isSearching
    },
    invite () {
      this.toggle = true
    },
    mute () {
      this.toggle = true
      this.isSetInfo = false
    },
    Delete () {
      this.toggle = true
      this.isSetInfo = false
    },
    closeAside () {
      this.toggle = false
    },
    onInput(event) {

    }
  }
}
</script>

<style lang="less" scoped>
.tem {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.container {
  width: 100%;
  height: calc(100% - 10px);
  border: 2px solid balck;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.main {
  height: 100%;
  border: 2px solid #f5f6fa;
  .header1 {
    position: relative;
    height: 55px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.infoShow {
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid gray;
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }
}
.textInfo-h {
  margin-left: 5px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span {
    font-size: 11px;
    color: #b4b9bf;
  }
}
.headerSet {
  margin-right: 30px;
  img {
    width: 18px;
    height: 18px;
    padding: 0 15px;
    cursor: pointer;
  }
}
.setMune {
  display: none;
  width: 150px;
  height: 80px;
  background-color: #fff;
  border: 2px solid #f5f6fa;
  border-radius: 20px;
  z-index: 2020;
  position: absolute;
  top: 45px;
  .tem;
  flex-direction: column;
  .dropdownMenu {
    cursor: pointer;
    padding: 0 20px;
    width: 100%;
    height: 50%;
    .tem;
    justify-content: space-around;
  }
  :hover {
    color: #308fff;
  }
}
.body {
  width: 100%;
  height: calc(100% - 150px);
  border-top: 2px solid #f5f6fa;
}
.searchPane {
  position: absolute;
  height: 60px;
  // width: calc(100% - 75px);
  background-color: #fff;
  border-bottom: 1px solid #f5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    outline: none;
    border: 1px solid #f5f6fa;
    border-radius: 4px;
    width: 80%;
    height: 40px;
    // padding: 0 10px;
    background-color: #edeef6;
    color: #b6bac2;
  }
}
.chatSpace {
  height: 100%;
  width: 100%;
  // background-color: skyblue;
  position: relative;
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: flex-start;
}
.chatText {
  background-color: #f5f6fa;
}
.myChat {
  width: calc(45%);
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: 10px;
  .chatText {
    background-color: #f5f6fa;
    color:#8f909a;
    border-radius: 8px;
    margin-right: 10px;
    min-width: 100px;
    padding:8px 5px;
    text-align: left;
    overflow: hidden;
  }
}
.otherChat {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  right: 5px;
  .chatText {
    background-color: #0176ff;
    color:white;
    border-radius: 8px;
    margin-left: 10px;
    height: auto;
    min-width:100px;
    padding:8px 5px;
    text-align: right;
    overflow: visible;
  }
}
.footer {
  border-top: 3px solid #f5f6fa;
  height: 90px;
  margin: 0;
  padding: 0;
}
.Raside {
  height: 100%;
  border: 2px solid #f5f6fa;
  .aside-header {
    width: 100%;
    height: 55px;
    i {
      position: relative;
      top: 20px;
      left: 20px;
      cursor: pointer;
    }
  }
  .aside-body {
    width: 100%;
    height: calc(100% - 55px);
    border-top: 2px solid #f5f6fa;
  }
}
</style>
