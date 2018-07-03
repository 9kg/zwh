const fs = require('fs');
const path = require('path');
const base_path = path.join(__dirname, '../../data/module.json');

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(base_path, 'utf8', (err, data) => {
      data = data || '[]';
      let dataObj = null;
      try{
        dataObj = JSON.parse(data)
      }catch(e){
        reject({ success: false, msgDesc: '模块数据有误' });
      }
      if (err) {
        console.log(err)
        reject({ success: false, msgDesc: '模块数据获取失败' });
      } else {
        resolve(dataObj);
      };
    });
  });
}
