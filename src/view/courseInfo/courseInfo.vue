<template>
  <div class="courseInfo">
    <!-- <h1 style="text-align:center;margin-top:200px;color:#2d8cf0;font-size:50px;">STU学生作业系统</h1> -->
    <h1 style="color:#2d8cf0;margin:10px 0;">我的课程</h1>
    <div class="course">
        <div class="course-brid" @click="toCourseDetail">
            <div class="course-image">
                <img src="../../assets/images/course/马克思主义.jpg" />
            </div>
            <a>马克思主义</a>
        </div>
        <div class="course-brid">
            <div class="course-image">
                <img src="../../assets/images/course/毛泽东思想.jpg" />
            </div>
            <a>毛泽东思想</a>
        </div>
        <div class="course-brid">
            <div class="course-image">
                <img src="../../assets/images/course/大学物理.jpg" />
            </div>
            <a>大学物理</a>
        </div>
        <div class="course-brid">
            <div class="course-image">
                <img src="../../assets/images/course/离散数学.jpg" />
            </div>
            <a>离散数学</a>
        </div>
        <div class="course-brid">
            <div class="course-image">
                <img src="../../assets/images/course/计算机网络.jpg" />
            </div>
            <a>计算机网络</a>
        </div>
        <div class="course-brid">
            <div class="course-image">
                <img src="../../assets/images/course/数据结构.jpg" />
            </div>
            <a>数据结构</a>
        </div>
        <div class="course-brid">
            <div class="course-image">
                <img src="../../assets/images/course/操作系统原理.jpg" />
            </div>
            <a>操作系统原理</a>
        </div>
        <div class="course-brid">
            <div class="add-btn">
                <Icon type="md-add-circle" style="color:#2d8cf0;line-height: 100%;" size="140" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'courseInfo',
  data () {
    return {
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  methods: {
    toCourseDetail () {
      // axios.get('http://127.0.0.1:3000/getUser').then(res => {
      //   if (res.data.code === 0 && res.data.data) {
      //     // this.isLogin = true
      //     // this.userData = res.data.data
      //     console.log(res.data.data)
      //   }
      // })
      this.$router.push({ path: '/courseInfo/courseDetail' })
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less" scoped>
/deep/ .ivu-tabs-tab {
    width: 100px;
    text-align: center;
    // padding: 0;
    // line-height: 45px;
    // font-size: 20px;
}
/deep/ .ivu-form-item {
    margin-bottom: 20px;
    padding-bottom: 15px;
    font-size: 14px;
    border-bottom: 1px dotted #000;
}
/deep/ .ivu-form .ivu-form-item-label {
    font-size: 14px;
    color: #000;
}
/deep/ .ivu-form-item-content {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
}
.item-value {
    margin-right: 20px;
    font-size: 14px;
}
.course {
    width: 100%;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    .course-brid {
        width: 240px;
        height: 280px;
        text-align: center;
        float: left;
        margin-right: 50px;
        cursor: pointer;
        .course-image {
            width: 100%;
            height: 85%;
            border: 2px solid #2d8cf0;
            img {
                width: 100%;
                height: 100%;
            }
        }
        a {
            // margin-top: 10px;
            line-height: 40px;
            font-size: 14px;
            color: #000;
        }
        a:hover {
            text-decoration: underline;
            color: #2d8cf0;
        }
        .add-btn {
            width: 101%;
            height: 85%;
            border: 2px solid #2d8cf0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
}
</style>
