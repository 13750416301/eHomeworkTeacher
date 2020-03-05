<template>
  <div class="note">
    <!-- <h1 style="text-align:center;margin-top:200px;color:#2d8cf0;font-size:50px;">STU学生作业系统</h1> -->
    <div class="title">
        <div class="switchType">
            <Select v-model="model9" style="width:90px" placeholder="关注">
                <Option value="关注" label="关注"></Option>
                <Option value="推荐" label="推荐"></Option>
                <Option value="我的" label="我的"></Option>
                <Option value="特别关注" label="特别关注"></Option>
            </Select>
        </div>
        <div class="addNoteBtn">
            <Icon type="md-open" size="30" />
        </div>
    </div>
    <div class="gotoNote">
        <div class="gotoNoteTitle"><Icon type="md-bookmarks" style="color:#fff;margin-right:5px" size="20" />笔记本</div>
        <div class="arrow"><Icon type="ios-arrow-forward" /></div>
    </div>
    <!-- <div class="content">
        <div class="noContent">
            <div class="noContentImg">
                <img src="../../assets/images/note/noactivity.png" />
            </div>
            <p>暂无笔记</p>
        </div>
    </div> -->
    <div class="content">
        <Card class="card" style="width:500px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                个人笔记1
            </p>
            <a slot="extra">
              <Button @click="isCard=true" type="info">查看</Button>
            </a>
            <p style="margin-bottom:8px;" class="note-info"><b>作业：</b>马克思主义作业1&nbsp;&nbsp;&nbsp;&nbsp;<b>科目：</b>马克思主义基本原理</p>
            <p style="margin-bottom:8px;" class="note-info"><b>类型：</b>选择题</p>
            <p style="margin-bottom:8px;"><b>题目：</b>根据IID模型，开发过程中如果发现不能按期完成任务时应该…</p>
            <p><b>备注：</b>应该取消或简化某些任务…</p>
        </Card>
        <Card class="card" style="width:500px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                个人笔记1
            </p>
            <a slot="extra">
              <Button @click="isCard=true" type="info">查看</Button>
            </a>
            <p style="margin-bottom:8px;" class="note-info"><b>作业：</b>马克思主义作业1&nbsp;&nbsp;&nbsp;&nbsp;<b>科目：</b>马克思主义基本原理</p>
            <p style="margin-bottom:8px;" class="note-info"><b>类型：</b>选择题</p>
            <p style="margin-bottom:8px;"><b>题目：</b>根据IID模型，开发过程中如果发现不能按期完成任务时应该…</p>
            <p><b>备注：</b>应该取消或简化某些任务…</p>
        </Card>
        <Card class="card" style="width:500px;">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                个人笔记1
            </p>
            <a slot="extra">
              <Button @click="isCard=true" type="info">查看</Button>
            </a>
            <p style="margin-bottom:8px;" class="note-info"><b>作业：</b>马克思主义作业1&nbsp;&nbsp;&nbsp;&nbsp;<b>科目：</b>马克思主义基本原理</p>
            <p style="margin-bottom:8px;" class="note-info"><b>类型：</b>选择题</p>
            <p style="margin-bottom:8px;"><b>题目：</b>根据IID模型，开发过程中如果发现不能按期完成任务时应该…</p>
            <p><b>备注：</b>应该取消或简化某些任务…</p>
        </Card>
    </div>
    <Modal v-model="isCard" width="750">
      <p slot="header">
        <Icon type="ios-film-outline"></Icon>
        个人笔记1
      </p>
      <p class="note-info" style="margin-bottom:12px;"><b>作业：</b>马克思主义作业1&nbsp;&nbsp;&nbsp;&nbsp;<b>科目：</b>马克思主义基本原理&nbsp;&nbsp;&nbsp;&nbsp;<b>类型：</b>选择题</p>
      <p><b>题目：</b>根据IID模型，开发过程中如果发现不能按期完成任务时应该…</p>
      <p class="option">A.增加开发人员</p>
      <p class="option">B.开发人员加班加点争取完成任务</p>
      <p class="option">C.取消或简化某些任务</p>
      <p class="option">D.早期计划不周，发现问题时为期已晚，项目延期不可避免</p>
      <p><b>正确答案：</b>A&nbsp;&nbsp;&nbsp;&nbsp;<b>我的答案：</b>A</p>
      <p style="margin-top:10px;" class="note-text"><b>备注笔记：</b>应该取消或简化某些任务…</p>
      <div slot="footer" style="text-align:center;">
          <Button @click="isCard=false" type="info">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'note',
  data () {
    return {
      isCard: false
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
.title {
    position: relative;
    margin-bottom: 20px;
    .switchType {
        text-align: center;
    }
    .addNoteBtn {
        position: absolute;
        right: 40px;
        top: 0;
        cursor: pointer;
        color: #2d8cf0;
    }
}
.gotoNote {
    font-size: 15px;
    color: #fff;
    border-top: 2px solid #000;
    background-color: rgba(45, 140, 240, 0.8);
    height: 45px;
    line-height: 45px;
    padding: 0 40px;
    .gotoNoteTitle {
        float: left;
        display: flex;
        align-items: center;
    }
    .arrow {
        float: right;
    }
}
.content {
    padding-top: 25px;
    .noContent {
        margin-top: 100px;
        text-align: center;
    }
    .card {
      float: left;
      margin-right: 30px;
      margin-bottom: 30px;
    }
}

</style>
