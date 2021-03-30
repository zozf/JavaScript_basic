// Web API について

// API とはアプリケーションプログラミングインタフェースのことで、ソフトウェアの機能を共有できるツール（プログラム）のこと
// UI とはユーザーインターフェイスのことで、ユーザー（利用者）と製品やサービスとのインターフェース（接点）すべてのこと
// UX とはユーザーエクスペリエンスのことで、ユーザーが製品やサービスを通じて得られる体験のこと

// Web API を叩く ⇒ プログラミング上から外部とデータのやり取りをすること
// バックエンドの仕事は API を作ること
// フロントエンドの仕事はバックエンドが作った API を使用して UI を構築すること

// Web API を利用して、プログラム上からデータを取得する
// async function とすることで非同期関数にすることができる---------------------------------------------------------------
async function callApi() {

    // API を叩いて変数 res に入れる
    // functoin、fetch を使用したら Promise オブジェクトが返ってくる
    // async function、await fetch を使用したら Response オブジェクトが返ってくる
    // async、await で API を叩く処理が書ける（主流）
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // json メソッドによってプログラミング上から使いやすい形に変換される
    const users = await res.json();

    // 実際に API を叩く処理
    console.log(users);
}

callApi();

// fetch、then を使った書き方-------------------------------------------------------------------------------------------
function callApi() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) {
        return res.json();
    })
    .then(function (users) {
        console.log(users);
    });
}

callApi();

// XMLHttpRequest を使った書き方----------------------------------------------------------------------------------------
function callApi() {

    const xhr = new XMLHttpRequest();

    // データの取得には GET を使う
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    // レスポンスタイプの指定
    xhr.responseType = 'json';

    // リクエストを送るには send メソッドを使用
    xhr.send();

    // 返ってきたレスポンスの処理
    xhr.onload = function() {
        console.log(xhr.response);
    };
}

callApi();

// babel というものを使うと古いブラウザで最新のJSの機能が使える