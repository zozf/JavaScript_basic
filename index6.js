// index5.html、index5.js のリファクタリング（コードをきれいにすること）

// ★★ index6.html 側の id を利用した変数の定義（ DOM 要素の取得）★★
// ボタン
const button = document.getElementById('addBtn');
// リスト
const lists = document.getElementById('lists');

// ★★ APIを叩いて外部とのデータやり取り（関数）★★
async function getUsers() {
    // async、await で Response オブジェクトが返ってくる
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // json メソッドを使用することで使いやすい形に変換できる
    const users = await res.json();
    // users を返す
    return users;
}

// ★★ DOM 操作（関数）★★
function addList(user) {
    // if 文（１～５番目の名前をリストに加える）
    if (user.id <= 5) {
        // createElement メソッドを使用すると、HTML 要素を生成することができる
        const list = document.createElement('li');
        // innerText メソッドを使用すると、list タグ内に文字列を追加することができる
        list.innerText = user.name;
        // appendChild メソッドでリストを増やすことができる
        lists.appendChild(list);
    }
}

// ★★ 一連の流れ（関数）★★
async function listUsers() {
    // getUsers() 関数で返った値を変数 users に代入
    const users = await getUsers();
    // もっとボタンを押した際にユーザーの名前をリストに追加する
    // forEach メソッドは引数としてコールバック関数を取る（全ての情報を1つずつ表示する）
    users.forEach(addList);
}

// ★★（関数の）処理 ★★
// 最初からユーザーが５人分読み込まれる
window.addEventListener('load', listUsers);
// ボタンにクリックイベントを追加
button.addEventListener('click', listUsers);