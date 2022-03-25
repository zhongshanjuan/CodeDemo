App({
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
  onError(msg) {
    console.log("App Hide");
    console.log(msg);
  },
  globalData: {
    hasLogin: false,
    msg: "I am global data",
  },
});
