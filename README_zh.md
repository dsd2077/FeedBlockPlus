# FeedSwitch

FeedSwitch 是一个浏览器扩展，用于屏蔽各大网站的干扰性内容，帮助用户专注于更重要的事情。

## 下载

- **谷歌商店**: [FeedSwitch](https://chromewebstore.google.com/detail/plbnbgmddbbloalbmnkejcmdkeleocai?utm_source=item-share-cb)
- **微软商店**: [FeedCleaner](https://microsoftedge.microsoft.com/addons/detail/feedcleaner/lnghkaabjkpoanjchlkelddoppakakad)

# 目录

- [FeedSwitch](#feedswitch)
- [目录](#目录)
  - [下载](#下载)
  - [支持的网站及屏蔽内容](#支持的网站及屏蔽内容)
    - [1. Bilibili (bilibili.com)](#1-bilibili-bilibilicom)
    - [2. 百度 (baidu.com)](#2-百度-baiducom)
    - [3. 知乎 (zhihu.com)](#3-知乎-zhihucom)
    - [4. CSDN (csdn.net)](#4-csdn-csdnnet)
    - [5. 掘金 (juejin.cn)](#5-掘金-juejincn)
    - [6. 小红书 (xiaohongshu.com)](#6-小红书-xiaohongshucom)
    - [7. 简书 (jianshu.com)](#7-简书-jianshucom)
    - [8. YouTube (youtube.com)](#8-youtube-youtubecom)
    - [9. 抖音 (douyin.com)](#9-抖音-douyincom)
    - [10. 微博 (weibo.com)](#10-微博-weibocom)
    - [11. 腾讯视频 (v.qq.com)](#11-腾讯视频-vqqcom)
    - [12. 爱奇艺 (iqiyi.com)](#12-爱奇艺-iqiyicom)
    - [13. 优酷 (youku.com)](#13-优酷-youkucom)
    - [14. TikTok (tiktok.com)](#14-tiktok-tiktokcom)
    - [15. Facebook (facebook.com)](#15-facebook-facebookcom)
    - [16. X (x.com)](#16-x-xcom)
    - [17. Instagram (instagram.com)](#17-instagram-instagramcom)
    - [18. Reddit (reddit.com)](#18-reddit-redditcom)
  - [工作原理](#工作原理)
  - [特点](#特点)
  - [使用说明](#使用说明)
  - [注意事项](#注意事项)

## 支持的网站及屏蔽内容

### 1. Bilibili (bilibili.com)

**屏蔽内容：**

- 首页信息流
- 头部频道导航
- bilibili 热搜
- 广告屏蔽提示
- 侧边推荐栏
- 播放结束页相关推荐

**额外功能：**

- 移除搜索框占位符文本

### 2. 百度 (baidu.com)

**屏蔽内容：**

- 百度热搜
- 首页广告
- 搜索结果右侧栏

### 3. 知乎 (zhihu.com)

**屏蔽内容：**

- 首页信息流
- 热搜卡片
- 帖子右侧内容区域

**额外功能：**

- 移除搜索框占位符文本
- 删除"搜索发现"相关内容
- 调整搜索主区域和帖子内容区域宽度为 1000px

### 4. CSDN (csdn.net)

**屏蔽内容：**

- 轮播幻灯片付费内容
- 侧边栏热门文章
- 侧边栏分类
- 侧边栏归档
- 侧边栏新评论
- 工具栏广告
- 右侧固定隐藏元素

### 5. 掘金 (juejin.cn)

**屏蔽内容：**

- 侧边栏块
- 顶部横幅容器
- 文章区域中的图片广告

### 6. 小红书 (xiaohongshu.com)

**屏蔽内容：**

- 首页信息流
- 频道导航

### 7. 简书 (jianshu.com)

**屏蔽内容：**

- 侧边栏

### 8. YouTube (youtube.com)

**屏蔽内容：**

- 首页信息流（仅限首页，不影响订阅页面）
- 侧边栏导航项：
  - 首页/Home 链接
  - Shorts/短片 链接
- 观看页右侧推荐视频区域

**额外功能：**

- 自动移除页面标题中的通知数字
- 隐藏侧边栏的"探索"部分（第三个导航区域）

### 9. 抖音 (douyin.com)

**屏蔽内容：**

- 右侧容器内容
- 导航标签：
  - 精选标签
  - 推荐标签
  - 直播标签
  - VS 标签
  - 系列标签

### 10. 微博 (weibo.com)

**屏蔽内容：**

- 首页信息流
- 加载进度条
- 右侧边栏内容
- 视频推荐流
- 视频榜单
- 搜索结果侧边栏
- 精选频道

### 11. 腾讯视频 (v.qq.com)

**屏蔽内容：**

- 首页信息流
- 频道页面
- 网页频道
- 频道页面滚动区域
- 弹性容器
- 热搜区域
- 热门游戏部分
- 首页内容包装器

### 12. 爱奇艺 (iqiyi.com)

**屏蔽内容：**

- 首页信息流
- 页面视图容器（非搜索模式下）

**额外功能：**

- 智能检测搜索模式并相应调整屏蔽

### 13. 优酷 (youku.com)

**屏蔽内容：**

- 首页信息流

### 14. TikTok (tiktok.com)

**屏蔽内容：**

- 主页热门页侧边操作容器
- Explore 探索入口及相关容器（侧栏/顶栏）
- Live 入口及相关容器（侧栏/顶栏）
- 探索页布局容器

**额外功能：**

- 在探索页相关容器内自动静音视频/音频
- 隐藏探索页中的进度指示元素
- 对探索页容器进行兜底隐藏

### 15. Facebook (facebook.com)

**屏蔽内容：**

- 信息流容器
- 单条动态
- Watch 入口
- Gaming 入口及相关外链
- Reels 入口

### 16. X (x.com)

**屏蔽内容：**

- 首页/探索页信息流
- 单条推文容器
- 推文外层单元（虚拟列表 cell）
- 新帖子提示条

**生效范围：**

- 仅在 /home、/explore、/communities 生效

### 17. Instagram (instagram.com)

**屏蔽内容：**

- 主内容区域
- 页脚内容信息

**生效范围：**

- 首页 /、/explore、/reels

### 18. Reddit (reddit.com)

**屏蔽内容：**

- 首页信息流

**生效范围：**

- `/`、`/r/all`、`/explore`、`/r/popular`

## 工作原理

扩展通过以下方式工作：

1. **CSS 选择器屏蔽**：使用预定义的 CSS 选择器隐藏不需要的页面元素
2. **动态检查**：部分网站包含额外的 JavaScript 检查，用于处理动态生成的内容
3. **样式调整**：某些网站会调整页面布局以优化用户体验

## 特点

- 🎯 **精准屏蔽**：针对每个网站的特定干扰元素进行屏蔽
- 🔧 **动态处理**：支持动态生成内容的处理
- 🎨 **布局优化**：在屏蔽内容的同时优化页面布局
- 🚀 **性能友好**：轻量级实现，不影响页面加载性能

## 使用说明

1. 安装浏览器扩展
2. 访问支持的网站
3. 扩展将自动屏蔽配置中定义的干扰内容
4. 享受更清洁、专注的浏览体验

## 注意事项

- 屏蔽规则可能会随着网站的更新而需要调整
- 某些功能（如重定向）可能会改变网站的默认行为
- 不同浏览器或设备上的表现可能略有差异

---

_本扩展旨在提供更好的网络浏览体验，减少干扰内容，帮助用户专注于重要信息。_
