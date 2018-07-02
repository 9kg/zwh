const Mock = require('mockjs');
module.exports = ({arg1, arg2}) => {
	return [{
        text: '基础设置',
        link: '/set/base',
        icon: 'my-icon-user'
    }, {
        text: '模块设置',
        link: '/set/module',
        icon: 'my-icon-group'
    // }, {
    //     text: '图标',
    //     link: '/common/icons',
    //     icon: 'my-icon-fonticons'
    // }, {
    //     text: '其它demo',
    //     icon: 'el-icon-more',
    //     link: '/demo',
    //     children: [{
    //         text: '首页',
    //         link: ''
    //     }, {
    //         text: '试炼场',
    //         link: '/test'
    //     }, {
    //         text: 'vuex',
    //         link: '/vuex'
    //     }]
    }];
}