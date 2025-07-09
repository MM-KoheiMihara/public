/* =======================================================
 *  汎用 画像スタック・スライダー
 *    - 画像 URL は <div id="viewer" data-images="url1,url2, ..."> に列挙
 *    - ビューア:   <img id="ctImg">
 *    - スライダー: <input type="range" id="sliceRange">
 *    - カウンタ:   <span id="counter">
 * ======================================================= */
(() => {
  /* ---------- 1) 画像リスト取得 ---------- */
  const viewer = document.getElementById('viewer');
  if (!viewer) { console.error('viewer 要素が見つかりません。'); return; }

  const rawList = viewer.dataset.images || '';
  const IMAGE_LIST = rawList.split(',').map(s => s.trim()).filter(Boolean);

  if (IMAGE_LIST.length === 0) {
    console.error('data-images が空、または画像 URL が見つかりません。');
    return;
  }

  /* ---------- 2) 要素参照 ---------- */
  const img   = document.getElementById('ctImg');
  const range = document.getElementById('sliceRange');
  const cnt   = document.getElementById('counter');

  if (!img || !range || !cnt) {
    console.error('ctImg / sliceRange / counter のいずれかが見つかりません。');
    return;
  }

  /* ---------- 3) 初期化 ---------- */
  range.min = 0;
  range.max = IMAGE_LIST.length - 1;
  range.value = 0;
  img.src = IMAGE_LIST[0];
  cnt.textContent = `1 / ${IMAGE_LIST.length}`;

  /* ---------- 4) スライダー操作 ---------- */
  range.addEventListener('input', e => {
    const idx = Number(e.target.value);
    img.src = IMAGE_LIST[idx];
    cnt.textContent = `${idx + 1} / ${IMAGE_LIST.length}`;
  });

  /* ---------- 5) プリロード（任意） ---------- */
  IMAGE_LIST.slice(1).forEach(src => { const b = new Image(); b.src = src; });
})();
