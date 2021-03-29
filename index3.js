// 関数とは、タスクや値計算を実行する分の集まり
// メソッド = 関数

// メソッドの短縮記法---------------------------------------------------------

// 通常
const foo = {
    alert: function () {},
};

// 短縮記法（こちらの方がおすすめ）
const foo = {
    alert() {},
};

// 関数の一般的な構文---------------------------------------------------------
function 関数名(仮因数1, 仮因数2) {

    // いろいろ処理
    return 関数の返り値;
}

// 関数の一般的な構文（料理で例える）------------------------------------------
function cut(food) {

    // 切る処理
    const cutFood = food.slice();

    // 関数の返り値
    return cutFood;
}

// 関数の呼び出し（変数に入れる）
const cutCarrot = cut(carrot); // 人参
const cutPotato = cut(potato); // じゃがいも

// return（返り値）の無い関数（返り値が不必要）もある
function throwAway(food) {

    // 捨てる処理
    delete food;
}

// Twitter の文字制限検証の関数-----------------------------------------------
function isTweetable(text) {

    // 打ったテキストの文字数を取得し、140文字以内か検証（true or folse を出力）
    return text.length <= 140;
}

// 実際に動くかどうかテスト（true と出力される）
console.log(isTweetable('foo'));

// Tweet 可能だったら alert してくれる関数（return 無し）----------------------
function alertTweetable(text) {

    // 条件文
    // if (isTweetable(text)) で置き換え可能
    if (text.length <= 140) {
        alert('you can tweet !!');
    }
}

// 動作確認
alertTweetable('foo');

// 匿名（無名）関数について---------------------------------------------------
// 匿名関数は関数名がなくても動作する

// 関数式（関数を変数の中に値として入れ込んだもの）
const isTweetable = function(text) {
    return text.length <= 140;
};

// 動作確認
console.log(isTweetable('foo'))

// コールバック関数について---------------------------------------------------
// コールバック関数とは引数として渡されている関数のこと
// 引数に関数を渡すこともできる
// 高階関数は引数に関数を受け取った関数のこと

// コールバック関数の一般的な構文
function 高階関数(コールバック関数) {

    // いろいろ処理
    コールバック関数();
};

// 料理の例で説明

// 高階関数を使わない例=============================
function bring(food) {

    if (/* 手洗いが終えたら */) {
    // 食材を持ってきてもらう処理
    }
}

function peer(food) {

    if (/* 手洗いが終えたら */) {
    // 食材の皮をむく処理
    }
}

function cut(food) {

    if (/* 手洗いが終えたら */) {
    // 食材を切ってもらう処理
    }
}

// 高階関数を使う例=================================
function washed(fn) {
    if (/* 手洗いが終えたら */) {
        fn(); // コールバック関数の処理
    }
}

function bring(food) {
    // 食材を持ってきてもらう処理
}

function peer(food) {
    // 食材の皮をむく処理
}

function cut(food) {
    // 食材を切ってもらう処理
}

// Twitter の確認の挙動を高階関数で自作してみる--------------------------------
function unfollow() {

    // アンフォローの処理
    console.log('フォローを外しました');
}

function cancelTweet() {

    // ツイートキャンセルの処理
    console.log('ツイートをキャンセルしました');
}

// 高階関数（確認の処理）
function confirmed(fn) {
    if (window.confirm('実行しますか？')) {
        fn();
    }
}

confirmed(unfollow);

// コールバック関数に匿名関数を用いる（よく使われる）---------------------------
function confirmed(fn) {
    if (window.confirm('実行しますか？')) {
        fn();
    }
}

confirmed(function () {
    console.log('フォローを外しました');
});

// GitHub のリポジトリ削除の挙動を実装-----------------------------------------
function confirmed(fn) {
    const input = window.prompt('実行しますか？');

    // input が'実行'の場合に関数を実行
    if (input === '実行') {
        fn();
    }
}

confirmed(function () {
    console.log('リポジトリを削除');
});

// input を confirmed(function () {}) に渡すパターン---------------------------
function confirmed(fn) {
    const input = window.prompt('実行しますか？');
    fn(input);
}

confirmed(function (input) {
    if (input === '実行') {
        console.log('リポジトリを削除');
    }
});

// Documentメソッド（addEventListener）を紹介----------------------------------

// ボタンを押したら何かが起きる処理
const btn = document.getElementByID('button');

btn.addEventListener('click', function() {
  console.log('ボタンが押されました');
});

// JavaScript標準メソッド（forEach）を紹介-------------------------------------
// forEach とは配列を繰り返し処理すること

// にんじん、ジャガイモ、玉ねぎを順番に出力
const foods = ['にんじん', 'ジャガイモ', '玉ねぎ'];

foods.forEach(function(food) {
    console.log(food);
});