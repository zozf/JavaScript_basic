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