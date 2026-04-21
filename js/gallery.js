// ============================================
// PHOTO GALLERY — organized by season
// To add photos: add objects to the photos array
// in the relevant season below.
//   wide: true  → spans 2 columns
//   tall: true  → spans 2 rows
// ============================================

const gallerySections = [
  {
    season: "Zambia 2024",
    photos: [
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5537_Original.JPG", alt: "Nsansa Orphanage Boys Ministry", wide: true, tall: true },
      { src: "images/Photo Gallery/Zambia 2024/_DSF3531_Original.JPG",   alt: "Zambia 2024" },
      { src: "images/Photo Gallery/Zambia 2024/_DSF3994_Original.JPG",   alt: "Zambia 2024" },
      { src: "images/Photo Gallery/Zambia 2024/_DSF4079_Original.JPG",   alt: "Zambia 2024", tall: true },
      { src: "images/Photo Gallery/Zambia 2024/_DSF4300_Original.JPG",   alt: "Zambia 2024" },
      { src: "images/Photo Gallery/Zambia 2024/_DSF4355_Original.JPG",   alt: "Zambia 2024" },
      { src: "images/Photo Gallery/Zambia 2024/_DSF4851_Original.JPG",   alt: "Zambia 2024", wide: true },
      { src: "images/Photo Gallery/Zambia 2024/_DSF5037_Original.JPG",   alt: "Zambia 2024" },
      { src: "images/Photo Gallery/Zambia 2024/_DSF5454_Original.JPG",   alt: "Zambia 2024" },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5537_Original.JPG", alt: "Nsansa Orphanage Boys Ministry", wide: true },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5554_Original.JPG", alt: "Nsansa Orphanage Boys Ministry" },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5583_Original.JPG", alt: "Nsansa Orphanage Boys Ministry", tall: true },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5586_Original.JPG", alt: "Nsansa Orphanage Boys Ministry" },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5596_Original.JPG", alt: "Nsansa Orphanage Boys Ministry" },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5603_Original.JPG", alt: "Nsansa Orphanage Boys Ministry" },
      { src: "images/Photo Gallery/Zambia 2024/Nsansa Orphanage Boys Ministry/_DSF5615_Original.JPG", alt: "Nsansa Orphanage Boys Ministry" },
    ]
  },
  {
    season: "Guatemala 2025",
    photos: [
      { src: "images/Photo Gallery/Guatemala 2025/DSC07281-Enhanced-NR_Original.jpg", alt: "Guatemala 2025", wide: true, tall: true },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07541_Original.jpg",              alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07580-Enhanced-NR_Original.jpg", alt: "Guatemala 2025", tall: true },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07606-Enhanced-NR_Original.jpg", alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07773_Original.jpg",              alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07831_Original.jpg",              alt: "Guatemala 2025", wide: true },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07846-Enhanced-NR_Original.jpg", alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07857_Original.jpg",              alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07896_Original.jpg",              alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/DSC07910_Original.jpg",              alt: "Guatemala 2025", wide: true },
      { src: "images/Photo Gallery/Guatemala 2025/DSC08133_Original.jpg",              alt: "Guatemala 2025" },
      { src: "images/Photo Gallery/Guatemala 2025/IMG_1925.jpg",                       alt: "Guatemala 2025" },
    ]
  },
  {
    season: "Zambia 2025",
    photos: [
      { src: "images/Photo Gallery/Zambia 2025/Street Ministry/DSC08635.JPG",               alt: "Zambia 2025 — Street Ministry", wide: true, tall: true },
      { src: "images/Photo Gallery/Zambia 2025/Basketball Ministry/DSC09607_Original.jpeg", alt: "Zambia 2025 — Basketball Ministry" },
      { src: "images/Photo Gallery/Zambia 2025/Basketball Ministry/DSC09991_Original.jpeg", alt: "Zambia 2025 — Basketball Ministry" },
      { src: "images/Photo Gallery/Zambia 2025/Basketball Ministry/IMG_2020.jpeg",           alt: "Zambia 2025 — Basketball Ministry", wide: true },
      { src: "images/Photo Gallery/Zambia 2025/Other/DSC00285_Original.jpeg",               alt: "Zambia 2025" },
      { src: "images/Photo Gallery/Zambia 2025/Other/DSC00334_Original.jpeg",               alt: "Zambia 2025", tall: true },
      { src: "images/Photo Gallery/Zambia 2025/Other/DSC08306-2_Original.jpeg",             alt: "Zambia 2025" },
      { src: "images/Photo Gallery/Zambia 2025/Other/DSC08700.JPG",                         alt: "Zambia 2025" },
      { src: "images/Photo Gallery/Zambia 2025/Other/IMG_1999.jpeg",                        alt: "Zambia 2025" },
      { src: "images/Photo Gallery/Zambia 2025/Street Ministry/DSC08633.JPG",               alt: "Zambia 2025 — Street Ministry", wide: true },
    ]
  },
  {
    season: "Freedom House Discipleship School 2025–2026",
    photos: [
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC00397.jpg",     alt: "Discipleship School", wide: true, tall: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_1998 2.JPG",   alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_3220 2.jpg",   alt: "Discipleship School", tall: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_3600.jpg",     alt: "Discipleship School", wide: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_3601.jpg",     alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_3651.JPG",     alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_3658.JPEG",    alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_3671.JPEG",    alt: "Discipleship School", wide: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/IMG_4244.JPEG",    alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/e9d9dd64-c695-40c3-8ff5-44919243e1e2.JPG", alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC00425.jpg",     alt: "Discipleship School", wide: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC00443.jpg",     alt: "Discipleship School", tall: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC00457.jpg",     alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC04723.jpg",     alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC04731.jpg",     alt: "Discipleship School", wide: true },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC05287.jpg",     alt: "Discipleship School" },
      { src: "images/Photo Gallery/Freedom House Discipleship School 2025-2026/DSC05355.jpg",     alt: "Discipleship School", tall: true },
    ]
  }
];

