window.onload = function() {
    setTimeout(() => {
    // loaderを消す
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");

    // top-pageを表示
    const topVisualization = document.querySelector(".page-top");
    topVisualization.style.visibility = "visible";
    var side = document.body
    side.style.display = ("initial")
    side.style.alignItems = ("initial")
    side.style.justifyContent = ("initial")

    // ロードした時のウィンドウサイズによってメニュー表示変更
    var windowWidth = window.innerWidth;
    if (windowWidth <= 1024) {
        document.getElementById('sidelist').classList.add('text-hidden');
        document.querySelector('.sidelogo img').classList.add('logo-hidden');
        document.querySelector('.sidebar').classList.add('close-menu');
        document.querySelector('.main').classList.add('open-main');
    }
    }, 1200);
};