//****************************************//
// スクロールによるコンテンツのフェードイン //
// を管理する関数（コンテンツ高さなし）     //
//****************************************//

$(function() {
    // ウィンドウがスクロールされるたびに実行される関数
    $(window).scroll(function () {
      // ".js-scroll"というクラスを持つすべての要素に対して処理を行う
      var list1 = [".mid_title.js-scroll.-a", ".mid_title.js-scroll.-b", 
        ".mid_title.js-scroll.-c"];
      for(var i=0; i<list1.length; i++){
        $(list1[i]).each(function () {
          // 対象となる要素(js-scroll)の、ページの上からの位置を取得
          var jsscrollOffset = $(this).offset().top;
          // ウィンドウの高さを取得
          var windowHeight = $(window).height();
          // 現在のスクロール位置 + ウィンドウの高さを計算
          var scrollPosition = $(window).scrollTop() + windowHeight;
          // コンテンツを非表示にする際の位置
          var scrollbottomPosition = $(window).scrollTop();
    
          // 現在のスクロール位置が対象となる要素(js-scroll)の位置を超えた場合
          if (scrollPosition > jsscrollOffset && scrollbottomPosition <= jsscrollOffset) {
            // this = "js.scroll"クラスの要素に"js-active"というクラスを追加
            $(this).addClass("js-active");
          }
          else {
            $(this).removeClass("js-active");
          }
        });
      }
      
    });
  });