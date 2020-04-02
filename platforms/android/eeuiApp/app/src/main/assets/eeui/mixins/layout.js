import Layout from '@/components/layout'

export default {
  components: {
    Layout
  },
  methods: {
    $alert(config) {
      let params = {};
        if(toString.call(config) === '[object String]'){
          params.message = config
        } else {
          params = {...config}
        }
      return this.$root.$refs.layout.alert({...params, cancel: false})
    },
    $confirm(config) {
      return this.$root.$refs.layout.alert(config)
    }
  }
}