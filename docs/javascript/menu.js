document.addEventListener('DOMContentLoaded', function() {
    // DOMが読み込まれた後に実行
    document.getElementById('menu-toggle-btn').addEventListener('click', function() {
        // menuアイコンがクリックされたときに実行
        document.getElementById('sidelist').classList.toggle('text-hidden');
        document.querySelector('.sidelogo img').classList.toggle('logo-hidden');
        document.querySelector('.sidebar').classList.toggle('close-menu');
        document.querySelector('.main').classList.toggle('open-main');
    });
});

// ウィンドウサイズをチェックする関数
function checkWindowSize() {
    // ウィンドウの幅を取得
    var windowWidth = window.innerWidth;

    // 幅が1024pxの場合の処理
    if (windowWidth <= 1024) {
        document.getElementById('sidelist').classList.add('text-hidden');
        document.querySelector('.sidelogo img').classList.add('logo-hidden');
        document.querySelector('.sidebar').classList.add('close-menu');
        document.querySelector('.main').classList.add('open-main');
    }
}

// ウィンドウサイズが変更されたときにチェック
window.onresize = checkWindowSize;