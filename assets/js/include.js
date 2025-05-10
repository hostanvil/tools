document.addEventListener("DOMContentLoaded", () => {
  const inject = async (selector, url) => {
    try {
      const res = await fetch(url);
      const html = await res.text();
      document.querySelector(selector).innerHTML = html;
    } catch (e) {
      console.error(`Failed to load ${url}:`, e);
    }
  };

  inject("#header", "/partials/header.html");
  inject("#footer", "/partials/footer.html");
});
