<template>
  <div id="product-management">
      <div class="flex-sb right-top lrpadd-10 bg-fff">
			<div class="fcc">
				<div class="f14 weight4 pd-l-10">
					营销/优惠活动
				</div>
			</div>
			<div class="pd-r-20">
				<el-button size="small" icon="el-icon-refresh" class="blue">刷新</el-button>
			</div>
		</div>
    <el-divider class="mg-t-10"></el-divider>
    <div class="pd-30" v-loading="loading">
        <div class="fontN">
          <el-button type="primary" size="small">添加产品</el-button>
          <el-button type="primary" size="small">设置上架</el-button>
          <el-button type="primary" size="small">删除产品</el-button>
					<el-table :data="listData" border style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column fixed label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
						<el-table-column prop="id" label="产品名称">
						</el-table-column>
						<el-table-column prop="nickname" label="分类名称">
							<template slot-scope="scope"><span>{{ scope.row.nickname }}</span></template>
						</el-table-column>
						<el-table-column prop="mobile" label="录入时间">
						</el-table-column>
						<el-table-column prop="mobile" label="上架">
						</el-table-column>
						<el-table-column prop="mobile" label="标签">
						</el-table-column>
						<el-table-column prop="zhimacreditstate" label="备注">
							<template slot-scope="scope">{{ scope.row.zhimacreditstate == 2 ? '授权通过' : (scope.row.zhimacreditstate == 1 ? '授权中' : '未授权') }}</template>
						</el-table-column>
					</el-table>
				</div>
    </div>
    <div class="block fcc mg-t-40">
					<el-pagination @size-change="handleSizeChange" :current-page="currentpage" @current-change="handleCurrentChange" :page-sizes="$pagingArr" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total_count">
					</el-pagination>
				</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        pagesize: 10,
				listData:[],
        currentpage: 1,
				total_count: 10,
      };
    },
    methods: {
      handleCurrentChange(val) {
				let that = this
				that.currentpage = val
				that.requestList()
      },
      handleSizeChange(val) {
				let that = this
				that.pagesize = val
				that.currentpage = 1
				that.requestList()
      },
      requestList(){
        return
      }
    }
  }

</script>
<style scoped>

</style>