/*
 * @Author: Dayao
 * @Date: 2020-02-11 11:20:48
 * @LastEditTime: 2020-03-10 17:17:42
 * @Description: 
 */
const picker = weex.requireModule('picker')
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// 准备翻译的语言环境信息
const messages = {
  en: require('./lang/en.json') ,
  "zh-cn": require('./lang/zh-cn.json'),
  km: require('./lang/km.json')
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: $Caches.getFreeze('lang','zh-cn'), // 设置地区
  fallbackLocale: 'zh-cn',
  silentFallbackWarn: true,
  messages, // 设置地区信息
})

// 以mixin的方式挂载到各个页面
Vue.mixin({
  i18n,
  data: () => ({
    i18n: {
      langs: [{
        text: '中文',
        value: 'zh-cn'
      }, {
        text: 'English',
        value: 'en'
      }, {
        text: 'ខ្មែរ',
        value: 'km'
      }]
    }
  }),
  created() {
    $tools.$on('change_lang', data => {
      try{
        // 为啥突然会有this.$i18n为null的场景？？
        data && this.$i18n && (this.$i18n.locale = data, $Caches.setFreeze('lang', data));
      }catch(e){
        console.log(e.message)
      }
    })
  },
  methods: {
    // 广播更新语言，触发其他页面的语言更新
    i18nUpdateAppLang(lang){
      if(!lang) return false;
      $tools.$emit('change_lang', lang)
      // 不加这个当前页面没有更新
      this.$i18n.locale = lang
    },
    // 公用修改语言picker
    i18nChangeLang() {
      const langs = [];
      this.i18n.langs.forEach(lang=> {
        langs.push(lang.text)
      })
      const local = this.$i18n.locale;
      picker.pick({
        index: this.i18n.langs.findIndex(item=> item.value == local),
        items: langs,
        confirmTitle: this.$t('完成'),
        cancelTitle: this.$t('取消'),
      }, ret=> {
        if(ret.result == 'success') {
          this.i18nUpdateAppLang(this.i18n.langs[ret.data].value)
        }
      })
    }
  }
})