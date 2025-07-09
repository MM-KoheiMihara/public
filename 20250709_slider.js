/* =======================================================
 *  汎用 画像スタックスライダー（リストを JS に埋め込み）
 * ======================================================= */

/* ------------ 1) 画像 URL 一覧 ------------ */
const IMAGE_LIST = [
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg000.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg001.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg002.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg003.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg004.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg005.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg006.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg007.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg008.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg009.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg010.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg011.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg012.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg013.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg014.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg015.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg016.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg017.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg018.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg019.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg020.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg021.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg022.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg023.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg024.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg025.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg026.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg027.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg028.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg029.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg030.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg031.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg032.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg033.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg034.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg035.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg036.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg037.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg038.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg039.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg040.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg041.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg042.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg043.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg044.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg045.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg046.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg047.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg048.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg049.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg050.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg051.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg052.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg053.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg054.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg055.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg056.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg057.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg058.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg059.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg060.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg061.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg062.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg063.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg064.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg065.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg066.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg067.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg068.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg069.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg070.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg071.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg072.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg073.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg074.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg075.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg076.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg077.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg078.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg079.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg080.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg081.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg082.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg083.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg084.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg085.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg086.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg087.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg088.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg089.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg090.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg091.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg092.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg093.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg094.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg095.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg096.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg097.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg098.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg099.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg100.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg101.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg102.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg103.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg104.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg105.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg106.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg107.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg108.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg109.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg110.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg111.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg112.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg113.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg114.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg115.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg116.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg117.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg118.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg119.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg120.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg121.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg122.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg123.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg124.jpg',
  　'https://medilink-contents-qb-stg.s3.ap-northeast-1.amazonaws.com/9B00000/images/CTimg125.jpg'
];

/* ------------ 2) DOM 完了後に初期化 ------------ */
window.addEventListener('DOMContentLoaded', () => {
  const img   = document.getElementById('ctImg');
  const range = document.getElementById('sliceRange');
  const cnt   = document.getElementById('counter');

  if (!img || !range || !cnt || IMAGE_LIST.length === 0) {
    console.error('初期化に必要な要素または画像リストが不足しています');
    return;
  }

  /* 初期設定 */
  range.min = 0;
  range.max = IMAGE_LIST.length - 1;
  range.value = 0;
  cnt.textContent = `1 / ${IMAGE_LIST.length}`;

  /* 表示関数 */
  const show = idx => {
    img.style.opacity = '0';
    img.onload = () => img.style.opacity = '1';
    img.onerror = () => console.error('画像読込失敗:', IMAGE_LIST[idx]);
    img.src = IMAGE_LIST[idx];
    cnt.textContent = `${idx + 1} / ${IMAGE_LIST.length}`;
  };

  /* 最初の画像 */
  show(0);

  /* スライダー操作 */
  range.addEventListener('input', e => show(Number(e.target.value)));

  /* プリロード（任意） */
  IMAGE_LIST.slice(1).forEach(src => { const b = new Image(); b.src = src; });
});
