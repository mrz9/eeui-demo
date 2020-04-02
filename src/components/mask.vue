<template>
  <div class="mask-popup" :class="[active ? 'popup-active' : '']" v-if="visibel" @click="overlayClickHandler">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      overlayCanClose: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      active: false,
      visibel: false,
    }),
    methods: {
      show() {
        this.visibel = true;
        this.$nextTick(()=>{
          this.active = true;
        })
      },
      overlayClickHandler() {
        if(!this.overlayCanClose) return false;
        this.close();
      },
      close() {
        this.active = false;
        setTimeout(()=>{
          this.visibel = false;
          this.$emit('close');
        },100)
      }
    }
  }
</script>

<style lang="less" scoped>
.mask-popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0, .3);
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
}
.popup-active {
  opacity: 1;
}
</style>