<template>
  <div class="homework">
    <h1 style="color:#2d8cf0;margin:10px 0;">作业统计</h1>
    <Table class="homework-table" border :columns="homeworkColumns" :data="homeworkData" :height="500"></Table>
  </div>
</template>

<script>
export default {
  name: 'homework',
  data () {
    return {
      // 修改弹窗弹出判定
      isEmail: false,
      isPhone: false,
      isName: false,
      label: (h) => {
        return h('div', [
          h('span', '未完成'),
          h('Badge', {
            props: {
              count: 3
            }
          })
        ])
      },
      homeworkColumns: [
        {
          title: '序号',
          key: 'no',
          align: 'center',
          width: 70
        },
        {
          title: '标题',
          key: 'title',
          align: 'center',
          width: 150
        },
        {
          title: '科目',
          key: 'project',
          align: 'center',
          width: 200
        },
        {
          title: '发布者',
          key: 'publisher',
          align: 'center',
          width: 100
        },
        {
          title: '开始时间',
          key: 'beginTime',
          align: 'center',
          width: 250
        },
        {
          title: '结束时间',
          key: 'endTime',
          align: 'center',
          width: 250
        },
        {
          title: '操作',
          align: 'center',
          render: (h, params) => {
            return h('Button', {
              props: {
                type: 'primary'
              },
              on: {
                click: () => {
                  this.$router.push({ path: '/homework/homeworkStatis' })
                }
              }
            }, '查看结果')
          }
        }
      ],
      homeworkData: [
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          no: 1,
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        }
      ]
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less" scoped>
.homework {
  height: 700px;
  h1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 8px;
  }
}
.homework-tab {
  /deep/ .ivu-tabs-nav {
    width: 50%;
    height: 45px;
  }
  /deep/ .ivu-tabs-tab {
    width: 25%;
    text-align: center;
    // padding: 0;
    // line-height: 45px;
    // font-size: 20px;
  }
}
.modal {
  /deep/ .ivu-modal-close {
    color: #fff;
    .ivu-icon {
      color: #fff;
    }
  }
  /deep/ .ivu-modal-header {
    background-color: #2d8cf0;
    color: #fff;
  }
  .modal-head {
    width: 100%;
  }
}
.item-value {
    margin-right: 20px;
    font-size: 14px;
}
</style>
