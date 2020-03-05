<template>
  <div>
    <div class="head">
      搜索用户：<Input v-model="userName" placeholder="请输入用户名" style="width: auto" clearable />
      <Button @click="searchUser" style="margin-left:8px;" type="primary">查询</Button>
    </div>
    <Table size="default" border :columns="columns" :data="list"></Table>
    <Modal @on-ok="deleteUser" v-model="isDelete" title="删除用户">
      <p style="text-align:center;"><Icon type="ios-alert" color="red" size="15" style="margin-right:5px;" />确认删除该用户？删除后不可撤销！</p>
    </Modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'userManage',
  data () {
    return {
      isDelete: false,
      columns: [
        {
          title: '编号',
          key: 'userId',
          width: 100,
          align: 'center'
        },
        {
          title: '用户名',
          key: 'userName',
          align: 'center',
          width: 150
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center',
          width: 120
        },
        {
          title: '性别',
          key: 'gender',
          align: 'center',
          width: 100
        },
        {
          title: '联系电话',
          key: 'telephone',
          align: 'center',
          width: 200
        },
        {
          title: '邮箱地址',
          key: 'email',
          align: 'center',
          width: 200
        },
        {
          title: '备注',
          key: 'remark',
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          align: 'center',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'default',
                  size: 'default'
                },
                on: {
                  click: () => {
                    this.isDelete = true
                    this.selectedId = params.row.userId
                  }
                }
              }, '删除用户')
            ])
          }
        }
      ],
      list: [],
      aList: [
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        },
        {
          userId: 1,
          userName: 'bobo',
          name: '蔡敏波',
          gender: '男',
          telephone: '13750416301',
          email: '1535151019@qq.com',
          remark: ''
        }
      ],
      selectedId: null,
      userName: null
    }
  },
  methods: {
    loadData () {
      axios.get('http://119.23.46.237:3000/getUserList', {
        params: {
          userName: this.userName
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
          console.log(this.list)
        }
      })
    },
    deleteUser () {
      axios.post('http://119.23.46.237:3000/deleteUserById', {
        id: this.selectedId
      }).then(res => {
        if (res.data.code === 0) {
          this.loadData()
          this.$Message.success('删除成功！')
        }
      })
    },
    searchUser () {
      this.loadData()
    }
  },
  created () {
    this.userName = ''
    this.loadData()
  },
  mounted () {

  }
}
</script>
<style lang="less">
.ivu-table th {
  font-size: 13px;
}
.ivu-table td {
  font-size: 13px;
}
.head {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: right;
  font-size: 13px;
}
</style>
