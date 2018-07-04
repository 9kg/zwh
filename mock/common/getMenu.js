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
    }, {
        text: 'ico设置',
        link: '/set/ico',
        icon: 'my-icon-fire'
    }, {
        text: 'logo设置',
        link: '/set/logo',
        icon: 'my-icon-flag'
    }, {
        text: '背景图设置',
        link: '/set/bg',
        icon: 'el-icon-picture'
    }, {
        text: 'banner图设置',
        link: '/set/banner',
        icon: 'my-icon-file-image-o'
    }];
}