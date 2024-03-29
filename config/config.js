/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-11-27 09:54:17
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-13 15:24:23
 */

export default {
    routes: [
        {path: "/login", component: "login"},
        {path: "/page4", component: "../layout"},
        {path: "/page1", component: "../layout", routes: [
            {path: "page1", component: "page1"},
            {path: "page2", component: "page2"}
        ]},
        {path: "/page3", component: "../layout/index_02.jsx", routes: [
            {path: "page3", component: "page3"}
        ]},
        //  不在左侧菜单中的页面，由于只能存在一个"/"路径所以用"/o"表示
        {path: "/o", component: "../layout/layout_home", routes: [
            {path: "home", component: "home"}
        ]},
        // {path: "*",component: "404"},
        //  "/"必须在最后一个才可以使用多个layout
        //  在左侧菜单中的页面
        {path: "/", component: "../layout/layout_home", routes: [
            // {path: "*",component: "404"},
            {path: "/", component: "./hellowWorld"},
            // 不在左侧菜单的页面，
            {path: "/userCenter", component: "userCenter"},
            // 左侧菜单有的菜单
            {path: "/helloworld", component: "./hellowWorld"},
            {path: "/dashboard", routes: [
                {path: "fenxi", component: "fenxi"},
                {path: "jiankong", component: "jiankong"},
                {path: "gongzuotai", component: "gongzuotai"},
                {path: "kapian", component: "kapian"},
                // {path: "*",component: "404"}
            ]},
            {path: "/peizhipingtai", routes: [
                {path: "table", component: "tablepage"},
            ]},
            // {path: "*",component: "404"},
        ]},
        // {path: "*",component: "404"},
    ],
    plugins: [
        ["umi-plugin-react", {
            antd: true,
            dva: true
        }]
    ],
    proxy: {
      '/dev': {
        target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
      },
    }
}