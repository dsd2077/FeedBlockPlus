export const SITE_CONFIG = {
  "bilibili.com": {
    targets: [
      "main.bili-feed4-layout",
      "div.bili-header__channel",
      "div.header-channel",
      "#i_cecream > div.bili-feed4 > div.bili-header.large-header > div.bili-header__bar > div > div > div > div.trending > div.trendings-double",
      "#i_cecream > div.bili-feed4 > div.bili-header.large-header > div.bili-header__bar > div > div > div > div.trending > div",
      "div.adblock-tips",
    ],
    extraCheck: (root) => {
      const searchInput = root.querySelector(".nav-search-input");
      if (searchInput?.placeholder) {
        searchInput.removeAttribute("placeholder");
      }
    },
  },
  "baidu.com": {
    targets: [
      "div.s-hotsearch-wrapper",
      "div.new_search_guide_bub",
      "div.cr-offset",
    ],
  },
  "zhihu.com": {
    targets: [
      "div.Topstory",
      "div.LoadingBar",
      "div.Card.TopSearch.TopSearch--new",
      "div.css-knqde",
      "#root > div > main > div > div.Post-Row-Content > div.Post-Row-Content-right.css-1qyytj7",
      // 'div.AutoComplete-group'
    ],
    extraCheck: (root) => {
      // Remove placeholder from search input
      const searchInput = root.querySelector("#Popover1-toggle");
      if (searchInput?.placeholder) {
        searchInput.removeAttribute("placeholder");
      }
      // Remove search discovery from search box
      const discoveryGroups = root.querySelectorAll(".AutoComplete-group");
      discoveryGroups.forEach((group) => {
        const label = group.querySelector(".SearchBar-label");
        if (label?.textContent?.includes("搜索发现")) {
          group.remove();
        }
      });
      const searchMain = root.querySelector("#SearchMain");
      if (searchMain) {
        searchMain.style.width = "1000px"; // Set inline style for higher priority
      }
      const Post_Row_Content_left = document.querySelector(
        "#root > div > main > div > div.Post-Row-Content > div"
      );
      if (Post_Row_Content_left) {
        Post_Row_Content_left.style.width = "1000px"; // Set inline style for higher priority
      }
    },
  },
  "csdn.net": {
    targets: [
      "div.swiper-slide-box-remuneration",
      "div#asideHotArticle.aside-box",
      "div#asideCategory.aside-box ",
      "div#asideArchive.aside-box",
      "div#asideNewComments.aside-box",
      "div.toolbar-advert",
      "div.rightside-fixed-hide",
    ],
  },
  "juejin.cn": {
    targets: [
      "div.sidebar-block.shadow",
      "div.top-banners-container",
      "#juejin > div:nth-child(1) > div > main > div > div.main-area.article-area > article > img",
    ],
  },
  "xiaohongshu.com": {
    targets: ["#exploreFeeds", "#mfContainer > div.channel-container"],
  },
  "jianshu.com": {
    targets: ["aside._2OwGUo"],
  },
  "youtube.com": {
    targets: [
      // Home page feed (home page only, doesn't affect subscription page)
      "ytd-browse[page-subtype='home'] ytd-rich-grid-renderer",

      // Sidebar navigation items (Home, Shorts, etc.)
      "ytd-guide-entry-renderer:has([title*='首页'])",
      "ytd-guide-entry-renderer:has([title*='Home'])",
      "ytd-guide-entry-renderer:has([title*='Shorts'])",
      "ytd-guide-entry-renderer:has([title*='短片'])",
    ],
    extraCheck: (root) => {
      // Hide notification number in title
      const removeNotificationNumber = (titleElement) => {
        const titleRegex = /^\(\d+\) +/;
        if (titleRegex.test(titleElement.innerText)) {
          titleElement.innerText = titleElement.innerText.replace(
            titleRegex,
            ""
          );
        }
      };

      const title = root.querySelector("title");
      if (title && title.nodeType === Node.ELEMENT_NODE) {
        removeNotificationNumber(title);
        // Monitor title changes
        const observer = new MutationObserver(() => {
          const currentTitle = root.querySelector("title");
          if (currentTitle && currentTitle.nodeType === Node.ELEMENT_NODE) {
            removeNotificationNumber(currentTitle);
          }
        });
        try {
          observer.observe(title, { childList: true });
        } catch (e) {
          console.warn("Failed to observe title element:", e);
        }
      }

      // Block explore section
      const removeExploreSection = () => {
        // Find ytd-guide-section-renderer elements under #sections, hide the third one
        const sectionsContainer = root.querySelector("#sections");
        if (sectionsContainer) {
          const guideSections = sectionsContainer.querySelectorAll(
            "ytd-guide-section-renderer"
          );
          if (guideSections.length >= 3) {
            guideSections[2].style.display = "none"; // Hide the third element (index 2)
          }
        }
      };

      // Execute explore section blocking
      removeExploreSection();
    },
  },
  "douyin.com": {
    targets: [
      "#douyin-right-container > div.Da2ISZXp.route-scroll-container.IhmVuo1S",

      // Featured navigation items - use class name selector for more precision
      "div.tab-discover",
      "div.tab-recommend",
      "div.tab-live",
      "div.tab-vs",
      "div.tab-series",
    ],
    extraCheck: () => {
      // 重定向到AI搜索页面
      const currentUrl = window.location.href;
      if (currentUrl.includes("douyin.com/?recommend=1")) {
        window.location.replace("https://www.douyin.com/jingxuan");
      }
    },
  },
};
