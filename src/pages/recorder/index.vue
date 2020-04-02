<template>
  <Layout ref="layout" class="app-page">
    <NavBar title="录音" />
    <scroller class="list">
      
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
  }),
  created() {},
  methods: {
  
  }
};
</script>

<style lang="less">

</style>