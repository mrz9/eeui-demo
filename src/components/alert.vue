<template>
  <Mask ref="mask" :overlay-can-close="false">
    <div class="main" :class="[active ? 'active' : '', done ? 'done' : '']" @click="stopPropagation">
      <scroller class="scroller">
        <div class="content">
          <text class="content-text">{{ message }}</text>
        </div>
      </scroller>

      <div class="btn-group" v-if="buttons.length == 0">
        <div class="alert-btn" @click="cancelHandler" v-if="cancel">
          <text class="btn-text">{{ cancelText }}</text>
        </div>

        <div class="alert-btn ok-btn" :class="[cancel ? 'ok-btn' : '']" @click="okHandler"> 
          <text class="btn-text ok-text">{{ okText }}</text>
        </div>
      </div>
      <div class="btn-group-column" v-else>
        <div 
          v-for="(btn,idx) in buttons"
          :key="idx"
          class="alert-btn column-btn" @click="buttonsClick(idx)"> 
          <text class="btn-text ok-text">{{ btn }}</text>
        </div>
      </div>
    </div>
  </Mask>
</template>

<script>
  import Mask from '@/components/mask'
  export default {
    components: {
      Mask
    },
    props: {
      isTemplate: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: '我再想想',
      },
      okText: {
        type: String,
        default: '确定'
      },
      // 是否显示取消按钮
      cancel: {
        type: Boolean,
        default: true,
      },
      buttons: {
        type: Array,
        default: () => []
      }
    },
    data: () => ({
      active: false,
      done: false,
      isIOS: WXEnvironment.platform == 'iOS',
    }),
    mounted() {
      if(!this.isTemplate) {
        this.$refs.mask.show();

        // 安卓需要延时，不然动画会卡在某一帧
        if (this.isIOS) {
          this.$nextTick(()=>{
            this.active = true;
          })
        } else {
          setTimeout(()=>{
            this.active = true;
          },100)
        }
      }
    },
    methods: {
      // show(content, { cancelText = '我再想想', okText = '确定', cancelCallback = () => {}, okCallback = () => {}} = {}){
      //   this.content = content
      //   this.cancelText = cancelText
      //   this.okText = okText
      //   this.cancelCallback = cancelCallback;
      //   this.okCallback = okCallback;
      //   this.$refs.mask.show();
      //   this.done = false;
      //   this.$nextTick(()=>{
      //     this.active = true;
      //   })
      // },
      stopPropagation(e) {
        e.stopPropagation();
      },
      cancelHandler() {
        // typeof this.cancelCallback === 'function' && this.cancelCallback()
        this.$emit('cancel')
        this.close();
      },
      okHandler() {
        // typeof this.okCallback === 'function' && this.okCallback()
        this.$emit('ok');
        this.close();
      },
      close() {
        this.done = true;
        this.active = false;
        setTimeout(()=>{
          this.$refs.mask.close();
        },200)
      },
      buttonsClick(index){
        this.$emit('ok', index);
        this.close();
      }
    },
  }
</script>

<style lang="less" scoped>
.main {
  width: 600px;
  border-radius: 30px;
  background-color:#fff;
  opacity: 0;
  transform: scale(0.8);
  transition-duration: 0.3s;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
}
.active {
  opacity: 1;
  transform: scale(1);
}
.done {
  opacity: 0;
  transform: scale(1.1);
}
.scroller {
  max-height: 400px;
}
.content {
  padding: 50px 40px;
  align-items: center;
  justify-content: center ;
}
.content-text {
  font-size: 36px;
  text-align: center;
  color:#28292C;
}
.btn-group {
  height: 88px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #EBEDF1;
}
.alert-btn {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.btn-text {
  font-size: 32px;
  color: #9D9FA9;
}
.ok-btn {
  border-left-width: 1px;
  border-left-color: #EBEDF1;
}
.ok-text {
  color: #03A8F1;
}

.btn-group-column {
  flex-direction: column;
}

.column-btn {
  height: 88px;
  border-top-width: 1px;
  border-top-color: #EBEDF1;
}
</style>