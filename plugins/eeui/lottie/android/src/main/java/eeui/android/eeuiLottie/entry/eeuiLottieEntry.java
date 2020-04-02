package eeui.android.eeuiLottie.entry;

import android.content.Context;

import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import app.eeui.framework.extend.annotation.ModuleEntry;
import eeui.android.eeuiLottie.component.WXLottie;

@ModuleEntry
public class eeuiLottieEntry {

    /**
     * APP启动会运行此函数方法
     * @param content Application
     */
    public void init(Context content) {
        try {
            WXSDKEngine.registerComponent("lottie", WXLottie.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
