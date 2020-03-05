<template>
  <div>
    <div class="head">
      <div class="head-left">
        搜索题目：<Input v-model="questionId" placeholder="请输入题号" style="width: auto" clearable />
        <Button @click="searchQuestion" style="margin-left:8px;" type="primary">查询</Button>
      </div>
      <div class="head-right">
        <Button style="algin:right;" type="primary">添加题目</Button>
      </div>
    </div>
    <Table size="default" border :columns="columns" :data="list"></Table>
    <Modal @on-ok="deleteQuestion" v-model="isDelete" title="删除用户">
      <p style="text-align:center;"><Icon type="ios-alert" color="red" size="15" style="margin-right:5px;" />确认删除该题目？删除后不可撤销！</p>
    </Modal>
    <Modal @on-ok="changeQuestion" v-model="isEdit" title='修改题目' width="600">
      <Form :label-width="80" label-position="left">
        <Row style="width:100%;">
          <FormItem label="问题描述：">
            <Input v-model="editData.description" type="textarea" :rows="4" />
          </FormItem>
        </Row>
        <Row>
          <i-col span="11" style="margin-right:10px;">
            <FormItem label="科目:">
              <Select v-model="editData.subjectId" >
                <Option v-for="item in subjectList" :value="item.value" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col span="11">
            <FormItem label="类型:">
              <Select v-model="editData.type">
                <Option v-for="item in typeList" :value="item.label" :key="item.value">{{item.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="11" style="margin-right:10px;">
            <FormItem label="分值:">
              <Input v-model="editData.score" />
            </FormItem>
          </i-col>
          <i-col span="11">
            <FormItem label="答案:">
              <Select v-model="editData.answer">
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
                <Option value="D">D</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="11" style="margin-right:10px;">
            <FormItem label="选项A:">
              <Input v-model="editData.optionA" />
            </FormItem>
          </i-col>
          <i-col span="11">
            <FormItem label="选项B:">
              <Input v-model="editData.optionB" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="11" style="margin-right:10px;">
            <FormItem label="选项C:">
              <Input v-model="editData.optionC" />
            </FormItem>
          </i-col>
          <i-col span="11">
            <FormItem label="选项D:">
              <Input v-model="editData.optionD" />
            </FormItem>
          </i-col>
        </Row>
      </Form>
    </Modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'questionManage',
  data () {
    return {
      isDelete: false,
      editData: {},
      isEdit: false,
      subjectList: [
        {
          value: 1,
          label: '计算机网络'
        },
        {
          value: 2,
          label: '智能系统'
        },
        {
          value: 3,
          label: '软件工程'
        },
        {
          value: 4,
          label: '操作系统'
        }
      ],
      subject: {
        1: '计算机网络',
        2: '智能系统',
        3: '软件工程',
        4: '操作系统'
      },
      typeList: [
        {
          value: 1,
          label: '选择题'
        },
        {
          value: 2,
          label: '判断题'
        }
      ],
      columns: [
        {
          title: '编号',
          key: 'questionId',
          width: 100,
          align: 'center'
        },
        {
          title: '科目名称',
          key: 'subjectId',
          align: 'center',
          width: 120,
          render: (h, params) => {
            return h('div', this.subject[params.row.subjectId])
          }
        },
        {
          title: '类型',
          key: 'type',
          align: 'center',
          width: 120
        },
        {
          title: '问题描述',
          key: 'description',
          align: 'center',
          width: 280
        },
        {
          title: '答案',
          key: 'answer',
          align: 'center',
          width: 100
        },
        {
          title: '题目解析',
          key: 'explanation',
          align: 'center',
          width: 200
        },
        {
          title: '分值',
          key: 'score',
          align: 'center',
          width: 100
        },
        {
          title: '选项A',
          key: 'optionA',
          align: 'center',
          width: 150
        },
        {
          title: '选项B',
          key: 'optionB',
          align: 'center',
          width: 150
        },
        {
          title: '选项C',
          key: 'optionC',
          align: 'center',
          width: 150
        },
        {
          title: '选项D',
          key: 'optionD',
          align: 'center',
          width: 150
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          align: 'center',
          width: 160,
          render: (h, params) => {
            return h('div', {
              style: {
                'text-algin': 'center'
              }
            }, [
              h('Button', {
                style: {
                  'margin-right': '5px'
                },
                props: {
                  type: 'default',
                  size: 'default'
                },
                on: {
                  click: () => {
                    this.editData = { ...params.row }
                    this.isEdit = true
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'default',
                  size: 'default'
                },
                on: {
                  click: () => {
                    this.selectedData = { ...params.row }
                    this.isDelete = true
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      list: [],
      selectedData: {},
      questionId: null
    }
  },
  methods: {
    loadData () {
      axios.get('http://119.23.46.237:3000/getQuestionList', {
        params: {
          questionId: this.questionId
        }
      }).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
          // console.log(this.list)
        }
      })
    },
    deleteQuestion () {
      axios.post('http://119.23.46.237:3000/deleteQuestionById', {
        id: this.selectedData.questionId
      }).then(res => {
        if (res.data.code === 0) {
          this.loadData()
          this.$Message.success('删除成功！')
        }
      })
    },
    changeQuestion () {
      // console.log(typeof(this.editData.answer))
      axios.post('http://119.23.46.237:3000/changeQuestionById', {
        ...this.editData
      }).then(res => {
        if (res.data.code === 0) {
          this.loadData()
          this.$Message.success('修改题目成功！')
        }
      })
    },
    searchQuestion () {
      this.loadData()
    }
  },
  created () {
    this.questionId = ''
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
  margin-bottom: 10px;
  font-size: 13px;
  width: 100%;
  display: flex;
  .head-left {
    width: 50%;
    text-align: left;
  }
  .head-right {
    width: 50%;
    text-align: right;
  }
}
</style>
