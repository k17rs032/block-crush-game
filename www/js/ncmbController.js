var ncmbController = {
        APPLICATION_KEY: "60c628fe724e13e41f1e23527cf0f173a53e7cd155bb46e74b901e2a5bda7aa4",
        CLIENT_KEY: "272c229d25e5997e61f59eb5a5b90cf4fd5c549c00066ef401f8782478f30c14",

        ncmb: null,
        currentUser: null,  // ログインしたユーザーのオブジェクトを格納
        screenSize: null,    // 画面サイズを格納

    // 初期化
    init: function(screenSize) {
        var self = this;
        self.ncmb = new NCMB(self.APPLICATION_KEY, self.CLIENT_KEY);    // mobile backendの初期化
        self.screenSize = screenSize;
    },

    // スコア送信
    sendScore: function(score) {
        var self = this;

    // [1]Score（クラス）を生成
        var Score = self.ncmb.DataStore("ScoreClass");

    // [2]インスタンス生成、スコア数値をフィールド名"score"にセット
        var scoreData = new Score({score: score});

    // [3]送信処理
        scoreData.save()
            .then(function (saved) {
                alert("スコア送信完了！");
           })
          .catch(function(err){
                console.log(err);
            });
    },
}