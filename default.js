const params = new URLSearchParams(document.location.search);
const appId = params.get("appId");
const bundleId = params.get("bundleId");
const platform = params.get("platform");
const link = params.get("link");
if (platform == "ios") {
  const url = "https://apps.apple.com/de/app/id" + appId;
  window.location.replace(url);
} else if (platform == "android") {
  const url = "https://play.google.com/store/apps/details?id=" + bundleId;
  window.location.replace(url);
} else if (platform == "desktop") {
  window.location.replace(link);
} else {
  window.alert("Something went wrong");
}
