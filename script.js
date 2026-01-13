// 1.ランダムにおみくじ画像のパスを返す処理
function getRandomImage() {
  // 0〜6の整数をランダムに返すメソッド
  const number = Math.floor(Math.random() * 7);
  //  const imagePath = "./images/omikuji-" + number.toString() + ".png";
  // テンプレートリテラルという書き方（文字列と変数を連結させるときによく使う）（こちらの方がやや読みやすいの好むエンジニアが多い）
  const imagePath = `./images/omikuji-${number.toString()}.png`;
  return imagePath;
}

// 2.ボタンを押したらスロットが回転する処理
function playOmikuji() {
  // setIntervalは設定した関数を何度も関数をリピートすることができる
  const timer = setInterval(function () {
    // setAttributeはだ1引数に属性名、第2引数に値(ミリ秒。1000msで1秒。を指定することでし大した属性の値を書き換えれる
    document.querySelector("#js-result").setAttribute("src", getRandomImage());
  }, 100);

  // 指定した時間分処理を遅らせて関数を実行
  setTimeout(function() {
    // setIntervalで実行された処理を取り消すことができる
    clearInterval(timer);
  }, 3000);
}

// idはセレクタ名に＃を入れる。
document.querySelector("#js-button").addEventListener("click", playOmikuji);

// 3.数秒後にスロットが止まる処理
