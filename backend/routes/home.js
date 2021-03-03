var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/menulist', function(req, res, next) {
    res.json({
        status: 1,
        data: {
            list: [
                {"name": "首页", "href": "/"},
                {"name": "养花知识", "href": "/yhzs"},
                {"name": "花卉诊疗", "href": "/hhzl"},
                {"name": "花卉大全", "href": "/hhdq"},
                {"name": "多肉植物", "href": "/drzw"},
                {"name": "悬赏问答", "href": "https://bbs.huabaike.com/forum-29-1.html"},
                {"name": "百花图谱", "href": "/tupu"},
                {"name": "养花论坛", "href": "https://bbs.huabaike.com/"},
                {"name": "花卉图库", "href": "https://tuku.huabaike.com/"}
            ]
        }
    });
});

module.exports = router;
