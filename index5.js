// ボタン
const button = document.getElementById('addBtn');

// リスト
const lists = document.getElementById('lists');

// 処理

// ボタンにクリックイベントを追加
button.addEventListener('click', async function() {

    // 外部とのデータやり取り--------------------------------------------------------
    // クリックされた時の処理（ユーザーを取得する Web API を叩く）

    // async、await で Response オブジェクトが返ってくる
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // json メソッドを使用することで使いやすい形に変換できる
    const users = await res.json();

    // DOM操作----------------------------------------------------------------------
    // もっとボタンを押した際にユーザーの名前をリストに追加する

    // ★ forEach メソッドは引数としてコールバック関数を取る（全ての情報を1つずつ表示する）
    users.forEach(function(user) {

        // if 文
        if (user.id <= 5) {

            // createElement メソッドを使用すると、HTML 要素を生成することができる
            const list = document.createElement('li');

            // innerText メソッドを使用すると、list タグ内に文字列を追加することができる
            list.innerText = user.name;

            // appendChild メソッドでリストを増やすことができる
            lists.appendChild(list);
        }

    });

    // ★ for 文の場合
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const list = document.createElement('li');
        list.innerText = user.name;
        lists.appendChild(list);
    }

});

// 最初からユーザーが5人分読み込まれる
window.addEventListener('load', async function() {

    // 外部とのデータやり取り--------------------------------------------------------
    // クリックされた時の処理（ユーザーを取得する Web API を叩く）

    // async、await で Response オブジェクトが返ってくる
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // json メソッドを使用することで使いやすい形に変換できる
    const users = await res.json();

    // DOM操作----------------------------------------------------------------------
    // もっとボタンを押した際にユーザーの名前をリストに追加する

    // ★ forEach メソッドは引数としてコールバック関数を取る（全ての情報を1つずつ表示する）
    users.forEach(function(user) {

        // if 文
        if (user.id <= 5) {

            // createElement メソッドを使用すると、HTML 要素を生成することができる
            const list = document.createElement('li');

            // innerText メソッドを使用すると、list タグ内に文字列を追加することができる
            list.innerText = user.name;

            // appendChild メソッドでリストを増やすことができる
            lists.appendChild(list);
        }

    });
});