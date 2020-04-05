<template>
  <Layout ref="layout" class="app-page">
    <NavBar title="Lottie" />
    <scroller class="list">
      <lottie
        ref="lottie"
        src="root://assets/lottie/demo1.json"
        loop="true"
        class="lottie"
        @stateChanged="stateChanged"
      ></lottie>
      <button class="btn btn-primary btn-radius" :eeui="{text: 'play'}" @click="play"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: 'pause'}" @click="pause"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: 'resume'}" @click="resume"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: 'stop'}" @click="stop"></button>
    </scroller>
  </Layout>
</template>

<script>
import Layout from "@/mixins/layout";
import NavBar from "@/components/navbar";

export default {
  mixins: [Layout],
  components: {
    NavBar
  },
  data: () => ({
    isPause: false
  }),
  created() {},
  methods: {
    play() {
      this.isPause = false;
      this.$refs.lottie.play();
    },
    pause() {
      this.isPause = true;
      this.$refs.lottie.pause();
    },
    resume() {
      this.isPause = false;
      this.$refs.lottie.resume();
    },
    stop() {
      this.isPause = false;
      this.$refs.lottie.stop();
    },
    stateChanged(res) {
      if (res.status === "loading") {
        eeui.toast("加载中...");
      } else if (res.status === "success") {
        eeui.toast("加载成功");
      } else if (res.status === "error") {
        eeui.toast("加载失败");
      }
    }
  }
};
</script>

<style lang="less">
.lottie {
  margin: 0 (750 - 370)/2px;
  width: 370px;
  height: 370px;
}
.list {
  flex: 1;
  padding: 30px;
}
.btn {
  margin-top: 20px;
}
</style>