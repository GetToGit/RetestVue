 <template>
  <div class="header">
    <div class="info">
      <a href="/">
        <img :src='require("@/assets/image/cnodejs.svg")' alt="网站logo" />
      </a>
      <span @click="aboutVisible">关于</span>
    </div>
  </div>
</template>

<script>
import less from 'less'

export default {
  name: "Header",
  data() {
    return {
      aboutVisible: false,
    };
  },
};
</script>

<style long='less' scoped>
  .header {
    width: 100%;
    height: 50px;
    background: #444;
  }
  div.info{
    width: 1200px;
    height: 100%;
    margin: auto;
  }
  a{
    width: 120px;
    height: 50px;
    display: block;
    float: left;
    line-height: 50px;
  }
  span {
      float: right;
      height: 50px;
      line-height: 50px;
      color: #fff;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
  }
  img{
    display: block;
    margin-top: 11px;
  }
</style>