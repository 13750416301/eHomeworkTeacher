<template>
  <div class="homework">
    <h1 style="color:#2d8cf0;margin:10px 0;">个人作业</h1>
    <Tabs class="homework-tab" value="info" type="line">
        <TabPane class="infoTab" :label="label" name="info">
            <Table class="homework-table" border :columns="homeworkColumns" :data="homeworkData" :height="500"></Table>
        </TabPane>
        <TabPane label="已完成" name="avator">
          <Table class="homework-table" border :columns="homeworkColumns" :data="homeworkData" :height="500"></Table>
          </TabPane>
        <TabPane label="未完成" name="password">
          <Table class="homework-table" border :columns="homeworkColumns" :data="homeworkData" :height="500"></Table>
        </TabPane>
        <TabPane label="已结束" name="loginLog">
          <Table class="homework-table" border :columns="homeworkColumns" :data="homeworkData" :height="500"></Table>
        </TabPane>
    </Tabs>
    <Modal class="modal" v-model="isEmail">
      <div slot="header" class="modal-head">
        <div>修改邮箱地址</div>
      </div>
      <Form label-position="right" :label-width="100">
        <FormItem label="旧的邮箱地址：">
          <div>1535151019@qq.com</div>
        </FormItem>
        <FormItem label="新的邮箱地址：">
          <Input style="width:200px;" />
        </FormItem>
      </Form>
    </Modal>
    <Modal class="modal" v-model="isPhone">
      <div slot="header" class="modal-head">
        <div>修改电话号码</div>
      </div>
      <Form label-position="right" :label-width="100">
        <FormItem label="旧的电话号码：">
          <div>13750416301</div>
        </FormItem>
        <FormItem label="新的电话号码：">
          <Input style="width:200px;" />
        </FormItem>
      </Form>
    </Modal>
    <Modal class="modal" v-model="isName">
      <div slot="header" class="modal-head">
        <div>修改用户姓名</div>
      </div>
      <Form label-position="right" :label-width="100">
        <FormItem label="旧的用户姓名：">
          <div>蔡敏波</div>
        </FormItem>
        <FormItem label="新的用户姓名：">
          <Input style="width:200px;" />
        </FormItem>
      </Form>
    </Modal>
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
          title: '状态',
          key: 'status',
          align: 'center',
          render: (h, params) => {
            return h('div', {
              style: {
                'color': 'green'
              }
            }, '进行中')
          }
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
                  this.$router.push({ path: '/homework/homeworkDetail' })
                }
              }
            }, '查看')
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
