const Mock = require('mockjs');

let mock_data = Mock.mock({
  "data|21-100": [{
    "name|+1": [
      "Hello",
      "Mock.js",
      "!"
    ],
    "date": Mock.mock('@date')
  }]
});

module.exports = ({ data }) => {
  let {
    pageNum,
    pageSize
  } = data;
  
  let arr = mock_data.data.slice((pageNum - 1) * pageSize, pageNum * pageSize) || [];
  let res = {
      data: arr,
      total: mock_data.data.length
  };
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(res);
    }, Math.random() * 2000);
  });
}
