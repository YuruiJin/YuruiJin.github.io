
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
            },{id: "post-读书笔记-机器人工程师学习计划",
        
          title: "读书笔记：机器人工程师学习计划",
        
        description: "推荐知乎博主 YY硕 的文章《机器人工程师学习计划》，系统梳理机器人领域的核心知识体系。",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/robotics-engineer-learning-plan/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/the_godfather/";
            },},{id: "news-在-robomaster-2022-全国大学生机器人大赛总决赛中荣获全国一等奖",
          title: '在 RoboMaster 2022 全国大学生机器人大赛总决赛中荣获全国一等奖！🏆',
          description: "",
          section: "动态",},{id: "news-我们的论文-a-variable-stiffness-gripper-with-dual-leaf-spring-mechanism-在新西兰奥克兰的-ieee-case-2023-会议上发表",
          title: '我们的论文”A Variable Stiffness Gripper with Dual Leaf-Spring Mechanism”在新西兰奥克兰的 IEEE CASE 2023 会议上发表！📄',
          description: "",
          section: "动态",},{id: "news-开始在布里斯托大学和西英格兰大学攻读机器人学硕士学位",
          title: '开始在布里斯托大学和西英格兰大学攻读机器人学硕士学位！🤖',
          description: "",
          section: "动态",},{id: "projects-robomaster-步兵与工程机器人设计",
          title: 'RoboMaster 步兵与工程机器人设计',
          description: "在 RoboMaster 全国大学生机器人大赛中，负责步兵机器人悬架系统和工程机器人机械臂机构设计与优化。2022 年荣获全国一等奖。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/robomaster_robot/";
            },},{id: "projects-基于-bert-的电影评论情感分析",
          title: '基于 BERT 的电影评论情感分析',
          description: "开发基于 BERT 的情感分析模型，采用数据增强与重采样技术处理数据不平衡问题，使用 LIME 和 SHAP 工具提升模型可解释性。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/sentiment_analysis_bert/";
            },},{id: "projects-基于可变刚度执行器的单腿机构与腿式机器人",
          title: '基于可变刚度执行器的单腿机构与腿式机器人',
          description: "通过优化单腿机构中弹性元件的位置与方向，提升机器人跳跃性能与能量效率。暑期本科生科研奖学金 (SURF) 项目。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/vsa_legged_robot/";
            },},{id: "projects-esp32-远程温湿度监控系统",
          title: 'ESP32 远程温湿度监控系统',
          description: "基于 ESP32 微控制器开发的远程温湿度监控系统，支持 WiFi 连接和 MQTT 协议，为研发实习期间完成的项目。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/esp32_monitoring_system/";
            },},{id: "projects-基于双板簧机构的变刚度夹爪",
          title: '基于双板簧机构的变刚度夹爪',
          description: "一种轻量紧凑的双板簧变刚度夹爪，用于工业场景中对不同硬度物体的自适应抓取。发表于 IEEE CASE 2023。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/variable_stiffness_gripper/";
            },},{id: "projects-外骨骼大腿部件拓扑优化与有限元分析",
          title: '外骨骼大腿部件拓扑优化与有限元分析',
          description: "基于 ANSYS 对外骨骼大腿部件进行拓扑优化与有限元分析，优化网格策略以提高收敛速度并减少计算资源消耗。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/exoskeleton_topology_optimization/";
            },},{id: "projects-智能婴儿巡检机器人",
          title: '智能婴儿巡检机器人',
          description: "设计机械结构并增强机器人手臂的保护外壳，用于智能婴儿监护机器人。获江苏省一等奖和全国二等奖。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/infant_inspection_robot/";
            },},{id: "projects-rmo-08-麦克纳姆轮全方位移动机器人",
          title: 'RMO-08 麦克纳姆轮全方位移动机器人',
          description: "负责机械设计与建模，开发逆运动学解算器实现全方位运动，基于 Arduino 搭建 PID 闭环控制系统。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/mecanum_wheel_robot/";
            },},{id: "projects-基于-rrt-的六轴机械臂轨迹规划优化",
          title: '基于 RRT* 的六轴机械臂轨迹规划优化',
          description: "基于 MoveIt 框架改进 RRT* 算法，并设计后处理优化算法平滑轨迹、降低关节冲击。在 Gazebo 仿真环境中验证。（本科毕业设计）",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/trajectory_planning_rrt/";
            },},{id: "projects-pololu-3pi-机器人自主导航与传感器融合",
          title: 'Pololu 3pi 机器人自主导航与传感器融合',
          description: "在 Pololu 3pi 平台上开发全自主移动机器人系统，实现传感器融合、实时路径导航与目标操控。",
          section: "项目",handler: () => {
              window.location.href = "/zh-cn/projects/pololu_3pi_navigation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: '社交账号',
        handler: () => {
          window.open("https://yuruijin.github.io/cv/", "_blank");
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
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: '社交账号',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuruijin", "_blank");
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
    },];
