<template>
  <div class="homework">
    <h1 style="color:#2d8cf0;margin:10px 0;">马克思作业5</h1>
    <Collapse v-model="value2">
      <Panel name="1">
        成绩统计
        <div slot="content" class="score">
          <p style="margin-bottom:10px;">A:（≥90）&nbsp;&nbsp;B:（70~89）&nbsp;&nbsp;C:（60~79）&nbsp;&nbsp;D:（小于60）</p>
          <div style="width:500px;height:300px;" class="score-statis" ref="barScoreStatis"></div>
          <div style="width:500px;height:300px;" class="score-statis" ref="pieScoreStatis"></div>
        </div>
      </Panel>
      <Panel name="2">
        完成情况统计
        <div slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</div>
      </Panel>
      <Panel name="3">
        乔纳森·伊夫
        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'homework',
  data () {
    return {
      // 修改弹窗弹出判定
      value2: '1'
    }
  },
  mounted () {
    // this.initScoreStatis()
    this.$nextTick(() => {
      this.initScoreStatis()
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
          type: 'value'
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
    }
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
  .score {
    height: 360px;
    width: 100%;
    .score-statis {
      border: 1px solid rgba(0, 0, 0, 0.5);
      float: left;
      margin-right:20px;
    }
  }

}
</style>
