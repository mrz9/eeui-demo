<!--
添加页面脚手架，所有页面继承改页面组件，
页面封装 alert 等全局交互组件
-->
<template>
  <div ref="root" class="layout-page app-page" :style="statusBarStyle">
    <div class="status-bar-box" v-if="safeTop" :style="{height: statusBarHeight + 'px', backgroundColor:statusBarColor}"></div>

    <slot></slot>
    <!--
      如果这里不挂载Alert，下面的alert会报错
      同理mask也是，因为alert已经有mask组件，所以不再需要手动挂载mask
    -->
    <Alert :isTemplate="true"/>

  </div>
</template>

<script>
  import Mask from '@/components/mask'
  import Alert from '@/components/alert'
  
  import i18n from "@/i18n";

  export default {
    props:{
      statusBarColor:{
        type: String,
        default: '#ffffff',
      },
      // 是否需要添加状态栏高度padding
      safeTop: {
        type: Boolean,
        default: true,
      },
      // 是否需要为iphonex(xs等)底部设置安全距离
      safeBottom: {
        type: Boolean,
        default: false,
      }
    },
    components: {
      Alert
    },
    data: ()=>({
      statusBarHeight: eeui.getStatusBarHeightPx(),
      isIPhoneXType: eeui.isIPhoneXType(),
    }),
    computed: {
      statusBarStyle(){
        const style = {}

        if(this.safeTop) {
          style.paddingTop = this.statusBarHeight
        }

        if(this.safeBottom && this.isIPhoneXType){
          style.paddingBottom = 34
        }

        return style
      }
    },
    methods: {
      alert(config) {
        return new Promise((resolve, reject)=>{
          // 如果消息内容为空或者为ajax取消的错误，不需要弹窗提示
          if(!String(config).trim() || config === 'AJAX_CANCAL'){
            reject();
          } else {
            let message, okText, cancelText, cancel = true, buttons = [];
            const mountEl = weex.document.createElement('div')

            if(toString.call(config) === '[object String]'){
              message = config;
            }else if(toString.call(config) === '[object Object]'){
              message = config.message;
              cancel = config.cancel === false ? false : true;
              okText = config.okText;
              cancelText = config.cancelText;
              buttons = config.buttons
            }else{
              throw new TypeError('传入类型错误')
            }

            const AlertFactory = Vue.extend(Alert);
            const instance = new AlertFactory({
              el: mountEl,
              propsData: {
                message,
                okText,
                cancelText,
                cancel,
                buttons
              }
            });
            instance.$on('cancel',(e) => {
              reject();
              setTimeout(()=>{
                weex.document.body.removeChild(instance.$el)
              }, 300)
            })
            instance.$on('ok', rs  =>{
              resolve(rs);
              setTimeout(()=>{
                weex.document.body.removeChild(instance.$el)
              }, 300)
            });

            weex.document.body.appendChild(instance.$el)
          }
        })
      },
      $mask() {
        const MaskFactory = Vue.extend(Mask);
        const instance = new MaskFactory({
          el: weex.document.createElement('div')
        });
        weex.document.body.appendChild(instance.$el)
        instance.show();
      }
    }
  }
</script>

<style lang="less" scoped>
.status-bar-box {
  position:absolute;
  top:0;
  left:0;
  right: 0;
}
.page-main {
  flex: 1;
}
.debug-box {
  position:fixed;
  bottom:0;
  right:0;
  background-color: rgba(0,0,0, .3);
}
.debug-box-txt {
  color:#333;
  font-size: 28px;
}
</style>