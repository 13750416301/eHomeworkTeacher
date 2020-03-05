<template>
  <div class="homework">
    <h1 style="color:#2d8cf0;margin:10px 0;">账户信息</h1>
    <Tabs value="info">
        <TabPane class="infoTab" label="个人资料" name="info">
            <Form label-position="right" :label-width="100">
                <FormItem label="账号：">
                    <span class="item-value">16mbcai</span>
                </FormItem>
                <FormItem label="邮箱：">
                    <span class="item-value">1535151019@qq.com</span><Button type="default" @click="isEmail=true">修改</Button>
                </FormItem>
                <FormItem label="电话号码：">
                    <span class="item-value">13750416301</span><Button type="default" @click="isPhone=true">修改</Button>
                </FormItem>
                <FormItem label="姓名：">
                    <span class="item-value">蔡敏波</span><Button type="default" @click="isName=true">修改</Button>
                </FormItem>
                <FormItem label="性别：">
                    <RadioGroup style="font-size:14px;">
                        <Radio label="男">
                            <Icon type="md-male"></Icon>
                            <span class="item-value">男</span>
                        </Radio>
                        <Radio label="女">
                            <Icon type="md-female"></Icon>
                            <span class="item-value">女</span>
                        </Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="学号：">
                    <span class="item-value">2016101001</span>
                </FormItem>
            </Form>
        </TabPane>
        <TabPane label="头像" name="avator">标签二的内容</TabPane>
        <TabPane label="密码" name="password">
          <Form label-position="right" :label-width="100">
                <FormItem label="旧的密码：">
                    <Input style="width:200px;" />
                </FormItem>
                <FormItem label="新的密码：">
                    <Input style="width:200px;" />&nbsp;&nbsp;*密码长度为8~14个字符，字母/数字以及标点符号至少包含2种
                </FormItem>
                <FormItem label="确认新密码：">
                    <Input style="width:200px;" />
                </FormItem>
                <FormItem>
                    <Button type="primary" style="width:80px;">确认</Button>
                </FormItem>
            </Form>
        </TabPane>
        <TabPane label="登陆信息" name="loginLog">
          <Table border :columns="loginColumns" :data="loginData"></Table>
        </TabPane>
    </Tabs>
    <Modal class="modal" v-model="isEmail">
      <div slot="header" class="modal-head">
        <div>修改邮箱地址</div>
      </div>
      <Form label-position="right" :label-width="100">
        <FormItem label="旧的邮箱地址：">
          <div>1535151019@qq.com</div>
        </FormItem>
        <FormItem label="新的邮箱地址：">
          <Input style="width:200px;" />
        </FormItem>
      </Form>
    </Modal>
    <Modal class="modal" v-model="isPhone">
      <div slot="header" class="modal-head">
        <div>修改电话号码</div>
      </div>
      <Form label-position="right" :label-width="100">
        <FormItem label="旧的电话号码：">
          <div>13750416301</div>
        </FormItem>
        <FormItem label="新的电话号码：">
          <Input style="width:200px;" />
        </FormItem>
      </Form>
    </Modal>
    <Modal class="modal" v-model="isName">
      <div slot="header" class="modal-head">
        <div>修改用户姓名</div>
      </div>
      <Form label-position="right" :label-width="100">
        <FormItem label="旧的用户姓名：">
          <div>蔡敏波</div>
        </FormItem>
        <FormItem label="新的用户姓名：">
          <Input style="width:200px;" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'homework',
  data () {
    return {
      // 修改弹窗弹出判定
      isEmail: false,
      isPhone: false,
      isName: false,
      loginColumns: [
        {
          title: '编号',
          key: 'no',
          width: 100
        },
        {
          title: 'IP',
          key: 'ip'
        },
        {
          title: '时间',
          key: 'time'
        },
        {
          title: '登陆方式',
          key: 'methods'
        }
      ],
      loginData: [
        {
          no: 1,
          ip: '27.43.168.5',
          time: '2020-02-22 08:49:33',
          methods: '网页登陆'
        },
        {
          no: 1,
          ip: '27.43.168.5',
          time: '2020-02-22 08:49:33',
          methods: '网页登陆'
        },
        {
          no: 1,
          ip: '27.43.168.5',
          time: '2020-02-22 08:49:33',
          methods: '网页登陆'
        },
        {
          no: 1,
          ip: '27.43.168.5',
          time: '2020-02-22 08:49:33',
          methods: '网页登陆'
        }
      ]
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less" scoped>
.infoTab {
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
}
.modal {
  /deep/ .ivu-modal-close {
    color: #fff;
    .ivu-icon {
      color: #fff;
    }
  }
  /deep/ .ivu-modal-header {
    background-color: #2d8cf0;
    color: #fff;
  }
  .modal-head {
    width: 100%;
  }
}
.item-value {
    margin-right: 20px;
    font-size: 14px;
}
</style>
