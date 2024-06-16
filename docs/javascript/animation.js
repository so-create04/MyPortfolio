import * as THREE from "./build/three.module.js";

function createScene(canvasId) {
    var scene = new THREE.Scene();

    // カメラの作成
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // レンダラーの作成
    var canvas = document.getElementById(canvasId);
    var renderer = new THREE.WebGLRenderer({ canvas: canvas });

    // 初期サイズの設定（親要素のサイズに基づいて設定）
    function setRendererSize() {
        var parent = canvas.parentElement;
        var width = parent.clientWidth;
        var height = parent.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    // 初期サイズの設定
    setRendererSize();

    // 立方体のジオメトリ作成
    var geometry = new THREE.BoxGeometry(2, 2, 2); // 大きさ指定

    // 立方体のテクスチャ作成
    var canvasText = document.createElement('canvas');
    var context = canvasText.getContext('2d');
    canvasText.width = 256;
    canvasText.height = 256;
    context.font = 'Bold 60px Arial';
    // context.fillStyle = 'rgba(255, 255, 255, 0.8)'; // 透明な白色
    context.fillStyle = 'rgba(250, 147, 51, 1)'; // 透明な金色


    if (canvasId == 'myCanvas1') {
        context.fillText('top', 20, 60);
    } else if (canvasId == 'myCanvas2') {
        context.fillText('works', 20, 60);
    } else if (canvasId == 'myCanvas3') {
        context.fillText('about', 20, 60);
    } else if (canvasId == 'myCanvas4') {
        context.fillText('contact', 20, 60);
    } else if (canvasId == 'myCanvas5') {
        context.fillText('skill', 20, 60);
    } else {
        context.fillText('setting', 20, 60);
    }

    // context.fillText('top', 20, 60);

    var texture = new THREE.CanvasTexture(canvasText);

    // テクスチャを適用したマテリアル作成
    var material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    // 立方体のメッシュ作成
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 立方体の各辺を表す線のジオメトリ作成
    var edgesGeometry = new THREE.EdgesGeometry(geometry);

    // 立方体のラインマテリアル作成(点線)
    var edgesMaterial = new THREE.LineDashedMaterial({
        color: 0xda9333,
        dashSize: 0.03,  // 点線の長さ
        gapSize: 0.05,   // 点線の間隔
    });

    // ラインの作成
    var edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    edges.computeLineDistances();
    scene.add(edges);

    // カーソル位置に応じた回転速度の初期値
    var rotationSpeed = 0.01;

    // マウスイベントリスナーを追加して回転速度を調整
    canvas.addEventListener('mousemove', function(event) {
        // マウスのX座標に応じて回転速度を計算
        rotationSpeed = (event.clientX / window.innerWidth - 0.5) * 0.1;
    });

    // ウィンドウサイズ変更時にレンダラーとカメラのアスペクト比を更新
    window.addEventListener('resize', function () {
        setRendererSize();
    });

    // レンダリング
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += rotationSpeed;
        edges.rotation.y += rotationSpeed;
        renderer.render(scene, camera);
    };

    animate();
}

// 各キャンバスに対してシーンを作成
createScene('myCanvas1');
createScene('myCanvas2');
createScene('myCanvas3');
createScene('myCanvas4');
createScene('myCanvas5');
createScene('myCanvas6');
