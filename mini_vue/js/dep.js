/* dep.js */

class Dep {
  constructor() {
    // 每个属性一个dep
    window.depCount++;
    // 存储观察者
    this.subs = [];
  }
  // 添加观察者watcher
  addSub(sub) {
    // debugger;
    console.log("addSub:", sub);
    // 判断观察者是否存在 和 是否拥有update方法
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  // 通知方法
  notify() {
    // debugger;
    // 触发每个观察者的更新方法
    console.log("notify:");
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
