<template>
  <div class="homework">
    <h1 style="color:#2d8cf0;margin:10px 0;">发布作业</h1>
    <div class="title">
      标题：<Input type="text" class="input-title" v-model="title" size="large" style="width:300px;text-algin:center;" clearable />
    </div>
    <div class="new-problem">
      <div>
        <p><b>科目：</b>马克思主义基本原理&nbsp;&nbsp;&nbsp;&nbsp;<b>教师：</b>杨沐&nbsp;&nbsp;&nbsp;&nbsp;开始时间：</p>
      </div>
      <Button @click="newAdd" class="new-btn" size="large" type="primary">新建题目</Button>
    </div>
    <Modal v-model="isNew" width="800">
      <p slot="header" style="color:#2d8cf0;">
        <span><Icon type="ios-add-circle" style="margin-right:5px;" />新建题目</span>
      </p>
      <div slot="footer" style="text-align:center">
        <Button @click="confirmAdd" type="primary" style="margin-right:10px;width:100px;">确认</Button>
        <Button type="default" style="width:100px;" @click="isNew=false">取消</Button>
      </div>
      <div class="new-add">
        <div class="type-select" style="margin-bottom:5px;">
          题目类型：
          <Select v-model="addType" style="width:100px" placeholder="请选择">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          &nbsp;&nbsp;&nbsp;分值：<Input v-model="point" style="width:100px;" />
        </div>
        <div class="new-edit" v-if="addType=='1'" style="margin-bottom:5px;">
          <Form style="margin-top:10px;" label-position="right" :label-width="40">
            <FormItem label="题目:">
              <Input v-model="singleChoiceObj.problem" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
            </FormItem>
            <FormItem label="A:">
              <Input v-model="singleChoiceObj.a" style="width:500px;" />
            </FormItem>
            <FormItem label="B:">
              <Input v-model="singleChoiceObj.b" style="width:500px;" />
            </FormItem>
            <FormItem label="C:">
              <Input v-model="singleChoiceObj.c" style="width:500px;" />
            </FormItem>
            <FormItem label="D:">
              <Input v-model="singleChoiceObj.d" style="width:500px;" />
            </FormItem>
            <FormItem label="答案:">
              <Select v-model="singleChoiceObj.ans" style="width:100px;" placeholder="请选择">
                <Option v-for="item in singleChoiceOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
          </Form>
        </div>
        <div class="new-edit" v-if="addType=='2'" style="margin-bottom:5px;">
          <Form style="margin-top:10px;" label-position="right" :label-width="40">
            <FormItem label="题目:">
              <Input v-model="multiChoiceObj.problem" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
            </FormItem>
            <FormItem label="A:">
              <Input v-model="multiChoiceObj.a" style="width:500px;" />
            </FormItem>
            <FormItem label="B:">
              <Input v-model="multiChoiceObj.b" style="width:500px;" />
            </FormItem>
            <FormItem label="C:">
              <Input v-model="multiChoiceObj.c" style="width:500px;" />
            </FormItem>
            <FormItem label="D:">
              <Input v-model="multiChoiceObj.d" style="width:500px;" />
            </FormItem>
            <FormItem label="答案:">
              <CheckboxGroup v-model="multiChoiceObj.ans">
                <Checkbox label="A">A</Checkbox>
                <Checkbox label="B">B</Checkbox>
                <Checkbox label="C">C</Checkbox>
                <Checkbox label="D">D</Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Form>
        </div>
        <div class="new-edit" v-if="addType=='3'" style="margin-bottom:5px;">
          <Form style="margin-top:10px;" label-position="right" :label-width="70">
            <FormItem label="题目:">
              <Input v-model="shortAnsObj.problem" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
            </FormItem>
            <FormItem label="参考答案:">
              <Input v-model="shortAnsObj.ans" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
            </FormItem>
          </Form>
        </div>
      </div>
    </Modal>
    <div class="homework-content">
      <Button class="exit-btn" type="default"><Icon type="md-power" style="margin-right:3px;" />退出</Button>
      <h3>一、<Icon type="ios-hand" color="#ff652f" size="20" style="margin-right:3px;" />单选题（50分）</h3>
      <div class="choice"  v-if="tempContnet.singleChoice.length!==0">
        <div v-for="item in tempContnet.singleChoice" :key="item.problem">
          <p class="choice-question">{{++singleI}}、{{item.problem}}（{{item.point}}分）</p>
          <p class="option">A.{{item.a}}</p>
          <p class="option">B.{{item.b}}</p>
          <p class="option">C.{{item.c}}</p>
          <p class="option">D.{{item.d}}</p>
          <!-- <p class="choice-question">2、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）</p>
          <RadioGroup class="option" v-model="userAnswer[1]">
            <Radio label="A" class="radio">A.增加开发人员</Radio>
            <Radio label="B" class="radio">B.开发人员加班加点争取完成任务</Radio>
            <Radio label="C" class="radio">C.取消或简化某些任务</Radio>
            <Radio label="D" class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</Radio>
          </RadioGroup> -->
        </div>
      </div>
      <h3>二、<Icon type="md-checkbox-outline" color="green" size="20" style="margin-right:3px;" />多选题（30分）</h3>
      <div class="choice">
        <p class="choice-question">1、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）</p>
        <CheckboxGroup class="option" v-model="userAnswer2[0]">
          <Checkbox label="A" class="radio">A.增加开发人员</Checkbox>
          <Checkbox label="B" class="radio">B.开发人员加班加点争取完成任务</Checkbox>
          <Checkbox label="C" class="radio">C.取消或简化某些任务</Checkbox>
          <Checkbox label="D" class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</Checkbox>
        </CheckboxGroup>
        <p class="choice-question">2、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）</p>
        <CheckboxGroup class="option" v-model="userAnswer2[1]">
          <Checkbox label="A" class="radio">A.增加开发人员</Checkbox>
          <Checkbox label="B" class="radio">B.开发人员加班加点争取完成任务</Checkbox>
          <Checkbox label="C" class="radio">C.取消或简化某些任务</Checkbox>
          <Checkbox label="D" class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</Checkbox>
        </CheckboxGroup>
        <p class="choice-question">3、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）</p>
        <CheckboxGroup class="option" v-model="userAnswer2[2]">
          <Checkbox label="A" class="radio">A.增加开发人员</Checkbox>
          <Checkbox label="B" class="radio">B.开发人员加班加点争取完成任务</Checkbox>
          <Checkbox label="C" class="radio">C.取消或简化某些任务</Checkbox>
          <Checkbox label="D" class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</Checkbox>
        </CheckboxGroup>
        <p class="choice-question">4、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）</p>
        <CheckboxGroup class="option" v-model="userAnswer2[3]">
          <Checkbox label="A" class="radio">A.增加开发人员</Checkbox>
          <Checkbox label="B" class="radio">B.开发人员加班加点争取完成任务</Checkbox>
          <Checkbox label="C" class="radio">C.取消或简化某些任务</Checkbox>
          <Checkbox label="D" class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</Checkbox>
        </CheckboxGroup>
        <p class="choice-question">5、根据IID模型，开发过程中如果发现不能按期完成任务时应该（10分）</p>
        <CheckboxGroup class="option" v-model="userAnswer2[4]">
          <Checkbox label="A" class="radio">A.增加开发人员</Checkbox>
          <Checkbox label="B" class="radio">B.开发人员加班加点争取完成任务</Checkbox>
          <Checkbox label="C" class="radio">C.取消或简化某些任务</Checkbox>
          <Checkbox label="D" class="radio">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</Checkbox>
        </CheckboxGroup>
      </div>
      <div class="shortAnswer">
        <h3>三、<Icon type="md-pricetags" color="blue" size="20" style="margin-right:3px;" />简答题（20分）</h3>
        <p class="shortAnswer-question">1、假定要对某个方法bool triangle(int a, int b, int c), 输入三个整形参数作为三个边长，判断他们能否构成一个三角形，输出为布尔型true 或 false, 请设计测试用例。（10分）</p>
        <Input class="shortAnswer-ans" type="textarea" :rows="4" placeholder="请在框内输入合适的答案……" />
        <p class="shortAnswer-question">2、假定要对某个方法bool triangle(int a, int b, int c), 输入三个整形参数作为三个边长，判断他们能否构成一个三角形，输出为布尔型true 或 false, 请设计测试用例。（10分）</p>
        <Input class="shortAnswer-ans" type="textarea" :rows="4" placeholder="请在框内输入合适的答案……" />
      </div>
      <div class="submit-btn">
        <Button type="default" style="color:#fff;background-color:green;">提交作业</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homework',
  data () {
    return {
      // 修改弹窗弹出判定
      title: '马克思主义作业1',
      singleI: 0,
      multiI: 0,
      shortI: 0,
      content: {
        singleChoice: [],
        multiChoice: [],
        shortAns: []
      },
      tempContnet: {},
      addType: '0',
      point: 10,
      tempObj: {},
      singleChoiceObj: {
        problem: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: '',
        point: ''
      },
      multiChoiceObj: {
        problem: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: [],
        point: ''
      },
      shortAnsObj: {
        problem: '',
        ans: '',
        point: ''
      },
      userAnswer: ['1', '2', '3', '4', '5'],
      userAnswer2: ['1', '2', '3', '4', '5'],
      isNew: false,
      singleChoiceAns: '',
      choiceAns: [],
      typeList: [
        {
          value: '1',
          label: '单选题'
        },
        {
          value: '2',
          label: '多选题'
        },
        {
          value: '3',
          label: '简答题'
        }
      ],
      singleChoiceOption: [
        {
          value: 'A',
          label: 'A'
        },
        {
          value: 'B',
          label: 'B'
        },
        {
          value: 'C',
          label: 'C'
        },
        {
          value: 'D',
          label: 'D'
        }
      ],
      choiceOption: [
        {
          value: 'A',
          label: 'A'
        },
        {
          value: 'B',
          label: 'B'
        },
        {
          value: 'C',
          label: 'C'
        },
        {
          value: 'D',
          label: 'D'
        }
      ]
    }
  },
  methods: {
    clearObj () {
      this.addType = '0'
      this.point = 10
      this.singleChoiceObj.problem = ''
      this.singleChoiceObj.a = ''
      this.singleChoiceObj.b = ''
      this.singleChoiceObj.c = ''
      this.singleChoiceObj.d = ''
      this.singleChoiceObj.ans = ''
      this.singleChoiceObj.point = ''
      this.multiChoiceObj.problem = ''
      this.multiChoiceObj.a = ''
      this.multiChoiceObj.b = ''
      this.multiChoiceObj.c = ''
      this.multiChoiceObj.d = ''
      this.multiChoiceObj.ans = []
      this.multiChoiceObj.point = ''
      this.shortAnsObj.problem = ''
      this.shortAnsObj.ans = ''
      this.shortAnsObj.point = ''
    },
    newAdd () {
      this.clearObj()
      this.isNew = true
    },
    confirmAdd () {
      switch (this.addType) {
        case '1':
          this.singleChoiceObj.point = parseInt(this.point)
          // this.content.singleChoice.push(this.singleChoiceObj)
          this.tempObj = { ...this.singleChoiceObj }
          this.content.singleChoice.push(this.tempObj)
          break
        case '2':
          this.multiChoiceObj.point = parseInt(this.point)
          // this.content.multiChoice.push(this.multiChoiceObj)
          this.tempObj = { ...this.multiChoiceObj }
          this.content.multiChoice.push(this.tempObj)
          break
        case '3':
          this.shortAnsObj.point = parseInt(this.point)
          // this.content.shortAns.push(this.shortAnsObj)
          this.tempObj = { ...this.shortAnsObj }
          this.content.shortAns.push(this.tempObj)
          break
      }
      console.clear()
      console.log(this.content)
      // this.tempContnet = { ...this.content }
      this.singleI = 0
      this.isNew = false
    }
  },
  created () {
    this.tempContnet = { ...this.content }
  },
  computed () {
    this.tempContnet = { ...this.content }
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
  .title {
    padding-top: 10px;
    font-size: 15px;
    font-weight: bold;
    width: 500px;
    margin: 10px auto;
  }
  .new-problem {
    padding-top: 10px;
    .new-btn {
      margin-top: 10px;
    }
  }
  .new-edit {
    padding-top: 20px;
    /deep/ .ivu-form-item {
      margin-bottom: 5px;
    }
  }
  .homework-content {
    width: 100%;
    height: 350px;
    padding-top: 15px;
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
}
</style>
