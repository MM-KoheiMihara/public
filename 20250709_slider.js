/* =======================================================
 *  汎用 画像スタック・スライダー（alt ちらつき防止版）
 * ======================================================= */
(() => {
  /* ---------- 1) 画像リスト取得 ---------- */
  const viewer  = document.getElementById('viewer');
  if (!viewer) { console.error('viewer 要素が見つかりません。'); return; }

  const IMAGE_LIST = (viewer.dataset.images || '')
                     .split(',')
                     .map(s => s.trim())
                     .filter(Boolean);

  if (IMAGE_LIST.length === 0) {
    console.error('data-images が空、または URL が無効です。');
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

  /* ---------- 3) 初期化（透明 → 読み込み後に表示） ---------- */
  range.min = 0;
  range.max = IMAGE_LIST.length - 1;
  range.value = 0;
  img.onload = () => { img.style.opacity = '1'; };   // 読み込めたら表示
  img.src = IMAGE_LIST[0];
  cnt.textContent = `1 / ${IMAGE_LIST.length}`;

  /* ---------- 4) スライダー操作 ---------- */
  range.addEventListener('input', e => {
    img.style.opacity = '0';                         // 切替時に透明化
    const idx = Number(e.target.value);
    img.src = IMAGE_LIST[idx];
    cnt.textContent = `${idx + 1} / ${IMAGE_LIST.length}`;
  });

  /* ---------- 5) プリロード（任意） ---------- */
  IMAGE_LIST.slice(1).forEach(src => { const b = new Image(); b.src = src; });
})();
