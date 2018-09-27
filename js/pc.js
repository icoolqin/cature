$(function() {
  var $headerImg = $('.header img');
  var $zhBtn = $('#chinese');
  var $enBtn = $('#english');
  var $shops = $('.shops');
  var $contact = $('.contact');

  var config = {
    zh: {
      headerImg: 'img-zh.png',
    },
    en: {
      headerImg: 'img-en.png',
    },
  };

  // 当前语言，0代表中文，1代表英文
  var currLanguage = 0;

  function switchLanguage(type) {
    if (currLanguage === type) return;
    currLanguage = type;
    $zhBtn.toggleClass('active');
    $enBtn.toggleClass('active');
    $headerImg.attr('src', './imgs/' + config[type === 0 ? 'zh' : 'en'].headerImg);
    $shops.toggle();
    $contact.toggle();
  }

  $zhBtn.on('click', function(e) {
    switchLanguage(0);
  });

  $enBtn.on('click', function(e) {
    switchLanguage(1);
  });
});
