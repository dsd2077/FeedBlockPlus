# FeedBlockPlus
FeedBlockPlus is an extension to manage time spent on websites and to block feeds and unwanted content.

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

## Developer Documentation

The configuration file is located at `config.js`. Each website's configuration includes:

- `targets`: Array of CSS selectors to block
- `extraCheck`: Optional additional JavaScript processing function

To add new websites or modify existing rules, please edit the `SITE_CONFIG` object.

---

*This extension aims to provide a better web browsing experience, reduce distracting content, and help users focus on important information.*
