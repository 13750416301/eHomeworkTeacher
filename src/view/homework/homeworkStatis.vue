<template>
  <div class="homeworkStatis">
    <h1 style="color:#2d8cf0;margin:10px 0;">马克思作业5</h1>
    <Collapse v-model="value2" accordion>
      <Panel name="1">
        成绩统计
        <div slot="content" class="score">
          <p style="margin-bottom:10px;">A:（≥90）&nbsp;&nbsp;B:（70~89）&nbsp;&nbsp;C:（60~79）&nbsp;&nbsp;D:（小于60）</p>
          <div style="width:100%;height:300px;">
            <div style="width:500px;height:300px;" class="score-statis" ref="barScoreStatis"></div>
            <div style="width:500px;height:300px;" class="score-statis" ref="pieScoreStatis"></div>
          </div>
          <Divider />
          <div class="rank-list">
            <h3 style="color:#2d8cf0;font-weight:bold;margin-bottom:10px;">成绩排行</h3>
            <div style="width:100%;height:340px;display:flex;align-item:middle;">
              <div>
                <Table :columns="rankColumns" :data="rankList" :width="300" :height="340" border class="rankList"></Table>
              </div>
              <div style="margin-left:60px;">
                <h3 style="margin-bottom:15px;"><span style="color:green">最高分：</span>蔡敏波（95分）</h3>
                <h3 style="margin-bottom:15px;"><span style="color:red;">最低分：</span>蔡敏波（55分）</h3>
                <h3 style="margin-bottom:15px;"><span style="color:#2d8cf0">平均分：</span>83分</h3>
              </div>
            </div>
          </div>
        </div>
      </Panel>
      <Panel name="2">
        完成情况统计
        <div slot="content" class="completion">
          <div class="completionData">
            <Table border :columns="completionColumns" :data="completionData" :width="380"></Table>
            <div class="list">
              <Table class="list-table" border :columns="incompleteListColumns" :data="incompleteList" :width="150" :height="200"></Table>
              <Table class="list-table" border :columns="completeListColumns" :data="completeList" :width="150" :max-height="200"></Table>
            </div>
          </div>
          <div class="completionCharts">
            <div style="width:300px;height:300px;" class="barCharts" ref="barCompleteCharts"></div>
            <div style="width:300px;height:300px;" class="pieCharts" ref="pieCompleteCharts"></div>
          </div>
        </div>
      </Panel>
      <Panel name="3">
        各题答题情况
        <div slot="content" class="accuracy">
          <p>各题答题正确率如下：</p>
          <div>
            <div style="float:left;width:500px;height:300px;" class="barCharts" ref="pieAccuracyCharts"></div>
            <Table class="list-table" border :columns="accuracyColumns" :data="accuracyList" :width="300" :height="300"></Table>
          </div>
          <Divider />
          <div class="select-nav">
            <h3 style="color:#2d8cf0;font-weight:bold;margin-bottom:10px;">各题具体详细情况</h3>
            <div>
              <b>请选择题数：</b>
              <Select v-model="selectedNo" style="width:100px;margin:0 10px;" placeholder="请选择">
                <Option v-for="item in selectNo" :key="item.value" :value="item.value">{{item.label}}</Option>
              </Select>
              <Button type="primary" style="margin-right:20px;">查询</Button>
              <b>题型：</b>选择题
            </div>
            <div class="data">
              <div class="accuracyData">
                <Table border :columns="singleAccColumns" :data="singleAccData" :width="380"></Table>
                <div class="list">
                  <Table class="list-table" border :columns="correctListColumns" :data="correctList" :width="150" :height="200"></Table>
                  <Table class="list-table" border :columns="incorrectListColumns" :data="incorrectList" :width="150" :max-height="200"></Table>
                </div>
              </div>
              <div class="accuracyCharts">
                <div style="width:300px;height:300px;float:left;" class="barCharts" ref="singleBarCharts"></div>
                <div style="width:300px;height:300px;float:left;" class="pieCharts" ref="singlePieACharts"></div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'homework',
  data () {
    return {
      value2: '1',
      selectedNo: 1,
      selectNo: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '5',
          label: '5'
        }
      ],
      completionColumns: [
        {
          title: '完成作业人数',
          key: 'completionNum',
          align: 'center'
        },
        {
          title: '未完成作业人数',
          key: 'incompletionNum',
          align: 'center'
        },
        {
          title: '完成率',
          key: 'completion',
          align: 'center'
        }
      ],
      completionData: [
        {
          completionNum: 70,
          incompletionNum: 5,
          completion: '93%'
        }
      ],
      incompleteListColumns: [
        {
          title: '未完成作业名单',
          key: 'name',
          align: 'center'
        }
      ],
      completeListColumns: [
        {
          title: '完成作业名单',
          key: 'name',
          align: 'center'
        }
      ],
      incompleteList: [
        {
          name: '蔡敏波'
        },
        {
          name: '蔡敏波'
        },
        {
          name: '蔡敏波'
        },
        {
          name: '蔡敏波'
        }
      ],
      completeList: [
        {
          name: '王小明'
        },
        {
          name: '王小明'
        },
        {
          name: '王小明'
        }
      ],
      accuracyColumns: [
        {
          title: '题目',
          key: 'title',
          align: 'center'
        },
        {
          title: '正确率',
          key: 'accuracy',
          align: 'center'
        }
      ],
      accuracyList: [
        {
          title: 1,
          accuracy: '70%'
        },
        {
          title: 1,
          accuracy: '70%'
        },
        {
          title: 1,
          accuracy: '70%'
        },
        {
          title: 1,
          accuracy: '70%'
        },
        {
          title: 1,
          accuracy: '70%'
        },
        {
          title: 1,
          accuracy: '70%'
        },
        {
          title: 1,
          accuracy: '70%'
        }
      ],
      singleAccColumns: [
        {
          title: '回答正确人数',
          key: 'correctnNum',
          align: 'center'
        },
        {
          title: '回答错误人数',
          key: 'incorrectNum',
          align: 'center'
        },
        {
          title: '正确率',
          key: 'accuracy',
          align: 'center'
        }
      ],
      singleAccData: [
        {
          correctnNum: 70,
          incorrectNum: 5,
          accuracy: '93%'
        }
      ],
      correctListColumns: [
        {
          title: '回答正确学生名单',
          key: 'name',
          align: 'center'
        }
      ],
      incorrectListColumns: [
        {
          title: '回答错误同学名单',
          key: 'name',
          align: 'center'
        }
      ],
      correctList: [
        {
          name: '蔡敏波'
        },
        {
          name: '蔡敏波'
        },
        {
          name: '蔡敏波'
        },
        {
          name: '蔡敏波'
        }
      ],
      incorrectList: [
        {
          name: '王小明'
        },
        {
          name: '王小明'
        },
        {
          name: '王小明'
        }
      ],
      rankColumns: [
        {
          title: '名次',
          key: 'no',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        }
      ],
      rankList: [
        {
          no: 1,
          name: '蔡敏波'
        },
        {
          no: 1,
          name: '蔡敏波'
        },
        {
          no: 1,
          name: '蔡敏波'
        },
        {
          no: 1,
          name: '蔡敏波'
        },
        {
          no: 1,
          name: '蔡敏波'
        },
        {
          no: 1,
          name: '蔡敏波'
        },
        {
          no: 1,
          name: '蔡敏波'
        }
      ]
    }
  },
  mounted () {
    // this.initScoreStatis()
    this.$nextTick(() => {
      this.initScoreStatis()
      this.initCompletionStatis()
      this.initAccuracyBar()
      this.initSingleAccuracy()
    })
  },
  methods: {
    initScoreStatis () {
      // 柱状图
      let barScoreStatis = this.$refs.barScoreStatis
      barScoreStatis.style.width = '500px'
      let barChart = this.$echarts.init(barScoreStatis)
      barChart.setOption({
        color: ['#2d8cf0'],
        xAxis: {
          type: 'category',
          data: ['成绩A', '成绩B', '成绩C', '成绩D']
        },
        yAxis: {
          type: 'value',
          name: '人数（人）'
        },
        series: [{
          data: [120, 200, 150, 80],
          type: 'bar'
        }]
      })
      barChart.resize()
      window.addEventListener('resize', function () {
        barChart.resize()
      })
      // 饼状图
      let pieScoreStatis = this.$refs.pieScoreStatis
      pieScoreStatis.style.width = '500px'
      let pieChart = this.$echarts.init(pieScoreStatis)
      pieChart.setOption({
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['成绩A', '成绩B', '成绩C', '成绩D']
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            data: [
              { value: 120, name: '成绩A' },
              { value: 200, name: '成绩B' },
              { value: 150, name: '成绩C' },
              { value: 80, name: '成绩D' }
            ]
          }
        ]
      })
    },
    initCompletionStatis () {
      let barChart = this.$refs.barCompleteCharts
      barChart.style.width = '300px'
      let completionBar = this.$echarts.init(barChart)
      completionBar.setOption({
        color: ['#2d8cf0'],
        xAxis: {
          type: 'category',
          data: ['完成作业人数', '未完成作业人数']
        },
        yAxis: {
          type: 'value',
          name: '人数（人）'
        },
        series: [{
          data: [70, 5],
          type: 'bar'
        }]
      })
      completionBar.resize()
      window.addEventListener('resize', function () {
        completionBar.resize()
      })
      let pieChart = this.$refs.pieCompleteCharts
      pieChart.style.width = '300px'
      let completionPie = this.$echarts.init(pieChart)
      completionPie.setOption({
        legend: {
          left: 10,
          data: ['完成作业', '未完成作业']
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            data: [
              { value: 70, name: '完成作业' },
              { value: 5, name: '未完成作业' }
            ]
          }
        ]
      })
    },
    initAccuracyBar () {
      let barChart = this.$refs.pieAccuracyCharts
      barChart.style.width = '500px'
      let accuracyBar = this.$echarts.init(barChart)
      accuracyBar.setOption({
        color: ['#2d8cf0'],
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8']
        },
        yAxis: {
          type: 'value',
          name: '正确率（%）'
        },
        series: [{
          data: [70, 50, 60, 90, 80, 70, 40, 100],
          type: 'bar'
        }]
      })
      accuracyBar.resize()
      window.addEventListener('resize', function () {
        accuracyBar.resize()
      })
    },
    initSingleAccuracy () {
      let barChart = this.$refs.singleBarCharts
      barChart.style.width = '300px'
      let singleBar = this.$echarts.init(barChart)
      singleBar.setOption({
        color: ['#2d8cf0'],
        xAxis: {
          type: 'category',
          data: ['回答正确人数', '回答错误人数']
        },
        yAxis: {
          type: 'value',
          name: '人数（人）'
        },
        series: [{
          data: [70, 5],
          type: 'bar'
        }]
      })
      singleBar.resize()
      window.addEventListener('resize', function () {
        singleBar.resize()
      })
      let pieChart = this.$refs.singlePieACharts
      pieChart.style.width = '300px'
      let singlePie = this.$echarts.init(pieChart)
      singlePie.setOption({
        legend: {
          left: 10,
          data: ['回答正确人数', '回答错误人数']
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            data: [
              { value: 70, name: '回答正确人数' },
              { value: 5, name: '回答错误人数' }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.homeworkStatis {
  height: 600px;
  min-height: 600px;
  h1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 8px;
  }
  .score {
    height: 750px;
    width: 100%;
    .score-statis {
      border: 1px solid rgba(0, 0, 0, 0.5);
      float: left;
      margin-right:20px;
    }
    .rank-list {
      display: block;
      width: 100%;
      height: 350px;
    }
  }
  .completion {
    height: 350px;
    width: 100%;
    .completionData {
      float: left;
      width: 40%;
      .list {
        margin-top: 20px;
        .list-table {
          float: left;
          margin-right: 30px;
        }
      }
    }
    .completionCharts {
      float: left;
      width: 60%;
      .barCharts {
        float: left;
        border: 1px solid rgba(0, 0, 0, 0.5);
      }
      .pieCharts {
        float: left;
        margin-left: 20px;
        border: 1px solid rgba(0, 0, 0, 0.5);
      }
    }
  }
  .accuracy {
    width: 100%;
    height: 800px;
    min-height: 800px;
    .data {
      margin-top: 20px;
      height: 600px;
      width: 100%;
      display: flex;
      align-items: middle;
      .accuracyData {
        width: 40%;
        height: 500px;
        float: left;
        .list {
          margin-top: 20px;
          .list-table {
            float: left;
            margin-right: 30px;
          }
        }
      }
      .accuracyCharts {
        width: 60%;
        height: 500px;
        float: left;
        .barCharts {
          float: left;
          border: 1px solid rgba(0, 0, 0, 0.5);
        }
        .pieCharts {
          float: left;
          margin-left: 20px;
          border: 1px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>
