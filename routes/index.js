var express = require('express');
var fs = require('fs');
var router = express.Router();
var multer = require('multer');
var fileid = {};
var btn = ["btn-primary","btn-success","btn-danger","btn-warning","btn-info","btn-dark"];
function rand(){
  return Math.floor(Math.random()*6)
}
var upload = multer({
  storage:multer.diskStorage({
    limits:{
      fileSize:10*10000000
    },
    destination:function (req,file,cb) { 
      cb(null,'./public/file');
    },
    filename:function(req,file,cb){
      fileid[file.originalname] = new Date().getTime()
      var changedName = fileid[file.originalname]+'.'+file.originalname.split(".")[file.originalname.split(".").length-1];
      cb(null,changedName);
    }
  })
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/downloadTxt', function(req, res, next) {
  var name = "text.txt";
  var path = './public/file/'+name;
  var size = fs.statSync(path).size;
  res.writeHead(200,{
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename=' + name,
    'Content-Length': size
  });
  fs.createReadStream(path).pipe(res);
});
router.get('/downloadWord', function(req, res, next) {
  var name = "word.docx";
  var path = './public/file/'+name;
  var size = fs.statSync(path).size;
  res.writeHead(200,{
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename=' + name,
    'Content-Length': size
  });
  fs.createReadStream(path).pipe(res);
});
router.get('/downloadImg', function(req, res, next) {
  var name = "img.jpg";
  var path = './public/file/'+name;
  var size = fs.statSync(path).size;
  res.writeHead(200,{
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename=' + name,
    'Content-Length': size
  });
  fs.createReadStream(path).pipe(res);
});
router.get('/downloadRar', function(req, res, next) {
  var name = "test.rar";
  var path = './public/file/'+name;
  var size = fs.statSync(path).size;
  res.writeHead(200,{
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename=' + name,
    'Content-Length': size
  });
  fs.createReadStream(path).pipe(res);
});


//单个文件上传
router.post('/upload',upload.single('singleFile'), (req,res)=>{
  console.log("上传");
  res.json({
    originalname: req.file.originalname,
    text:`<button class="btn m-2 ${btn[rand()]}" id="${req.file.originalname}">下载${req.file.originalname}</button>`
  })
});
//文件下载
router.get('/download', function(req, res, next) {
  var ext = req.query.id.split(".")[req.query.id.split(".").length-1];
  var path = './public/file/'+fileid[req.query.id]+'.'+ext;
  var size = fs.statSync(path).size;
  res.writeHead(200,{
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename=' + fileid[req.query.id]+"."+ext,
    'Content-Length': size
  });
  fs.createReadStream(path).pipe(res);
});
module.exports = router;
