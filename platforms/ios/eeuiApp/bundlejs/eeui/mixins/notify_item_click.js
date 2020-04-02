/**
 * 消息列表点击方法
 */
import qs from 'query-string'
import { jumpPage } from '@/lib/utils'
import api from '@/api'
import * as model from '@/model/message'

export default {
  methods: {
    async notifyItemClick(detail) {
      const item = detail;
      const token = $tools.getToken();
      let id;

      switch(item.message_type) {
        // 跳到审批单详情
        case 2:
        case 3:
        case 4:
          try {
            id = qs.parseUrl(item.url).query.record_id;
            jumpPage('approval/detail.js',{
              params: {
              item: {
                record_id: id
              }
            }
            })
          }catch(e){}
          break;
        // 跳到日程详情
        case 6:
          try {
            id = qs.parseUrl(item.url).query.schedule_id;
            jumpPage('schedule/add.js', {
              params: {
                action: 'detail',
                date: this.formatDate("m", item.create_time),
                item: {
                  id
                }
              }
            })
          }catch(e){
            this.$alert(e.message)
          }
          break;
        // 公文
        case 5:
          try {
            jumpPage('webview/index.js', {
              params: {
                url: item.url + '&sec_token=' + token,
                title: '公文',
              }
            })
          }catch(e){
            this.$alert(e.message)
          }
          break;

      }
      try {
        if(item.read_time) {
          //已读就不用发
          return false;
        }
        //已读处理
        item.read_time = 1;
        await api.message.messageRead(item.id)

        const type = model.getTypeById(app.config.params.type)
        type.new_nums--
        model.updateTypeById(app.config.params.type, type)

        $tools.$emit('UPDATE_MESSAGE', app.config.params.type);
      }catch(e){}
    }
  }
}