// スコア送信
var ncmbController = {
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
  }
}