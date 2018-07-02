import VueCookies from 'vue-cookies'
import { Notification } from 'element-ui';

function getCookie(cookies, key) {
  if(cookies){
    return decodeURIComponent(cookies.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }
}

export default function ({ $axios, redirect }) {

  $axios.onRequest(config => {
    // mock开头走本地模拟数据
    if (config.url.indexOf('mock') === 0) {
      let host = `localhost:${process.env.PORT || 5211}`;
      if(process.browser){
        host = location.host;
      }
      config.baseURL = `http://${host}/`;
    }
    // Content-Type
    // config.headers['Content-Type'] = 'text/plain; charset=UTF-8';
    // 注入token
    if(config.data && config.data.token === false){
      delete config.data.token;
    }else{
      let token = process.server ? getCookie(config.headers.common.cookie, 'token') : VueCookies.get('token');
      config.data = Object.assign({token: token}, config.data);
    }
  });

  $axios.onResponse(config => {
    let resp = config.data;

    // 后端响应数据处理
    if(resp.success === false){
      config.data = undefined;
    }else if(resp.success === true){
      config.data = resp.response || '';
    }
    // 不清楚后台接口的规范,以下逻辑是根据现有接口推测的
    if((resp.success === true && resp.msgDesc && config.data === '') || resp.success === false){
      Notification[resp.success ? 'success' : 'error']({title: resp.msgDesc, showClose: false});
    }
  });

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
