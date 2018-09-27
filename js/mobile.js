$(function() {
  var $header = $('.header');
  var $zhBtn = $('#chinese');
  var $enBtn = $('#english');
  var $content = $('.content');
  var $tip = $('.tip');
  var $shops = $('.shops');
  var $contact = $('.contact');

  var config = {
    zh: {
      headerBg: 'bg-zh.png',
      width: '4.2rem',
      content:
        '我们致力于探求自然，人类，动物和谐相处的最佳方式。<br />始终以材料科技为核心来打造更健康、更舒适的人与宠物之间的生活共处环境。',
      tip: '主站建设中...',
    },
    en: {
      headerBg: 'bg-en.png',
      width: '6.7rem',
      content:
        'We always are dedicated to product innovation and focus on " integratinglaterial<br />technology into pet products " to bring " Natural, Technological and Healthy " experiences to pets and their owners.',
      tip: 'UNDER CONSTRUCTION...',
    },
  };

  // 当前语言，0代表中文，1代表英文
  var currLanguage = 0;

  function switchLanguage(type) {
    if (currLanguage === type) return;
    currLanguage = type;
    $zhBtn.toggleClass('active');
    $enBtn.toggleClass('active');
    var currConfig = config[type === 0 ? 'zh' : 'en'];
    $header.css('background-image', 'url(../imgs/' + currConfig.headerBg + ')');
    $content.css('width', currConfig.width).html(currConfig.content);
    $tip.text(currConfig.tip);
    $shops.toggle();
    $contact.toggle();
  }

  $zhBtn.on('touchstart', function(e) {
    switchLanguage(0);
  });

  $enBtn.on('touchstart', function(e) {
    switchLanguage(1);
  });
});
