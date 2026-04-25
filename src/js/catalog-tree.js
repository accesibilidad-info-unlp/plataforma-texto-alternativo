(() => {
  const STORAGE_KEY = "catalog:last-open-year";

  const getEscapedSelectorValue = (value) => {
    if (window.CSS && typeof window.CSS.escape === "function") {
      return window.CSS.escape(value);
    }
    return value.replace(/([\\"'])/g, "\\$1");
  };

  const init = () => {
    const wrapper = document.querySelector(".catalog-wrapper");
    if (!wrapper || wrapper.dataset.catalogInit === "true") return;
    wrapper.dataset.catalogInit = "true";

    const yearNodes = Array.from(
      wrapper.querySelectorAll('details[data-catalog-level="anio"]')
    );

    const openAncestors = (details) => {
      let parent = details.parentElement?.closest("details[data-catalog-node]");
      while (parent) {
        parent.open = true;
        parent = parent.parentElement?.closest("details[data-catalog-node]");
      }
    };

    const closeOtherYears = (current) => {
      yearNodes.forEach((node) => {
        if (node !== current) node.open = false;
      });
    };

    const savedPath = localStorage.getItem(STORAGE_KEY);
    if (savedPath) {
      const selector = `details[data-catalog-level="anio"][data-catalog-path="${getEscapedSelectorValue(savedPath)}"]`;
      const savedNode = wrapper.querySelector(selector);
      if (savedNode) {
        savedNode.open = true;
        openAncestors(savedNode);
      }
    }

    yearNodes.forEach((node) => {
      node.addEventListener("toggle", () => {
        if (!node.open) return;
        closeOtherYears(node);
        openAncestors(node);
        const path = node.dataset.catalogPath;
        if (path) localStorage.setItem(STORAGE_KEY, path);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
