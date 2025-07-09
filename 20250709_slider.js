/* =======================================================
 *  画像スタック・スライダー 2025-07-09 Dbg版
 * ======================================================= */
(() => {
  const log = (...args) => console.log('[slider]', ...args);

  /* ---------- 1) 画像リスト取得 ---------- */
  const viewer = document.getElementById('viewer');
  if (!viewer) { console.error('[slider] viewer 要素が見つかりません'); return; }

  const raw   = viewer.dataset.images || '';
  const urls  = raw.split(',').map(s => s.trim()).filter(Boolean);

  log('取得した data-images =', raw);
  log('パース後の URL 数   =', urls.length);

  if (urls.length === 0) {
    console.error('[slider] data-images が空です');
    return;
  }

  /* ---------- 2) 要素参照 ---------- */
  const img   = document.getElementById('ctImg');
  const range = document.getElementById('sliceRange');
  const cnt   = document.getElementById('counter');
  if (!img || !range || !cnt) {
    console.error('[slider] 必要要素が見つかりません'); return;
  }

  /* ---------- 3) 初期化 ---------- */
  range.min = 0;
  range.max = urls.length - 1;
  range.value = 0;
  cnt.textContent = `1 / ${urls.length}`;

  /* ALT が出るのを防ぐためロード成功時にだけ表示 */
  const showImage = src => {
    img.style.opacity = '0';
    img.onload = () => { img.style.opacity = '1'; };
    img.onerror = () => {
      console.error('[slider] ロード失敗 →', src);
      cnt.textContent = '⚠️ 読込失敗';
    };
    img.src = src;
    log('切替 →', src);
  };
  showImage(urls[0]);

  /* ---------- 4) スライダー操作 ---------- */
  range.addEventListener('input', e => {
    const idx = Number(e.target.value);
    cnt.textContent = `${idx + 1} / ${urls.length}`;
    showImage(urls[idx]);
  });

  /* ---------- 5) プリロード（任意） ---------- */
  urls.slice(1).forEach(u => { const b = new Image(); b.src = u; });
})();
