$(".h-open").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active');
  //ボタン自身にactiveクラスを付与する
  $("#h-nav").toggleClass('panelactive');
  //ナビゲーションにpanelactiveクラスを付与する
});

$("#h-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".h-open").removeClass('active');
  //ボタンのactiveクラスを除去して
  $("#h-nav").removeClass('panelactive');
  //ナビゲーションのpanelactiveクラスも除去する
});