// ============================================
// ACCORDION TOGGLE
// ============================================
function toggleSeason(index) {
  const season = document.getElementById('season-' + index);
  const body = document.getElementById('season-body-' + index);
  const isOpen = season.classList.contains('open');

  if (isOpen) {
    // Collapse: pin the height, then animate to 0
    body.style.height = body.offsetHeight + 'px';
    getComputedStyle(body).height; // force reflow
    body.style.height = '0';
    season.classList.remove('open');
  } else {
    // Expand: animate to scrollHeight, then release to auto
    season.classList.add('open');
    body.style.height = body.scrollHeight + 'px';
    body.addEventListener('transitionend', () => {
      if (season.classList.contains('open')) body.style.height = 'auto';
    }, { once: true });
  }
}

// ============================================
// RENDER GALLERY
// ============================================
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = gallerySections.map((section, idx) => {
    const photosHtml = section.photos.map((photo, i) => {
      const classes = ['gallery-item'];
      if (photo.wide) classes.push('wide');
      if (photo.tall) classes.push('tall');
      const srcEncoded = encodeURI(photo.src);
      const altEsc = (photo.alt || 'Gallery photo').replace(/'/g, '&#39;');
      return `<div class="${classes.join(' ')}" onclick="openLightbox('${srcEncoded}', '${altEsc}')"><img src="${srcEncoded}" alt="${photo.alt || 'Gallery photo'}" loading="lazy" /></div>`;
    }).join('');

    return `
      <div class="gallery-season" id="season-${idx}">
        <button class="gallery-season-header" onclick="toggleSeason(${idx})" aria-expanded="false">
          <div class="gallery-season-info">
            <span class="gallery-season-name">${section.season}</span>
            <span class="gallery-season-count">${section.photos.length} photos</span>
          </div>
          <span class="gallery-season-chevron"></span>
        </button>
        <div class="gallery-season-body" id="season-body-${idx}" style="height:0">
          <div class="gallery-season-inner">
            <div class="gallery-grid">${photosHtml}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

renderGallery();
