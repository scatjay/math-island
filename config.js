// 部署時填：後端網址與 Firebase 登入設定。這個檔案沒有任何機密：
// firebase 設定是網頁公開用的識別資料；金鑰（Gemini）只在後端；allowedHashes 是允許登入帳號的雜湊，不是信箱。
window.PX_CONFIG = {
  backend: "https://pxclass-api-123487216321.asia-east1.run.app",            // 例："https://pxclass-api-xxxx.a.run.app"（空白＝示意回覆）
  googleClientId: "",     // 舊的登入方式，改用 Firebase 後不需要
  firebase: {
      "apiKey": "AIzaSyBwPR0oE5VK0eBlqq8JY1B56UXy3R9cyng",
      "authDomain": "gen-lang-client-0929530380.firebaseapp.com",
      "projectId": "gen-lang-client-0929530380"
  },
  allowedHashes: [
      "a4359be1abd8e2cb8cb5b3a0b310e2d99dae271fce038f1d3958ccc1b0b2bad1",
      "b91e87bba040374cdc2106969289769684b103cbd1e7bc4b8deaa29f39f4d760"
  ]       // 目前只開放兩位老師；之後要開放學生，改成空陣列（不限帳號）或加入雜湊
};
