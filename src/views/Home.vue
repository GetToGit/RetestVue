<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="tabChanged">
      <el-tab-pane label="全部" name="all">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <Content :list="list" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * 主页
 *
 */
import Content from "@/components/Content.vue";
import { getTopics } from "@/utils/api";
import { setSession, getSession } from "@/utils/util";

export default {
  name: "Home",
  /**
   *  data
   */
  data() {
    return {
      page: 1,
      limit: 20,
      tab: 'all',
      list: [],
      store: {}, // 储存所有Tab对应的数据
    };
  },

  /**
   * 组件方法
   */
  methods: {
    /**
     * 封装获取首页数据方法
     */
    getTopics() {
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab,
      }).then((res) => {
        this.list = res.data;
        this.limit = this.limit + 10;

        const store = this.store;
        // 数据储存在对应的key
        store[this.tab] = {
          limit: this.limit,
          data: res.data,
        };
      });
    },
    //  滚动判断 底部是否重新获取数据
    scrollMethod() {
      const sumH =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const viewH = document.documentElement.clientHeight;
      const scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      viewH + scrollH >= sumH ? this.getTopics() : console.log("没了");
    },
    /**
     * 当前Tab变化时判断store 里是否已经储存数据
     * 是： 拉出来，设置到store中
     * 否： 重新获取数据
     */
    tabChanged() {
      const store = this.store;
      console.log(this.tab);
      setSession("activeTab", this.tab);
      if (!store[this.data]) {
        this.limit = 20;
        this.list = [];
        this.getTopics();

        return;
      }

      this.list = store[this.tab].data;
      this.limit = store[this.tab].limit;
    },
  },

  //    一般次钩子 下面调用接口数据
  created() {
    this.tab = getSession("activeTab") ? getSession("activeTab") : "all";
    this.getTopics();
    window.addEventListener("scroll", this.scrollMethod);
  },

  // 组件被销毁 移除绑定滚动事件
  destroyed() {
    window.removeEventListener("scroll", this.scrollMethod);
  },

  // 注册引来的其他组件
  components: {
    Content,
  },
};
</script>

<style lang="stylus" scoped>
.home {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>