<template>
  <div class="oa-loading" ref="mask" v-if="!done">
    <image class="oa-loading-image" ref="loading" src="root://assets/image/loading.png"></image>
  </div>
</template>

<script>
  const animation = weex.requireModule('animation')
  export default {
    data:()=>({
      playing: true,
      done: false,
    }),
    methods: {
      play(){
        try{
          this.done = false;
          this.playing = true;
          this.$nextTick(()=>{
            animation.transition(this.$refs.mask, {
              styles: {
                opacity: 1,
              },
              duration: 200, //ms
              needLayout:false,
              delay: 0 //ms
            }, () => {
              this.rotate(1);
            });
          })
  
        }catch(e){
          console.error(e.message);
        }
        
      },
      rotate(n){
          animation.transition(this.$refs.loading, {
            styles: {
              transform: `rotate(360deg);`,
              opacity: 1
            },
            duration: 800, //ms
            needLayout:false,
            delay: 0 //ms
            }, () => {
              // reset
            if(this.playing) {
              animation.transition(this.$refs.loading, {
                styles: {
                  transform: `rotate(0deg);`,
                },
                duration: 0, //ms
                needLayout:false,
                delay: 0 //ms
                }, () => {
                  // reset
                this.rotate();
              })
            }
          })
        
      },
      stop(){
        animation.transition(this.$refs.loading, {
          styles: {
            transform: `scale(0);`,
            opacity: 0
          },
          duration: 600, //ms
          needLayout:false,
          delay: 0 //ms
          }, () => {
            this.playing = false;
            // reset
            animation.transition(this.$refs.loading, {
              styles: {
                transform: `rotate(0deg);`,
              },
              duration: 0, //ms
              needLayout:false,
              delay: 0 //ms
              }, () => {
                // reset
            })
        })
        animation.transition(this.$refs.mask, {
          styles: {
            opacity: 0,
          },
          duration: 200, //ms
          needLayout:false,
          delay: 400 //ms
        }, () => {
          this.done = true;
        });
      }
    }
  }
</script>

<style lang="less" scoped>
.oa-loading {
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  opacity: 0;
  right: 0;
  align-items: center;
  justify-content: center;
}

.oa-loading-image {
  width: 48px;
  height: 48px;
  opacity: 0;
}

</style>