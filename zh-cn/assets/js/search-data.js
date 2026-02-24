
const currentUrl = window.location.href;
const siteUrl = "https://yuruijin.github.io";
let updatedUrl = currentUrl.replace("https://yuruijin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于我",
    title: "关于我",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "一个简洁的学术个人主页主题",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-论文发表",
          title: "论文发表",
          description: "按类别反向时间顺序排列的论文列表。由 jekyll-scholar 自动生成。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "个人项目作品集展示。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-代码仓库",
          title: "代码仓库",
          description: "我的 GitHub 代码仓库与开源贡献。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/repositories/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "我的个人简历。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "nav-团队成员",
          title: "团队成员",
          description: "实验室或团队成员介绍",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/people/";
          },
        },{id: "dropdown-书架",
              title: "书架",
              description: "",
              section: "下拉菜单",
              handler: () => {
                window.location.href = "/zh-cn/books/";
              },
            },{id: "post-带有-plotly-js-的文章",
        
          title: "带有 plotly.js 的文章",
        
        description: "这是包含 plotly.js 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/plotly/";
          
        },
      },{id: "post-读书笔记-机器人工程师学习计划",
        
          title: "读书笔记：机器人工程师学习计划",
        
        description: "推荐知乎博主 YY硕 的文章《机器人工程师学习计划》，系统梳理机器人领域的核心知识体系。",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/robotics-engineer-learning-plan/";
          
        },
      },{id: "post-带有图片画廊的文章",
        
          title: "带有图片画廊的文章",
        
        description: "这是包含图片画廊的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/photo-gallery/";
          
        },
      },{id: "post-带有选项卡的文章",
        
          title: "带有选项卡的文章",
        
        description: "这是包含选项卡的文章示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/tabs/";
          
        },
      },{id: "post-带有-typograms-的文章",
        
          title: "带有 typograms 的文章",
        
        description: "这是包含 typograms 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/typograms/";
          
        },
      },{id: "post-可被引用的文章",
        
          title: "可被引用的文章",
        
        description: "这是可被引用的文章的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/post-citation/";
          
        },
      },{id: "post-带有伪代码的文章",
        
          title: "带有伪代码的文章",
        
        description: "这是包含伪代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/pseudocode/";
          
        },
      },{id: "post-带有代码差异的文章",
        
          title: "带有代码差异的文章",
        
        description: "这是如何显示代码差异",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/code-diff/";
          
        },
      },{id: "post-带有高级图片组件的文章",
        
          title: "带有高级图片组件的文章",
        
        description: "这是高级图片组件的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/advanced-images/";
          
        },
      },{id: "post-带有-vega-lite-的文章",
        
          title: "带有 vega lite 的文章",
        
        description: "这是包含 vega lite 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/vega-lite/";
          
        },
      },{id: "post-带有-geojson-的文章",
        
          title: "带有 geojson 的文章",
        
        description: "这是包含 geojson 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/geojson-map/";
          
        },
      },{id: "post-带有-echarts-的文章",
        
          title: "带有 echarts 的文章",
        
        description: "这是包含 echarts 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/echarts/";
          
        },
      },{id: "post-带有-chart-js-的文章",
        
          title: "带有 chart.js 的文章",
        
        description: "这是包含 chart.js 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/chartjs/";
          
        },
      },{id: "post-带有-tikzjax-的文章",
        
          title: "带有 TikZJax 的文章",
        
        description: "这是包含 TikZ 代码的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tikzjax/";
          
        },
      },{id: "post-带有参考文献的文章",
        
          title: "带有参考文献的文章",
        
        description: "带有参考文献的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/post-bibliography/";
          
        },
      },{id: "post-带有-jupyter-notebook-的文章",
        
          title: "带有 jupyter notebook 的文章",
        
        description: "带有 jupyter notebook 的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-带有自定义引用块的文章",
        
          title: "带有自定义引用块的文章",
        
        description: "带有自定义引用块的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-带有侧边栏目录的文章",
        
          title: "带有侧边栏目录的文章",
        
        description: "带有侧边栏目录的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-带有音频的文章",
        
          title: "带有音频的文章",
        
        description: "这是包含音频的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/audios/";
          
        },
      },{id: "post-带有视频的文章",
        
          title: "带有视频的文章",
        
        description: "这是包含视频的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/videos/";
          
        },
      },{id: "post-使用-bootstrap-tables-展示精美表格",
        
          title: "使用 Bootstrap Tables 展示精美表格",
        
        description: "如何使用 Bootstrap Tables 的示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tables/";
          
        },
      },{id: "post-带有目录的文章",
        
          title: "带有目录的文章",
        
        description: "带有目录的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/table-of-contents/";
          
        },
      },{id: "post-带有-giscus-评论的文章",
        
          title: "带有 giscus 评论的文章",
        
        description: "带有 giscus 评论的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2022/giscus-comments/";
          
        },
      },{id: "post-带有重定向的文章",
        
          title: "带有重定向的文章",
        
        description: "您也可以重定向到资源，如 PDF",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/assets/pdf/zh-cn/example_pdf.pdf";
          
        },
      },{id: "post-带有图表的文章",
        
          title: "带有图表的文章",
        
        description: "带有图表的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2021/diagrams/";
          
        },
      },{id: "post-带有-twitter-的文章",
        
          title: "带有 Twitter 的文章",
        
        description: "带有 Twitter 的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2020/twitter/";
          
        },
      },{id: "post-distill-样式的博客文章",
        
          title: "distill 样式的博客文章",
        
        description: "distill 样式博客文章及主要元素的示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2018/distill/";
          
        },
      },{id: "post-带有-disqus-评论的文章",
        
          title: "带有 disqus 评论的文章",
        
        description: "带有 disqus 评论的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/disqus-comments/";
          
        },
      },{id: "post-带有数学公式的文章",
        
          title: "带有数学公式的文章",
        
        description: "带有数学公式的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/math/";
          
        },
      },{id: "post-带有代码的文章",
        
          title: "带有代码的文章",
        
        description: "带有代码的博客文章示例",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/code/";
          
        },
      },{id: "post-带有图片的文章",
        
          title: "带有图片的文章",
        
        description: "这是包含图片的示例效果",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/images/";
          
        },
      },{id: "post-带有格式化和链接的文章",
        
          title: "带有格式化和链接的文章",
        
        description: "三月与四月，期待夏天",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/the_godfather/";
            },},{id: "news-一个简单的内联公告",
          title: '一个简单的内联公告。',
          description: "",
          section: "动态",},{id: "news-带有详情的长公告",
          title: '带有详情的长公告',
          description: "",
          section: "动态",handler: () => {
              window.location.href = "/zh-cn/news/announcement_2/";
            },},{id: "news-一个带有-markdown-表情符号的简单内联公告-sparkles-smile",
          title: '一个带有 Markdown 表情符号的简单内联公告！:sparkles: :smile:',
          description: "",
          section: "动态",},{id: "projects-基于双板簧机构的变刚度夹爪",
          title: '基于双板簧机构的变刚度夹爪',
          description: "一种轻量紧凑的双板簧变刚度夹爪，用于工业场景中对不同硬度物体的自适应抓取。发表于 IEEE CASE 2023。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/variable_stiffness_gripper/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: '社交账号',
        handler: () => {
          window.open("/assets/pdf/zh-cn//assets/pdf/[LANG]/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: '发送邮件',
        section: '社交账号',
        handler: () => {
          window.open("mailto:%79%75%72%75%69.%6A%69%6E%30%30%31%32%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交账号',
        handler: () => {
          window.open("https://github.com/YuruiJin", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交账号',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '社交账号',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=R3GqrO8AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: '社交账号',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '切换到浅色模式',
      description: '将网站主题更改为浅色',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '切换到深色模式',
      description: '将网站主题更改为深色',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系统默认主题',
      description: '将网站主题更改为系统默认',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
