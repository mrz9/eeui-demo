<template>
  <Layout ref="layout" class="app-page">
    <NavBar title="录音" />
    <scroller class="list">
      <div class="info">
        <div>
          <text class="text-normal">path: {{path}}</text>
          <text class="text-normal">start: {{start}}</text>
          <text class="text-normal">playing: {{playing}}</text>
        </div>
        <div v-for="(item,key) in info" :key="key">
          <text class="text-normal">{{key}}: {{item}}</text>
        </div>
      </div>
      <button class="btn btn-primary btn-radius" :eeui="{text: '开始录音', disabled: start
      }" @click="startRecorder"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: '停止录音', disabled: !start
      }" @click="stopRecorder"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: '播放', disabled: !path
      }" @click="play"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: '获取录音信息', disabled: !path
      }" @click="getRecorderInfo"></button>

    </scroller>
  </Layout>
</template>

<script>
import Layout from "@/mixins/layout";
import NavBar from "@/components/navbar";
import { jumpPage } from "@/lib/utils";
const recorder = app.requireModule("eeui/recorder");
const audio = app.requireModule("eeui/audio");

export default {
  mixins: [Layout],
  components: {
    NavBar
  },
  data: () => ({
    path: '',
    start: false,
    playing: false,
    info: {}
  }),
  created() {},
  methods: {
    startRecorder() {
      recorder.start({
      }, () => {
          console.log('started')
          this.start = true;
      })
    },
    stopRecorder() {
      if(!this.start) return false;
      recorder.stop((ret) => {
        console.log(ret)
        this.path = ret.path
        this.start = false;
      })
    },
    play() {
      if(this.path) {
        audio.play(this.path)
        this.playing = true
        audio.setCallback((result) => {
          console.log(result)
        })
      }
    },
    getRecorderInfo() {
      if(!this.path) return false;
      audio.getDuration(this.path, result => {
        console.log(result);
        this.info = result
      })
    }
  }
};
</script>

<style lang="less">
.list {
  flex: 1;
  padding: 30px;
}
.btn {
  margin-top: 20px;
}
</style>