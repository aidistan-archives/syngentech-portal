<template>
  <div id="investors">
    <h1>融资情况</h1>
    <hr>
    <br>
    <el-timeline>
      <el-timeline-item timestamp="2018年" placement="top">
        <h4>PreB轮：君岳共享</h4>
        <el-image :src="images[2]" height="60px"></el-image>
      </el-timeline-item>
      <el-timeline-item timestamp="2017年" placement="top">
        <h4>A轮：荷塘创投<small>（前启迪创投）</small>，格致噗</h4>
        <el-image :src="images[0]" height="60px"></el-image>
        <el-image :src="images[1]" height="60px"></el-image>
      </el-timeline-item>
      <el-timeline-item timestamp="2016年" placement="top">
        <h4>天使轮</h4>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      images: [
        require('../assets/investor-0.png'),
        require('../assets/investor-1.jpg'),
        require('../assets/investor-2.png')
      ]
    }
  }
}
</script>

<style lang="scss">
#investors {
  .el-timeline-item__timestamp,
  .el-timeline-item__content {
    color: inherit;
  }

  .el-image {
    height: 50px;
  }
  .el-image + .el-image {
    margin-left: 20px;
  }
}
</style>
