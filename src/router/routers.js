import Main from '@/components/main'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  // {
  //   path: '/',
  //   name: '_home',
  //   redirect: '/home',
  //   component: Main,
  //   meta: {
  //     hideInMenu: true,
  //     notCache: true
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'home',
  //       meta: {
  //         hideInMenu: true,
  //         title: '首页',
  //         notCache: true,
  //         icon: 'md-home'
  //       },
  //       component: () => import('@/view/single-page/home')
  //     }
  //   ]
  // },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      icon: 'ios-home',
      title: '首页',
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'ios-home',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/personInfo',
    name: '账户信息',
    meta: {
      icon: 'ios-contact',
      title: '账户信息'
    },
    component: Main,
    children: [
      {
        path: 'personInfo',
        name: '账户信息',
        meta: {
          icon: 'ios-contact',
          title: '账户信息'
        },
        component: () => import('@/view/personInfo/personInfo.vue')
      }
    ]
  },
  {
    path: '/courseInfo',
    name: '课程信息',
    meta: {
      icon: 'ios-list-box',
      title: '课程信息'
    },
    component: Main,
    children: [
      {
        path: 'courseInfo',
        name: '课程信息',
        meta: {
          icon: 'ios-list-box',
          title: '课程信息'
        },
        component: () => import('@/view/courseInfo/courseInfo.vue')
      },
      {
        path: 'courseDetail',
        name: '课程简介',
        meta: {
          hideInBread: true,
          hideInMenu: true
        },
        component: () => import('@/view/courseInfo/courseDetail.vue')
      }
    ]
  },
  {
    path: '/homework',
    name: '作业统计',
    meta: {
      icon: 'ios-book',
      title: '作业统计'
    },
    component: Main,
    children: [
      {
        path: 'homework',
        name: '作业统计',
        meta: {
          icon: 'ios-book',
          title: '作业统计'
        },
        component: () => import('@/view/homework/homework.vue')
      },
      {
        path: 'homeworkDetail',
        name: '作业详情',
        meta: {
          hideInBread: true,
          hideInMenu: true
        },
        component: () => import('@/view/homework/homeworkDetail.vue')
      },
      {
        path: 'homeworkStatis',
        name: '统计详情详情',
        meta: {
          hideInBread: true,
          hideInMenu: true
        },
        component: () => import('@/view/homework/homeworkStatis.vue')
      },
      {
        path: 'homeworkPublish',
        name: '发布作业',
        meta: {
          hideInBread: true,
          hideInMenu: true
        },
        component: () => import('@/view/homework/homeworkPublish.vue')
      },
      {
        path: 'homeworkCorrect',
        name: '批改作业',
        meta: {
          hideInBread: true,
          hideInMenu: true
        },
        component: () => import('@/view/homework/homeworkCorrect.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
