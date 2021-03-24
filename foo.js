// 変数（オブジェクト変数）の宣言
let youtuber_2 = {

    // プロパティ（データ）は VSC 上だと青色で表示される
    list: {

        // business のプロパティ
        business: {

            // [] は配列という形でデータをまとめて入れる時などに使用
            youtuber: [
                { name: 'Eさん', age: 28, teachPrograming() {} },
                { name: 'Fさん', age: 25, teachHistory() {} }
            ],

            teach() {}

        },

        // entertainment のプロパティ
        entertainment: {

            youtuber: [{ name: 'Gさん' }, { name: 'Hさん' }],

            makeSmile() {}

        }

    },

    // メソッド（機能）は VSC 上だと黄色で表示される
    plan() {},
    uploadVideo() {}

};

// foo.js の youtuber_2 のオブジェクトを index.js から読み込むための設定
export default youtuber_2;