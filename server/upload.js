/**
 * mock下全路由匹配
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router();
var multer = require('multer');

/**
 * 图片上传接口
 * Created by Bramble.wang on 2018/07/04.
 */
var storageIco = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'static')
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}.${file.originalname.split('.')[1]}`)
    }
});
var uploadIco = multer({ storage: storageIco });
router.post('/ico',  uploadIco.array('favicon', 1), function(req, res, next) {
    res.json({
        success: true,
        msgCode: '',
        response:{path: req.files[0].path}
    });
});

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'static/img')
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}.${file.originalname.split('.')[1]}`)
    }
});
var upload = multer({ storage: storage });
router.post('/logo',  upload.array('logo', 1), function(req, res, next) {
    res.json({
        success: true,
        msgCode: '',
        response:{path: req.files[0].path}
    });
});
router.post('/bg',  upload.array('bg', 1), function(req, res, next) {
    res.json({
        success: true,
        msgCode: '',
        response:{path: req.files[0].path}
    });
});

module.exports = router;