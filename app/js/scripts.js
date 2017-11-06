(function() {
  var $id = function(s) {
    return document.querySelector(s);
  };
    var oTocShow = $id('#tocShow');
  var postPage = function() {
    // 显示/隐藏目录
    var oTeWrap = $id('#teWrap');
    var postToc  =$id('#postToc');
    var teWrapClass = 'te-wrap-post';
    var flag = true;
    var showPostToc = function(){
      var actionName = flag? 'add': 'remove';
      oTeWrap.classList[actionName](teWrapClass);
      flag = !flag;
    }
    showPostToc();
    oTocShow.onclick = showPostToc;

  }
  var init = function(){
    hljs.initHighlightingOnLoad();
    if (oTocShow) postPage();
  };
  init();
})()