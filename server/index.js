const express = require('express');
const {
  Nuxt,
  Builder
} = require('nuxt');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
// const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const path = require('path');
const isDev = !(process.env.NODE_ENV === 'production');

// Import Nuxt.js options
let config = require('../nuxt.config.js')
let host = config.env.HOST;
let port = config.env.PORT;

// req.body解析
app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.text({limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

// cookie解析
app.use(cookieParser());
// favicon应用
// app.use(favicon(path.join(__dirname, '../static/favicon.ico')));
// 端口设置
app.set('port', port)


if (!isDev) {
  // 生产环境增加gzip压缩
  app.use(compression());
}

// 老项目兼容
// require('../_old_hrssc/app')(app);

// app.use(require('./auth'));
app.use('/upload', require('./upload'));

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // 本地模拟数据跨域响应投设置及路由配置
  app.all('/mock/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  app.use('/mock', require('./apiRoutes'));

  // Build only in dev mode
  if (isDev) {
    const builder = new Builder(nuxt)
    await builder.build()
    // 默认打开浏览器访问首页地址
    require('child_process').exec('opener http://localhost:5211');
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log(`Server listening on http://${host}:${port}`) // eslint-disable-line no-console

}
start()
