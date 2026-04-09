// ============================================
// BLOG POSTS — ADD YOUR POSTS HERE
// ============================================
// To add a new post:
// 1. Copy one of the objects below
// 2. Paste it at the TOP of the array (most recent first)
// 3. Fill in your date, title, excerpt, and content
// 4. Save the file
// ============================================

const posts = [
  {
    id: "post-3",
    date: "March 2025",
    dateISO: "2025-03-01",
    title: "Support raising has begun!",
    excerpt: "We're officially underway. I've had 12 appointments in the first two weeks and God is moving in incredible ways through the generosity of friends and family...",
    content: `
      <p>We're officially underway. I've had 12 appointments in the first two weeks and God is moving in incredible ways through the generosity of friends and family.</p>
      <p>[Write the rest of your update here. Share what God is doing, what you're learning, and how people can pray for you. This is placeholder content — replace it with your real story.]</p>
      <p>Prayer requests:</p>
      <ul>
        <li>[Prayer request 1]</li>
        <li>[Prayer request 2]</li>
        <li>[Prayer request 3]</li>
      </ul>
    `
  },
  {
    id: "post-2",
    date: "February 2025",
    dateISO: "2025-02-01",
    title: "Training completed at headquarters",
    excerpt: "Spent three weeks with our sending organization. The teaching was rich and the community was life-giving. Here's what stood out to me most...",
    content: `
      <p>Spent three weeks with our sending organization. The teaching was rich and the community was life-giving.</p>
      <p>[Write the rest of your update here. This is placeholder content — replace it with your real story.]</p>
    `
  },
  {
    id: "post-1",
    date: "January 2025",
    dateISO: "2025-01-01",
    title: "The call confirmed",
    excerpt: "After months of prayer, counsel, and conversation, I accepted the offer to serve with this ministry. Here's the story of how it happened...",
    content: `
      <p>After months of prayer, counsel, and conversation, I accepted the offer to serve with Freedom House International.</p>
      <p>[Write the rest of your update here. This is placeholder content — replace it with your real story.]</p>
    `
  }
];

// ============================================
// RENDER POSTS (don't edit below this line)
// ============================================
function renderPosts() {
  const grid = document.getElementById('updatesGrid');
  if (!grid) return;

  const recent = posts.slice(0, 3);
  grid.innerHTML = recent.map(post => `
    <a class="update-card reveal" href="blog.html#${post.id}">
      <div class="update-date">${post.date}</div>
      <div class="update-title">${post.title}</div>
      <div class="update-preview">${post.excerpt}</div>
      <span class="update-read-more">Read more →</span>
    </a>
  `).join('');
}

function renderBlogList() {
  const list = document.getElementById('blogList');
  if (!list) return;

  list.innerHTML = posts.map(post => `
    <div class="blog-post-item" id="${post.id}">
      <div class="blog-post-date">${post.date}</div>
      <span class="blog-post-title">${post.title}</span>
      <div class="blog-post-excerpt">${post.excerpt}</div>
      <div class="blog-post-content">${post.content}</div>
    </div>
  `).join('');
}

renderPosts();
renderBlogList();
