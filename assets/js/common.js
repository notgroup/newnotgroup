
    window.smartCheckoutConfig = {
        app_url: (location.host.split('.')[1] == 'test') ? "//roketads.test" : '//rketads.site',
        app_url_old: (location.host.split('.')[1] == 'test') ? "//roketads.test" : '//rketads.site'
    }

if (document.getElementById('siparisformu')) {
  $("a[href='#siparisformu']").click(function(){
    location.hash = '';
    setTimeout(() => {
      location.hash = '#siparisformu';
    }, 700);
    return false
  });
}



if (window.location.search) {
  if (document.referrer && !localStorage.getItem("referrerUrl")) {
    localStorage.setItem("referrerUrl", document.referrer)
  }

  if (location.href  && !localStorage.getItem("firstUrl")) {
    localStorage.setItem("firstUrl", location.href)
  }
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams && urlParams.has("ref") && urlParams.get("ref")) {
    localStorage.setItem("ref", urlParams.get("ref"));
  }

  if (urlParams && urlParams.has("pixel") && urlParams.get("pixel")) {
    localStorage.setItem("pixel", urlParams.get("pixel"));
  }
}
if (window.location.pathname.split("/").includes("order.html")) {
  setTimeout(() => {
    $("input[name=ref]").val(localStorage.getItem("ref") || location.hostname);
    $("input[name=domain_name]").val(window.location.href.replace('order','success'));
    $("input[name=success_url]").val(window.location.href.replace('order','success'));
  }, 1500);
}

if (
  window.location.pathname.split("/").includes("success.html") &&
  localStorage.getItem("pixel")
  ) {
  var PixelId = localStorage.getItem("pixel") || 0;

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
window,
document,
"script",
"https://connect.facebook.net/en_US/fbevents.js"
);

setTimeout(() => {
  fbq("init", PixelId);
  fbq("track", "Purchase", { value: "100.00", currency: "TRY" });
  var noScript = document.createElement("noscript");
  var noScriptImage = document.createElement("img");
  noScriptImage.src =
  "https://www.facebook.com/tr?id=" + PixelId + "&ev=PageView&noscript=1";
  noScriptImage.style = "display:none";
  noScriptImage.width = "1";
  noScriptImage.height = "1";
  noScript.appendChild(noScriptImage);
  document.body.appendChild(noScript);
}, 2000);
}

(function () {
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src = "https://www.googletagmanager.com/gtag/js?id=UA-102755774-5";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);
  setTimeout(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-102755774-5");
  }, 1000);
})();
window.addEventListener('load', function() {



  if (typeof jQuery !== 'undefined' && document.getElementById('siparisformu')) {

    var formTestDom = $(".smart-checkout-form, .thecheckout");
    formTestDom.attr('action', smartCheckoutConfig.app_url + '/addOrder');
    let pixelDom = '<input type="hidden" name="pixel" value="'+(localStorage.getItem("pixel") || 0)+'">';
    let referrerUrl = '<input type="hidden" name="referrerUrl" value="'+(localStorage.getItem("referrerUrl") || 0)+'">';
    let firstUrl = '<input type="hidden" name="firstUrl" value="'+(localStorage.getItem("firstUrl") || 0)+'">';
    $("input[name=adsource]").val(78);
    formTestDom.append(pixelDom);
    formTestDom.append(referrerUrl);
    formTestDom.append(firstUrl);
    var testApiUrl = smartCheckoutConfig.app_url + '/addOrder'
    /*formTestDom.submit(function(e) {
      var $formtest = $(this);
      $.ajax({
        type: "POST",
        dataType: "json",
        url: testApiUrl,
        data: $formtest.serialize(),
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        success: function(data) {
          console.log(data)
        },
        error: function(data) {
          console.log(data)
        }
      });

    });*/
  }
})

