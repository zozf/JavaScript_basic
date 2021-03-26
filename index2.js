// JavaScriptの変数について
// 変数はデータを保存しておくための箱

// getElementById('foo') は dom 内にある id = foo の要素を取得
// offsetwidth で dom 要素の横幅を取得
// const fooWidth が変数の宣言
const fooWidth = document.getElementById('foo').offsetWidth;

// 高さを取得
const fooHeight = document.getElementById('foo').offsetHeight;

// 見易く書き換え
// 変数に入れると見易くなったり、後に追加し易くなる
// できるだけ変数に入れる
// fooArea は面積
// JavaScript では慣例的に camelCase（2個目の単語の頭文字を大文字にしてつなげる）方法を使う
const foo = document.getElementById('foo');
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetHeight;
const fooArea = fooWidth * fooHeight;

// 変数の宣言方法
// 変数名は識別子とも呼ばれる
// 変数名に予約語（if、for など）は使えない

// const は再代入できない、再定義できない（1番使う!!）
const foo = 100,
      foo2 = 1000;

// しかし、以下のようにすれば中身を変えることもできる
const obj = {
    foo: 123
  };

  console.log(obj.foo);
  obj.foo = 456;
  console.log(obj.foo);

// let は再代入できる、再定義できない（2番目に使う）
let bar = 200;

// var は再代入できる、再定義できる（ほぼ使うことはない、使ってはいけない）
var baz = 300;

// fooWidth  ← camelCase記法
// foo_width ← snake_Case記法