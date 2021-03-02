var express = require('express');
var router = express.Router();
var fs = require('fs');
var image = require("imageinfo"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  next()
});
router.get('/', function(req, res, next) {
  function readFileList(path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach(function (itm, index) {
        var stat = fs.statSync(path + itm);
        if (stat.isDirectory()) {
        //递归读取文件
            readFileList(path + itm + "/", filesList)
        } else {
            var obj = {};//定义一个对象存放文件的路径和名字
            obj.path = path;//路径
            obj.filename = itm//名字
            filesList.push(obj);
        }
      })
  }
  var getFiles = {
    getFileList: function (path) {
        var filesList = [];
        readFileList(path, filesList);
        return filesList;
    },
    getImageFiles: function (path) {
        var imageList = [];

        this.getFileList(path).forEach((item) => {
            var ms = image(fs.readFileSync(item.path + item.filename));

            ms.mimeType && (
              imageList.push(item.path +item.filename)
            )
            ms.mimeType && (res.download(item.path +item.filename))
        });
        res.send({
          code: "000000",
          data: {
            list: imageList
          }
        });
        return imageList;

    }
  };
  getFiles.getImageFiles("D:/干细胞H5/干细胞图片/");
});


var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

router.get('/example/c', [cb0, cb1, cb2])

module.exports = router;
