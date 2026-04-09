// ============================================
// PHOTO GALLERY — ADD YOUR PHOTOS HERE
// ============================================
// To add a new photo:
// 1. Copy your image file into the /images/ folder
// 2. Add a new object to the array below
// 3. Set "wide: true" to make it span 2 columns
//    Set "tall: true" to make it span 2 rows
//    Leave both out for a standard square
// ============================================

const galleryPhotos = [
  // Example entries — replace with your real photos:
  // { src: "images/field-1.jpg", alt: "Ministry team", wide: true, tall: true },
  // { src: "images/community.jpg", alt: "Community outreach" },
  // { src: "images/training.jpg", alt: "Training week" },

  // Placeholder tiles shown until you add photos:
  { placeholder: true, label: "Add photos to images/ folder", wide: true, tall: true },
  { placeholder: true, label: "Photo" },
  { placeholder: true, label: "Photo" },
  { placeholder: true, label: "Photo" },
  { placeholder: true, label: "Photo" },
];

// ============================================
// RENDER GALLERY (don't edit below this line)
// ============================================
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = galleryPhotos.map((photo, i) => {
    const classes = ['gallery-item'];
    if (photo.wide) classes.push('wide');
    if (photo.tall) classes.push('tall');

    if (photo.placeholder) {
      return `<div class="${classes.join(' ')}"><div class="gallery-placeholder">${photo.label || 'Photo'}</div></div>`;
    }

    return `
      <div class="${classes.join(' ')}" onclick="openLightbox('${photo.src}', '${photo.alt || ''}')">
        <img src="${photo.src}" alt="${photo.alt || 'Gallery photo ' + (i+1)}" loading="lazy" />
      </div>
    `;
  }).join('');
}

renderGallery();
