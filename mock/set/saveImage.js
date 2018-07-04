const fs = require('fs');
const path = require('path');
const base_path = path.join(__dirname, '../../data/img.json');

module.exports = ({data}) => {  
  console.log(data);
  return new Promise((resolve, reject) => {
    let dataStr = '';
    try{
      dataStr = JSON.stringify(data);
    }catch(e){
      reject({ success: false, msgDesc: '待设置基础数据有误' });
    }
    if(dataStr){
      fs.writeFile(base_path, dataStr, 'utf8', (err) => {
        if (err) {
          console.log(err)
          reject({ success: false, msgDesc: '基础数据设置失败' });
        } else {
          resolve({ success: true, msgDesc: '基础数据设置成功' });
        };
      }); 
    }
  });
}
