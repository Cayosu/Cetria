// Detect current chapter number from filename
const match = window.location.pathname.match(/chapter(\d+)\.html$/);
if(match) {
    const current = parseInt(match[1]);

    const navContainer = document.getElementById("chapter-nav");
    navContainer.classList.add("chapter-nav");

    let html = "";

    // Previous link
    if(current > 1) {
        html += `<a class="prev-chapter" href="chapter${current - 1}.html">← Previous</a>`;
    } else {
        html += `<a class="prev-chapter" href="/toc.html">← Table of Contents</a>`;
    }

    // Next link - only if next chapter file actually exists
    const totalChapters = 2; // Change according to actual chapter count

    if(current < totalChapters) {
        html += `<a class="next-chapter" href="chapter${current + 1}.html">Next →</a>`;
    }

    navContainer.innerHTML = html;
}