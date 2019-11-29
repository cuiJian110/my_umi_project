
export default {
    routes: [
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
        //  "/"必须在最后一个才可以使用多个layout
        //  在左侧菜单中的页面
        {path: "/", component: "../layout/layout_home", routes: [
            {path: "/", component: "./hellowWorld"},
            {path: "/helloworld", component: "./hellowWorld"},
            {path: "/dashboard", routes: [
                {path: "fenxi", component: "fenxi"},
                {path: "jiankong", component: "jiankong"},
                {path: "gongzuotai", component: "gongzuotai"},
                {path: "kapian", component: "kapian"}
            ]},
            {path: "/peizhipingtai", routes: [
                {path: "table", component: "tablepage"},
            ]}
        ]},
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