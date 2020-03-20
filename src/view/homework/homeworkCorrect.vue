<template>
  <div class="homeworkDetail">
    <h1>作业批改页面</h1>
    <h2 style="color:#2d8cf0;margin:10px 0;text-align:center;">马克思作业五</h2>
    <Divider />
    <Table :columns="stuHomework" :data="stuList" border></Table>
    <Modal v-model="isCheck" width="900">
      <p slot="header">
        <span><Icon type="md-create" color="red" style="margin-right:5px;" />评分-蔡敏波的作业</span>
      </p>
      <div slot="footer" style="text-align:center">
        <Button type="primary" style="margin-right:10px;width:100px;">确认</Button>
        <Button type="default" style="width:100px;" @click="isCheck=false">取消</Button>
      </div>
      <div class="homework-content">
        <h3>一、<Icon type="ios-hand" color="#ff652f" size="20" style="margin-right:3px;" />单选题（50分）</h3>
        <div class="choice">
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>A</p>
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>A</p>
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>A</p>
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>A</p>
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>A</p>
        </div>
        <h3>二、<Icon type="md-checkbox-outline" color="green" size="20" style="margin-right:3px;" />多选题（30分）</h3>
        <div class="choice">
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>[A, B]</p>
         <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>[A, B]</p>
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>[A, B]</p>
          <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><span style="color:red;">10</span>分</p>
          <div class="option">
            <p class="radio">A.增加开发人员</p>
            <p class="radio">B.开发人员加班加点争取完成任务</p>
            <p class="radio">C.取消或简化某些任务</p>
            <p class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
          </div>
          <p><b style="color:#2d8cf0;">答案：</b>[A, B]</p>
        </div>
        <div class="shortAnswer">
          <h3>三、<Icon type="md-pricetags" color="blue" size="20" style="margin-right:3px;" />简答题（20分）</h3>
          <p class="shortAnswer-question">1、假定要对某个方法bool triangle(int a, int b, int c), 输入三个整形参数作为三个边长，判断他们能否构成一个三角形，输出为布尔型true 或 false, 请设计测试用例。（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><Input style="width:50px;margin: 0 10px;" />分</p>
          <p style="margin:5px 0;">学生答案：</p>
          <Input type="textarea" v-model="userAnswer3" placeholder="Enter something..." />
          <p style="margin:5px 0;">参考答案：</p>
          <Input v-model="shortAnswer" type="textarea" placeholder="Enter something..." />
          <p class="shortAnswer-question">1、假定要对某个方法bool triangle(int a, int b, int c), 输入三个整形参数作为三个边长，判断他们能否构成一个三角形，输出为布尔型true 或 false, 请设计测试用例。（10分）&nbsp;&nbsp;&nbsp;<b>得分：</b><Input style="width:50px;margin: 0 10px;" />分</p>
          <p style="margin:5px 0;">学生答案：</p>
          <Input type="textarea" v-model="userAnswer3" placeholder="Enter something..." />
          <p style="margin:5px 0;">参考答案：</p>
          <Input v-model="shortAnswer" type="textarea" placeholder="Enter something..." />
        </div>
      </div>
    </Modal>
    <Button size="large" type="primary" style="display:block;background-color:green;width:100px;margin:10px auto;">发布结果</Button>
  </div>
</template>
<script>
// import moment from 'moment'
// import axios from 'axios'
export default {
  name: 'homeworkDetail',
  created () {
  },
  data () {
    return {
      isCheck: false,
      userAnswer: [1, 2, 3, 4, 5],
      userAnswer2: [1, 2, 3, 4, 5],
      userAnswer3: '社会主义（socialism）是一种社会学思想，诞生于16世纪初，主张整个社会应作为整体，由社会拥有和控制产品、资本、土地、资产等，其管理和分配基于公众利益。19世纪30至40年代，“社会主义”的概念在西欧广为流传，发展出不同分支。马克思和恩格斯对社会主义发展出了他们的理论体系，亦认为社会主义社会是资本主义社会向共产主义社会过渡的社会形态。',
      shortAnswer: '社会主义（socialism）是一种社会学思想，诞生于16世纪初，主张整个社会应作为整体，由社会拥有和控制产品、资本、土地、资产等，其管理和分配基于公众利益。19世纪30至40年代，“社会主义”的概念在西欧广为流传，发展出不同分支。马克思和恩格斯对社会主义发展出了他们的理论体系，亦认为社会主义社会是资本主义社会向共产主义社会过渡的社会形态。',
      stuHomework: [
        {
          title: '序号',
          key: 'no',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '提交时间',
          key: 'publishTime',
          align: 'center'
        },
        {
          title: '状态',
          key: 'status',
          align: 'center'
        },
        {
          title: '分数',
          key: 'score',
          align: 'center'
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
                  this.isCheck = true
                  console.log('Click!')
                }
              }
            }, '评分')
          }
        }
      ],
      stuList: [
        {
          no: 1,
          name: '蔡敏波',
          publishTime: '2020年2月25日20点33分',
          status: '已提交',
          score: '尚未评分'
        },
        {
          no: 1,
          name: '蔡敏波',
          publishTime: '2020年2月25日20点33分',
          status: '已提交',
          score: '尚未评分'
        },
        {
          no: 1,
          name: '蔡敏波',
          publishTime: '2020年2月25日20点33分',
          status: '已提交',
          score: '尚未评分'
        },
        {
          no: 1,
          name: '蔡敏波',
          publishTime: '2020年2月25日20点33分',
          status: '已提交',
          score: '尚未评分'
        },
        {
          no: 1,
          name: '蔡敏波',
          publishTime: '2020年2月25日20点33分',
          status: '已提交',
          score: '尚未评分'
        },
        {
          no: 1,
          name: '蔡敏波',
          publishTime: '2020年2月25日20点33分',
          status: '已提交',
          score: '尚未评分'
        }
      ]
    }
  },
  methods: {
    view () {
      console.log('view')
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less" scoped>
.homework-content {
  width: 100%;
  height: 500px;
  overflow-y: auto;
  .exit-btn {
    right: 35px;
    top: 90px;
    position: fixed;
    color: #fff;
    background-color: rgba(255, 0, 0, 0.5);
  }
  .choice {
    width: 100%;
    .choice-question {
      margin-top: 10px;
    }
    .option {
      margin-top: 8px;
      .radio {
        display: block;
        margin-bottom: 8px;
      }
    }
  }
  .shortAnswer {
    width: 100%;
    margin-top: 10px;
    .shortAnswer-question {
      margin-top: 10px;
    }
    .shortAnswer-ans {
      margin-top: 8px;
    }
  }
  .submit-btn {
    width: 100%;
    height: auto;
    margin-top: 10px;
    text-align: center;
  }
}
</style>
