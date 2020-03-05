<template>
  <div class="courseDetail">
    <h2 style="color:#2d8cf0;margin:10px 0;">课程简介</h2>
    <div class="course-intro">
      <div class="course-image">
        <img src="../../assets/images/course/马克思主义.jpg" />
      </div>
      <div class="course-intro-text">
        <h2>课程名称：马克思主义基本原理</h2>
        <p><b>讲师：</b>杨沐</p>
        <p><b>类型：</b>马克思主义学院\非通识课</p>
        <p><b>授课形式：</b>理论讲授</p>
        <p><b>开课周数：</b>3 ~ 18</p>
        <p><b>开课时间：</b>周一ABC节；</p>
        <p><b>教室：</b>讲堂一；</p>
        <p><b>课程简介：</b>《马克思主义基本原理》是马克思主义理论一级学科下的第一个二级学科。马克思主义基本原理学科专业立足于对马克思主义进行整体性研究，并与马克思主义中国化研究、马克思主义发展史、国外马克思主义、社会思潮研究相结合，体现马克思主义基本原理及其在中国的运用与发展。旨在研究马克思主义经典著作和基本原理，从整体上研究和把握马克思主义科学体系。</p>
      </div>
    </div>
    <h2 style="color:#2d8cf0;margin:10px 0;">最新课程作业</h2><br>
    <div class="course-homework">
      <Table class="homework-table" border :columns="homeworkColumns" :data="homeworkData" :height="300"></Table>
    </div>
  </div>
</template>
<script>
// import moment from 'moment'
// import axios from 'axios'
export default {
  name: 'courseDetail',
  created () {
    this.timeStamp = Date.now()
  },
  data () {
    return {
      timeStamp: null,
      dateTime: null,
      homeworkColumns: [
        {
          title: '标题',
          key: 'title'
        },
        {
          title: '发布者',
          key: 'publisher'
        },
        {
          title: '开始时间',
          key: 'beginTime'
        },
        {
          title: '结束时间',
          key: 'endTime'
        },
        {
          title: '状态',
          key: 'status',
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
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
        },
        {
          title: '马克思作业五',
          publisher: '杨沐',
          beginTime: '2020年2月25日20点33分',
          endTime: '2020年2月25日20点33分',
          status: '进行中'
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
.courseDetail {
  height: 700px;
}
.course-intro {
  width: 100%;
  height: 350px;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  .course-image {
    float: left;
    width: 300px;
    height: 320px;
    border: 2px solid #2d8cf0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .course-intro-text {
    width: 65%;
    float: left;
    margin-left: 20px;
    p {
      line-height: 200%;
    }
  }
}

.course-homework {
  display: block;
  width: 100%;
  // height: 800px;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
