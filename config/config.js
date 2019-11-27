
export default {
    routes: [
        {path: "/page1", component: "../layout", routes: [
            {path: "page1", component: "page1"},
            {path: "page2", component: "page2"}
        ]},
        {path: "/page3", component: "../layout/index_02.jsx", routes: [
            {path: "page3", component: "page3"}
        ]},
        {path: "/", component: "../layout/layout_home", routes: [
            {path: "/", component: "./hellowWorld"},
            {path: "/helloworld", component: "./hellowWorld"},
            {path: "/dashboard", routes: [
                {path: "fenxi", component: "fenxi"},
                {path: "jiankong", component: "jiankong"},
                {path: "gongzuotai", component: "gongzuotai"},
                {path: "kapian", component: "kapian"}
            ]}
        ]},
    ],
    plugins: [
        ["umi-plugin-react", {
            antd: true,
            dva: true
        }]
    ]
}