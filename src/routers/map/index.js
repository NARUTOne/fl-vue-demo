/**
 * 不同功能模块的路由应代码分离
 */ 
const App = () => import('@/pages/app/');
const Login = () => import('@/pages/login/');
const NotFound = () => import('@/pages/notFound/');

const Home = () => import('@/pages/home/');

// Layout
const Layout = () => import('@/pages/layout/');
const LayoutFlex = () => import('@/pages/layout/flex/');
const LayoutRem= () => import('@/pages/layout/rem/');

// iview
const Iview = () => import('@/pages/iview/');
const IviewPits = () => import('@/pages/iview/pits/');

// icons
const FLIcon = () => import('@/pages/FLIcon/');

export default [
  { // 路由从根app开始，注意@/index.js 注册
    path: '/',
    redirect: '/home',
    component: App,
    name: '/',
    meta: {
      title: 'FLV'
    },
    children: [
      // 地址为空时跳转home页面
      {
        path: '',
        name: '',
        redirect: '/home'
      },
      { 
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        },
      },
      { // layout
        path: 'layout',
        name: 'layout',
        redirect: '/layout/flex',
        component: Layout,
        meta: {
          title: 'layout'
        },
        children: [{
          path: 'flex',
          name: 'flex',
          component: LayoutFlex,
          meta: {
            title: 'flex'
          },
        }, {
          path: 'rem',
          name: 'rem',
          component: LayoutRem,
          meta: {
            title: 'rem'
          },
        }]
      },
      { // iview
        path: 'iview',
        name: 'iview',
        redirect: '/iview/pits',
        component: Iview,
        meta: {
          title: 'iview'
        },
        children: [{
          path: 'pits',
          name: 'pits',
          component: IviewPits,
          meta: {
            title: '填坑'
          },
        }]
      },
      {
        path: 'flicons',
        name: 'flicons',
        component: FLIcon,
        meta: {
          title: 'FLIcons'
        }
      },
      { 
        path: 'login',
        name: 'login',
        component: Login
      },
      { // 404 置后
        path: '404',
        name: '404',
        component: NotFound
      },
      {
        path: '*',
        redirect: '/404'
      },
    ]
  }
  
];