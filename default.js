function main() {
  const params = new URLSearchParams(document.location.search);
  const appId = params.get("appId");
  const bundleId = params.get("bundleId");
  const link = params.get("link");
  const platform = getPlatgorm();
  if (platform == "iOS") {
    const url = "https://apps.apple.com/de/app/id" + appId;
    window.location.replace(url);
  } else if (platform == "Android") {
    const url = "https://play.google.com/store/apps/details?id=" + bundleId;
    window.location.replace(url);
  } else if (link) {
    window.location.replace(link);
  }
}

function getPlatgorm() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if ((/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) || (userAgent.includes('Mac') && 'ontouchend' in document)) {
    return 'iOS';
  }

  var i, os = ['Android', 'iOS', 'Mac'];
  for (i = 0; i < os.length; i++) {
    if (new RegExp(os[i],'i').test(userAgent)) {
      return os[i];
    }
  }
}

main();
