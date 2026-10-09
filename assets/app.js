/* Local progressive enhancement only. No telemetry, network requests or uploads. */
(() => {
  "use strict";

  const initialise = () => {
    document.body.classList.add("js");

    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.getElementById("primary-nav");

    if (header && navToggle && navigation) {
      navToggle.hidden = false;
      const setMenu = (open) => {
        header.dataset.navOpen = String(open);
        navToggle.setAttribute("aria-expanded", String(open));
      };

      setMenu(false);
      navToggle.addEventListener("click", () => {
        setMenu(navToggle.getAttribute("aria-expanded") !== "true");
      });
      navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenu(false);
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
          setMenu(false);
          navToggle.focus();
        }
      });
      document.addEventListener("click", (event) => {
        if (!header.contains(event.target)) setMenu(false);
      });
      const desktopView = window.matchMedia("(min-width: 801px)");
      const resetForDesktop = (event) => { if (event.matches) setMenu(false); };
      if (desktopView.addEventListener) desktopView.addEventListener("change", resetForDesktop);
    }

    document.querySelectorAll(".example-shell").forEach((shell, shellIndex) => {
      const tabList = shell.querySelector(".example-tabs");
      if (!tabList) return;
      const tabs = Array.from(tabList.querySelectorAll("button[data-example]"));
      const pairs = tabs.map((tab) => ({
        tab,
        panel: Array.from(shell.querySelectorAll("[data-example-panel]"))
          .find((panel) => panel.dataset.examplePanel === tab.dataset.example)
      })).filter((pair) => pair.panel);
      if (!pairs.length) return;

      tabList.setAttribute("role", "tablist");
      if (!tabList.hasAttribute("aria-label")) {
        tabList.setAttribute("aria-label", "Illustrative evidence example");
      }
      pairs.forEach(({ tab, panel }, index) => {
        const prefix = `example-${shellIndex + 1}-${index + 1}`;
        if (!tab.id) tab.id = `${prefix}-tab`;
        if (!panel.id) panel.id = `${prefix}-panel`;
        tab.type = "button";
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", panel.id);
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", tab.id);
        panel.tabIndex = 0;
      });

      const selectTab = (selectedIndex, focus = false) => {
        pairs.forEach(({ tab, panel }, index) => {
          const selected = index === selectedIndex;
          tab.setAttribute("aria-selected", String(selected));
          tab.tabIndex = selected ? 0 : -1;
          panel.hidden = !selected;
        });
        if (focus) pairs[selectedIndex].tab.focus();
      };

      pairs.forEach(({ tab }, index) => {
        tab.addEventListener("click", () => selectTab(index));
        tab.addEventListener("keydown", (event) => {
          let nextIndex;
          if (event.key === "ArrowRight") nextIndex = (index + 1) % pairs.length;
          if (event.key === "ArrowLeft") nextIndex = (index - 1 + pairs.length) % pairs.length;
          if (event.key === "Home") nextIndex = 0;
          if (event.key === "End") nextIndex = pairs.length - 1;
          if (nextIndex !== undefined) {
            event.preventDefault();
            selectTab(nextIndex, true);
          }
        });
      });

      const initialIndex = pairs.findIndex(({ tab }) => tab.getAttribute("aria-selected") === "true");
      selectTab(initialIndex >= 0 ? initialIndex : 0);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
