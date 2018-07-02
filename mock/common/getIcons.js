const fs = require('fs');
const path = require('path');
const fa_icon_path = path.join(__dirname, '../../assets/scss/vendor/font/_icons.scss');
const el_icon_path = path.join(__dirname, '../../assets/scss/vendor/element/icon.scss');
const getIcons = (iconPath, dealItemFn) => {
  return new Promise((resolve, reject) => {
    fs.readFile(iconPath, 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        reject({ success: false, msgCode: '图标获取失败' });
      } else {
        let startIdx = data.indexOf('//config_start\n') + '//config_start\n'.length;
        let icons = data.slice(startIdx, data.indexOf('\n//config_end')).split('\n').map((item) => {
          let icon = item.slice(1, item.indexOf(':before'));
          return dealItemFn ? dealItemFn(icon) : icon;
        });
        resolve(icons);
      };
    });
  });
}
const fa_icons = getIcons(fa_icon_path, item => item.replace('#{$fa-css-prefix}', 'my-icon'));
const el_icons = getIcons(el_icon_path);
module.exports = ({ type }) => {
  if(type === 'fa'){
    return fa_icons;
  }else if(type === 'el'){
    return el_icons;
  }else{
    return new Promise((resolve, reject) => {
      Promise.all([fa_icons, el_icons]).then((icons) => {
        if(icons.length === 2){
          resolve({
            'fa': icons[0],
            'el': icons[1]
          })
        }else{
          reject(icons);
        }
      });
    });
  }
}
