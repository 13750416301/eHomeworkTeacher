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
      }
    ]
  },
  // {
  //   path: '/userManage',
  //   name: '用户管理',
  //   meta: {
  //     icon: 'ios-people',
  //     title: '用户管理'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'userManage',
  //       name: '用户管理',
  //       meta: {
  //         icon: 'ios-people',
  //         title: '用户管理'
  //       },
  //       component: () => import('@/view/userManage/userManage.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/questionManage',
  //   name: '题库管理',
  //   meta: {
  //     icon: 'logo-buffer',
  //     title: '题库管理'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'questionManage',
  //       name: '题库管理',
  //       meta: {
  //         icon: 'logo-buffer',
  //         title: '题库管理'
  //       },
  //       component: () => import('@/view/questionManage/questionManage.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/testPaperManage',
  //   name: '试卷管理',
  //   meta: {
  //     icon: 'ios-document',
  //     title: '试卷管理'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'testPaperImport',
  //       name: '试卷录入',
  //       meta: {
  //         icon: 'ios-log-in',
  //         title: '试卷录入'
  //       },
  //       component: () => import('@/view/testPaperManage/testPaperImport.vue')
  //     },
  //     {
  //       path: 'testPaperChange',
  //       name: '试卷修改',
  //       meta: {
  //         icon: 'md-open',
  //         title: '试卷修改'
  //       },
  //       component: () => import('@/view/testPaperManage/testPaperChange.vue')
  //     },
  //     {
  //       path: 'testPaperDelete',
  //       name: '试卷删除',
  //       meta: {
  //         icon: 'md-close',
  //         title: '试卷删除'
  //       },
  //       component: () => import('@/view/testPaperManage/testPaperDelete.vue')
  //     },
  //     {
  //       path: 'testPaperSearch',
  //       name: '试卷查询',
  //       meta: {
  //         icon: 'ios-search',
  //         title: '试卷查询'
  //       },
  //       component: () => import('@/view/testPaperManage/testPaperSearch.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/resultSearch',
  //   name: '考试结果查询',
  //   meta: {
  //     icon: 'md-eye',
  //     title: '考试结果查询'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'resultSearch',
  //       name: '考试结果查询',
  //       meta: {
  //         icon: 'md-eye',
  //         title: '考试结果查询'
  //       },
  //       component: () => import('@/view/resultSearch/resultSearch.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/passwordChange',
  //   name: '密码修改',
  //   component: Main,
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   children: [
  //     {
  //       path: 'passwordChange',
  //       name: '密码修改',
  //       meta: {
  //         icon: 'md-key',
  //         title: '密码修改'
  //       },
  //       component: () => import('@/view/single-page/passwordChange/passwordChange.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/message',
  //   name: 'message',
  //   component: Main,
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   children: [
  //     {
  //       path: 'message_page',
  //       name: 'message_page',
  //       meta: {
  //         icon: 'md-notifications',
  //         title: '消息中心'
  //       },
  //       component: () => import('@/view/single-page/message/index.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/components',
  //   name: 'components',
  //   meta: {
  //     icon: 'logo-buffer',
  //     title: '组件'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tree_select_page',
  //       name: 'tree_select_page',
  //       meta: {
  //         icon: 'md-arrow-dropdown-circle',
  //         title: '树状下拉选择器'
  //       },
  //       component: () => import('@/view/components/tree-select/index.vue')
  //     },
  //     {
  //       path: 'count_to_page',
  //       name: 'count_to_page',
  //       meta: {
  //         icon: 'md-trending-up',
  //         title: '数字渐变'
  //       },
  //       component: () => import('@/view/components/count-to/count-to.vue')
  //     },
  //     {
  //       path: 'drag_list_page',
  //       name: 'drag_list_page',
  //       meta: {
  //         icon: 'ios-infinite',
  //         title: '拖拽列表'
  //       },
  //       component: () => import('@/view/components/drag-list/drag-list.vue')
  //     },
  //     {
  //       path: 'drag_drawer_page',
  //       name: 'drag_drawer_page',
  //       meta: {
  //         icon: 'md-list',
  //         title: '可拖拽抽屉'
  //       },
  //       component: () => import('@/view/components/drag-drawer')
  //     },
  //     {
  //       path: 'org_tree_page',
  //       name: 'org_tree_page',
  //       meta: {
  //         icon: 'ios-people',
  //         title: '组织结构树'
  //       },
  //       component: () => import('@/view/components/org-tree')
  //     },
  //     {
  //       path: 'tree_table_page',
  //       name: 'tree_table_page',
  //       meta: {
  //         icon: 'md-git-branch',
  //         title: '树状表格'
  //       },
  //       component: () => import('@/view/components/tree-table/index.vue')
  //     },
  //     {
  //       path: 'cropper_page',
  //       name: 'cropper_page',
  //       meta: {
  //         icon: 'md-crop',
  //         title: '图片裁剪'
  //       },
  //       component: () => import('@/view/components/cropper/cropper.vue')
  //     },
  //     {
  //       path: 'tables_page',
  //       name: 'tables_page',
  //       meta: {
  //         icon: 'md-grid',
  //         title: '多功能表格'
  //       },
  //       component: () => import('@/view/components/tables/tables.vue')
  //     },
  //     {
  //       path: 'split_pane_page',
  //       name: 'split_pane_page',
  //       meta: {
  //         icon: 'md-pause',
  //         title: '分割窗口'
  //       },
  //       component: () => import('@/view/components/split-pane/split-pane.vue')
  //     },
  //     {
  //       path: 'markdown_page',
  //       name: 'markdown_page',
  //       meta: {
  //         icon: 'logo-markdown',
  //         title: 'Markdown编辑器'
  //       },
  //       component: () => import('@/view/components/markdown/markdown.vue')
  //     },
  //     {
  //       path: 'editor_page',
  //       name: 'editor_page',
  //       meta: {
  //         icon: 'ios-create',
  //         title: '富文本编辑器'
  //       },
  //       component: () => import('@/view/components/editor/editor.vue')
  //     },
  //     {
  //       path: 'icons_page',
  //       name: 'icons_page',
  //       meta: {
  //         icon: '_bear',
  //         title: '自定义图标'
  //       },
  //       component: () => import('@/view/components/icons/icons.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/update',
  //   name: 'update',
  //   meta: {
  //     icon: 'md-cloud-upload',
  //     title: '数据上传'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'update_table_page',
  //       name: 'update_table_page',
  //       meta: {
  //         icon: 'ios-document',
  //         title: '上传Csv'
  //       },
  //       component: () => import('@/view/update/update-table.vue')
  //     },
  //     {
  //       path: 'update_paste_page',
  //       name: 'update_paste_page',
  //       meta: {
  //         icon: 'md-clipboard',
  //         title: '粘贴表格数据'
  //       },
  //       component: () => import('@/view/update/update-paste.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/excel',
  //   name: 'excel',
  //   meta: {
  //     icon: 'ios-stats',
  //     title: 'EXCEL导入导出'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'upload-excel',
  //       name: 'upload-excel',
  //       meta: {
  //         icon: 'md-add',
  //         title: '导入EXCEL'
  //       },
  //       component: () => import('@/view/excel/upload-excel.vue')
  //     },
  //     {
  //       path: 'export-excel',
  //       name: 'export-excel',
  //       meta: {
  //         icon: 'md-download',
  //         title: '导出EXCEL'
  //       },
  //       component: () => import('@/view/excel/export-excel.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/tools_methods',
  //   name: 'tools_methods',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tools_methods_page',
  //       name: 'tools_methods_page',
  //       meta: {
  //         icon: 'ios-hammer',
  //         title: '工具方法',
  //         beforeCloseName: 'before_close_normal'
  //       },
  //       component: () => import('@/view/tools-methods/tools-methods.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/error_store',
  //   name: 'error_store',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_store_page',
  //       name: 'error_store_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/error-store/error-store.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/error_logger',
  //   name: 'error_logger',
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_logger_page',
  //       name: 'error_logger_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/single-page/error-logger.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'directive_page',
  //       name: 'directive_page',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '指令'
  //       },
  //       component: () => import('@/view/directive/directive.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/argu',
  //   name: 'argu',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'params/:id',
  //       name: 'params',
  //       meta: {
  //         icon: 'md-flower',
  //         title: route => `{{ params }}-${route.params.id}`,
  //         notCache: true,
  //         beforeCloseName: 'before_close_normal'
  //       },
  //       component: () => import('@/view/argu-page/params.vue')
  //     },
  //     {
  //       path: 'query',
  //       name: 'query',
  //       meta: {
  //         icon: 'md-flower',
  //         title: route => `{{ query }}-${route.query.id}`,
  //         notCache: true
  //       },
  //       component: () => import('@/view/argu-page/query.vue')
  //     }
  //   ]
  // },
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
