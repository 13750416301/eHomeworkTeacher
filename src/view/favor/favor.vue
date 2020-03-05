<template>
  <div class="favor">
    <!-- <h1 style="text-align:center;margin-top:200px;color:#2d8cf0;font-size:50px;">STU学生作业系统</h1> -->
    <div class="title">
        <h1 style="color:#2d8cf0;">我的收藏</h1>
        <div class="addNoteBtn">
            <Icon type="md-add-circle" size="40" />
        </div>
    </div>

    <div class="content">
        <div class="favorFolder">
            <div class="favorBrid">
                <Icon type="md-folder" style="color:#84cdfd;" size="70" />
                <span class="folderName">收藏</span>
            </div>
            <div class="favorBrid">
                <Icon type="md-folder" style="color:#84cdfd;" size="70" />
                <span class="folderName">错题集</span>
            </div>
            <div class="favorBrid">
                <Icon type="md-folder" style="color:#84cdfd;" size="70" />
                <span class="folderName">备考用</span>
            </div>
            <div class="favorBrid">
                <Icon type="md-folder" style="color:#84cdfd;" size="70" />
                <span class="folderName">经典题</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'favor',
  data () {
    return {
      model9: ''
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
    margin-bottom: 10px;
    .addNoteBtn {
        position: absolute;
        right: 40px;
        top: 0;
        cursor: pointer;
        color: #2d8cf0;
    }
}
.content {
    margin-top: 10px;
    border-top: 2px solid #000;
    .favorFolder {
        width: 100%;
        padding: 20px 0;
        .favorBrid {
            float: left;
            margin-left: 50px;
            margin-top: 30px;
            width: 300px;
            height: 110px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            display: flex;
            align-items: center;
            padding-left: 25px;
            cursor: pointer;
            .folderName {
                margin-left: 10px;
                font-size: 16px;
            }
        }
        .favorBrid:hover {
            background-color: #f2f9ff;
            color: #2d8cf0;
        }
    }
}
</style>
