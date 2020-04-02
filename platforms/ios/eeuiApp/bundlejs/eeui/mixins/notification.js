const push = app.requireModule("aochuangPush");
import NotifyItemClick from '@/mixins/notify_item_click'
import api from '@/api'
import * as model from '@/model/message'

export default {
  mixins: [NotifyItemClick],
  created() {
    // 推送插件实例化
    if (push) {
      try {
        const token = push.getToken()
        // 获取设备token
        if(token) {
          $Caches.setFreeze('device_token', token)
        }

        this.getOpenNotification();
        
        /**
         * clickHandler主要用于页面跳转
         */
        push.setNotificationClickHandler(rs => {
          console.log(`ClickHandler回调：`);
          console.log(rs);
          this.notificationHandler(rs, 'click')
        });

        /**
         * receive回调主要用于更新通知列表和未读数量
         */
        push.setNotificationReceiveHandler( rs => {
          console.log(`ReceiveHandler回调：${typeof rs}`)
          console.log(rs);
          this.notificationHandler(rs, 'receive')
        })
      }catch(e) {
        console.log('push catch', e.message)
      }
    }
  },
  methods: {
    // 第一次打开的时候调起一下看有没有没处理的推送数据
    getOpenNotification() {
      const initPush = push.getOpenNotification();
      console.log('initPush')
      if(initPush && Object.keys(initPush).length) {
        this.notificationHandler(initPush, 'click')
      }
    },
    /**
     * 消息体处理函数
     * data: {
     *  extras: {
     *    id:0,
     *    time: "2020-03-27 12:23:05",
     *    type: 10
     *  },
     *  notification: {
     *    icon: 'appicon',
     *    title: 'xxxxx',
     *    body: 'xxxxx'
     *  }
     * }
     */
    async notificationHandler(data, handle = 'receive') {
      let rs;
      try{
        rs = toString.call(data) !== '[object Object]' ? JSON.parse(data) : data;

        if(toString.call(rs) !== '[object Object]') {
          throw new Error('')
        }
      }catch(e) {
        rs = {}
      }
      try {

        // 未登录时不做处理
        if ($tools.getToken()){
          const { id = '', type = ''} = rs
          if(!String(type).trim() || !String(id).trim()) return false;
          const detail = await this.getNotificationDetial(id)
          const message = model.getTypeById(type);
          message.display_message = detail

          // 接收要添加未读
          if(handle === 'receive') {
            message.new_nums++
          }
          model.updateTypeById(type, message)
          $tools.$emit('UPDATE_MESSAGE', message)

           // 点击要标记已读
          if(handle === 'click') {
            this.openNotificationPage(detail)
          }
        }
      }catch(e) {
        console.log('notificationHandler', e.message);
        
      }
      
    },
    // 获取消息内容 
    async getNotificationDetial(id) {
      try {
        const rs = await api.message.detail(id);
        if(rs.code == 0){
          return rs.data
        }
      }catch(e) {
        
      }
    },
    // 打开推送的页面
    openNotificationPage(detail) {
      this.notifyItemClick(detail)
    }
  }
}