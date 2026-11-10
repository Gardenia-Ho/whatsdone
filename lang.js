// 语言：?lang= 参数 > 上次选择 > 浏览器语言（中文显示中文，其余显示英文）
(function () {
  var root = document.documentElement;
  var param = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = param || saved || (/^zh/i.test(navigator.language || '') ? 'zh' : 'en');
  if (lang !== 'zh' && lang !== 'en') lang = 'zh';
  if (param) { try { localStorage.setItem('lang', lang); } catch (e) {} }

  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
  var title = root.getAttribute('data-title-' + lang);
  if (title) document.title = title;

  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.lang-switch a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-lang') === lang) links[i].classList.add('active');
    }
  });
})();
