<div align="center">
  <a href="./README_zh.md">中文</a> / English
</div>

# FeedBlockPlus

FeedBlockPlus is an extension to manage time spent on websites and to block feeds and unwanted content.

# Table of Contents

- [Supported Websites and Blocked Content](#supported-websites-and-blocked-content)
  - [1. Bilibili (bilibili.com)](#1-bilibili-bilibilicom)
  - [2. Baidu (baidu.com)](#2-baidu-baiducom)
  - [3. Zhihu (zhihu.com)](#3-zhihu-zhihucom)
  - [4. CSDN (csdn.net)](#4-csdn-csdnnet)
  - [5. Juejin (juejin.cn)](#5-juejin-juejincn)
  - [6. Xiaohongshu (xiaohongshu.com)](#6-xiaohongshu-xiaohongshucom)
  - [7. Jianshu (jianshu.com)](#7-jianshu-jianshucom)
  - [8. YouTube (youtube.com)](#8-youtube-youtubecom)
  - [9. Douyin (douyin.com)](#9-douyin-douyincom)
  - [10. Weibo (weibo.com)](#10-weibo-weibocom)
  - [11. Tencent Video (v.qq.com)](#11-tencent-video-vqqcom)
  - [12. iQiyi (iqiyi.com)](#12-iqiyi-iqiyicom)
  - [13. Youku (youku.com)](#13-youku-youkucom)
- [How It Works](#how-it-works)
- [Features](#features)
- [Usage Instructions](#usage-instructions)
- [Notes](#notes)
- [Technical Implementation](#technical-implementation)

## Supported Websites and Blocked Content

### 1. Bilibili (bilibili.com)

**Blocked Content:**

- Main feed layout
- Header channel navigation
- Hot search trending areas and double trending displays
- Ad block tips

**Additional Features:**

- Remove search input placeholder text

### 2. Baidu (baidu.com)

**Blocked Content:**

- Hot search wrapper
- New search guide bubble
- Offset content area

### 3. Zhihu (zhihu.com)

**Blocked Content:**

- Main story feed
- Loading progress bar
- Hot search cards
- Specific style elements
- Post right-side content area

**Additional Features:**

- Remove search input placeholder text
- Delete "Search Discovery" related content
- Adjust search main area and post content area width to 1000px

### 4. CSDN (csdn.net)

**Blocked Content:**

- Carousel slide paid content
- Sidebar hot articles
- Sidebar categories
- Sidebar archives
- Sidebar new comments
- Toolbar advertisements
- Right-side fixed hidden elements

### 5. Juejin (juejin.cn)

**Blocked Content:**

- Sidebar blocks
- Top banner container
- Image advertisements in article areas

### 6. Xiaohongshu (xiaohongshu.com)

**Blocked Content:**

- Explore feeds
- Channel container

### 7. Jianshu (jianshu.com)

**Blocked Content:**

- Sidebar

### 8. YouTube (youtube.com)

**Blocked Content:**

- Homepage feed (homepage only, doesn't affect subscription page)
- Sidebar navigation items:
  - Home links
  - Shorts links

**Additional Features:**

- Automatically remove notification numbers from page title
- Hide sidebar "Explore" section (third navigation area)

### 9. Douyin (douyin.com)

**Blocked Content:**

- Right container content
- Navigation tabs:
  - Discover tab
  - Recommend tab
  - Live tab
  - VS tab
  - Series tab

**Additional Features:**

- Automatically redirect to featured page when accessing recommendation page

### 10. Weibo (weibo.com)

**Blocked Content:**

- Homepage feed
- Loading progress bars
- Right sidebar content
- Video recommendation feeds
- Video ranking lists
- Search result sidebars
- Featured channels

### 11. Tencent Video (v.qq.com)

**Blocked Content:**

- Main channel container
- Channel pages
- Web channels
- Channel page scroll areas
- Flex containers
- Hot search areas
- Popular games section
- Homepage content wrapper

### 12. iQiyi (iqiyi.com)

**Blocked Content:**

- Navigation sidebar
- Page view containers (when not in search mode)

**Additional Features:**

- Intelligently detects search mode and adjusts blocking accordingly

### 13. Youku (youku.com)

**Blocked Content:**

- Channel module containers (hides all child divs except the first one)

**Additional Features:**

- Uses dynamic hiding instead of removal for better compatibility

## How It Works

The extension works through the following methods:

1. **CSS Selector Blocking**: Uses predefined CSS selectors to hide unwanted page elements
2. **Dynamic Checking**: Some websites include additional JavaScript checks to handle dynamically generated content
3. **Style Adjustments**: Certain websites adjust page layout to optimize user experience

## Features

- 🎯 **Precise Blocking**: Targets specific disruptive elements for each website
- 🔧 **Dynamic Processing**: Supports handling of dynamically generated content
- 🎨 **Layout Optimization**: Optimizes page layout while blocking content
- 🚀 **Performance Friendly**: Lightweight implementation that doesn't affect page loading performance

## Usage Instructions

1. Install the browser extension
2. Visit supported websites
3. The extension will automatically block disruptive content defined in the configuration
4. Enjoy a cleaner, more focused browsing experience

## Notes

- Blocking rules may need adjustment as websites update
- Some features (like redirects) may change the website's default behavior
- Performance may vary slightly across different browsers or devices

## Technical Implementation

The extension is implemented based on the following technologies:

- **Content Script Injection**: Injects scripts when pages load
- **DOM Manipulation**: Dynamically hides or modifies page elements
- **CSS Selectors**: Precisely targets elements to be blocked
- **MutationObserver**: Monitors dynamic page changes

---

_This extension aims to provide a better web browsing experience, reduce distracting content, and help users focus on important information._
