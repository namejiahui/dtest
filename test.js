(function () {
  console.log("IIFE: 开始了！");

  setTimeout(() => {
    console.log("IIFE: 2 秒后，异步任务完成了！");
  }, 2000);

  console.log("IIFE: 主体代码执行完了，但异步任务还在后台跑着...");
})();
