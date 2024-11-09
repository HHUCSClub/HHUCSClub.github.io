import { sidebar } from "vuepress-theme-hope";
import { getNews } from "./getNews.ts";

export default sidebar(
  [
    {
      text: "主页", link: "/", icon: "home"
    },
    {
      text: "简介", link: "/Introduction/", collapsible: true, children: [
        {
          text: "社团概况", link: "/Introduction/"
        },
        {
          text: "社团历史", link: "/Introduction/History"
        },
      ]
    },
    {
      text: "新闻", link: "/News/", collapsible: true, children: getNews()
    },
    {
      text: "学习路线", link: "/LearningMap/"
    },
    {
      text: "投稿", link: "/Blog/"
    },
    {
      text: "公告", link: "/Notice/"
    },
    {
      text: "贡献者", link: "/Contributor/"
    },
    {
      text: "加入我们", link: "/JoinUs/", collapsible: true, children: [
        {
          text: "学生组织与社团简介", link: "/JoinUs/CampusRelation"
        }
      ]
    },
  ]
);
