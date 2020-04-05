<template>
  <Layout ref="layout" class="app-page">
    <NavBar title="首页" leftButton="" />
    <scroller class="list">
      <div class="info">
        <div v-for="(item,key) in version" :key="key">
          <text class="text-normal">{{key}}: {{item}}</text>
        </div>
      </div>

      <button class="btn btn-primary btn-radius" :eeui="{text: '检查热更新'}" @click="checkUpdate"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: '录音'}" @click="go('recorder/index.js')"></button>
      <button class="btn btn-primary btn-radius" :eeui="{text: 'lottie'}" @click="go('lottie/index.js')"></button>
    </scroller>
  </Layout>
</template>

<script>
import Layout from "@/mixins/layout";
import NavBar from "@/components/navbar";
import { jumpPage } from "@/lib/utils";

export default {
  mixins: [Layout],
  components: {
    NavBar
  },
  data: () => ({
    version: {
      version: eeui.getVersion(),
      versionName: eeui.getVersionName(),
      localVersion: eeui.getLocalVersion(),
      localVersionName: eeui.getLocalVersionName(),
      sdkVersionCode: eeui.getSDKVersionCode(),
      sdkVersionName: eeui.getSDKVersionName(),
      updateId: eeui.getUpdateId()
    }
  }),
  created() {},
  methods: {
    changeLange() {
      this.i18nChangeLang();
    },
    checkUpdate() {
      const rs = eeui.checkUpdate();
      console.log(rs);
    },
    go(url) {
      jumpPage(url);
    }
  }
};
</script>

<style lang="less">
.list {
  flex: 1;
  padding: 30px;
}

.input {
  border-width: 1px;
  border-color: #d7d7d7;
  margin: 0 30px;
  width: 690px;
  height: 88px;
}
.input:focus {
  box-shadow: 0 0 20px 0 red;
}
.textarea {
  border-width: 1px;
  border-color: #d7d7d7;
  margin: 0 30px;
  width: 690px;
  height: 300px;
}
.btn {
  margin-top: 20px;
}
</style>