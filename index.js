// 変数（オブジェクト変数）の宣言
let youtuber = {

    // プロパティ（データ）は VSC 上だと青色で表示される
    list: {

        // business のプロパティ
        business: {

            // [] は配列という形でデータをまとめて入れる時などに使用
            youtuber: [
                { name: 'Aさん', age: 21, teachPrograming() {} },
                { name: 'Bさん', age: 32, teachHistory() {} }
            ],

            teach() {}

        },

        // entertainment のプロパティ
        entertainment: {

            youtuber: [{ name: 'Cさん' }, { name: 'Dさん' }],

            makeSmile() {}

        }

    },

    // メソッド（機能）は VSC 上だと黄色で表示される
    plan() {},
    uploadVideo() {}

};

// --アクセス-----------------------------------------------------------------------

// 'Aさん'（プロパティ）を取り出す
youtuber.list.business.youtuber[0].name

// teachPrograming を取り出す
youtuber.list.business.youtuber[0].teachPrograming

// teachPrograming();で teachPrograming の中身が実行される
youtuber.list.business.youtuber[0].teachPrograming();

// plan の中身を実行
youtuber.plan();

// --foo.js へアクセス--------------------------------------------------------------

// foo.js から youtuber_2 を取得
import youtuber_2 from './foo';

// foo.js の plan の中身を実行
youtuber_2.plan();

// --Window、Document のメソッド・プロパティをエディタ上で参照-----------------------

// window. は省略可能
window.console.log();

window.alert();

window.document.getElementById();