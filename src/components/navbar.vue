<template>
  <navbar class="minibar" :style="newBarStyle">
      <slot name="left" v-if="leftButton !== ''">
        <navbar-item class="left-button" type="left" @click="leftButtonClicked">
          <image :src="leftButton" :style="leftStyle"></image>
        </navbar-item>
      </slot>
      <!-- <div class="left" >
        
      </div> -->
      <slot name="middle">
        <navbar-item class="middle" type="title">
          <text class="middle-title" :style="{ color: textColor }">{{title}}</text>
        </navbar-item>
      </slot>

      <navbar-item type="right" @click="rightButtonClicked">
        <slot name="right" >
        </slot>
      </navbar-item>

  </navbar>
</template>

<script>
  /**
   * 把minibar提取出来，统一管理吧
   * 安卓下用weex-ui minibar 存在点击延迟的bug，先不用了
   */
  const Navigator = weex.requireModule('navigator');

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: '#ffffff'
      },
      textColor: {
        type: String,
        default: '#292929'
      },
      leftButton: {
        type: String,
        default: 'root://assets/image/back.png'
      },
      leftStyle: {
        type: Object,
        default: ()=>({
          height: 36,
          width: 36
        })
      },
      rightButton: String,
      useDefaultReturn: {
        type: Boolean,
        default: true
      },
      barStyle: {
        type: Object,
        default: () => ({
          // borderBottomWidth: "1px",
          // borderBottomColor: "red",
        })
      }
    },
    computed: {
      newBarStyle () {
        const { backgroundColor, barStyle } = this;
        return {
          backgroundColor,
          ...barStyle
        }
      }
    },
    methods: {
      leftButtonClicked () {
        if (this.leftButton !== '' && this.useDefaultReturn) {
          Navigator.pop({}, e => {
          });
        }
        this.$emit('wxcMinibarLeftButtonClicked', {});
      },
      rightButtonClicked () {
        const hasRightContent = this.rightText || this.rightButton || (this.$slots && this.$slots.right);
        hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
      }
    }
  }
</script>

<style lang="less" scoped>
@height: 88px;
.minibar {
  width: 750px;
  height: @height;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.left,
.right  {
  width: 150px;
  height: @height;
}
.left {
  align-items: flex-start;
}
.right {
  align-items: flex-end;
}
.middle {
  align-items: center;
  justify-content: center;
}
.middle-title {
  font-size: 34px;
  color: #28292C;
  height: 36px;
  line-height: 34px;
  font-family: PingFangSC-Medium;
  text-transform: capitalize;
}
.left-button {
  height: @height;
  padding: 0 32px;
  justify-content: center;
}
</style>