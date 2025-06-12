(function () {
  console.log("IIFE: 开始了！");

  // 模拟一个需要等待的异步任务，比如下载东西
  setTimeout(() => {
    console.log("IIFE: 2 秒后，异步任务完成了！");
  }, 2000); // 等待 2000 毫秒 (也就是 2 秒)

  console.log("IIFE: 主体代码执行完了，但异步任务还在后台跑着...");
})();
