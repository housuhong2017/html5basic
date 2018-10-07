
var Box;
    window.onload = function() {
      Box = document.getElementById("box");
      Box.ondragenter = ignoreDrag;
      Box.ondragover = ignoreDrag;
      Box.ondrop = drop;
    }
   
    function ignoreDrag(e) {
      //确保没有其他元素会取得这个事件
      e.stopPropagation();
      e.preventDefault();
    }
   
    function drop(e) {
      //取消事件传播及默认行为
      e.stopPropagation();
      e.preventDefault();
      
      //取得拖进来的文件
      var data = e.dataTransfer;
      var files = data.files;
      //将其传给真正的处理文件的函数
      processFiles(files);
    }
   
    function processFiles(files) {
      var file = files[0];
      //创建FileReader
      var reader = new FileReader();
      reader.onload = function (e) {
        //使用图像URL来绘制dropBox的背景
        Box.style.backgroundImage = "url('" + e.target.result + "')";
      };
      //读取图片
      reader.readAsDataURL(file);
    }

