<template>
  <div id="product-management">
      <div class="flex-sb right-top lrpadd-10 bg-fff">
			<div class="fcc">
				<div class="f14 weight4 pd-l-10">
					产品/产品管理
				</div>
			</div>
			<div class="pd-r-20">
				<el-button size="small" icon="el-icon-refresh" class="blue">刷新</el-button>
			</div>
		</div>
    <el-divider class="mg-t-10"></el-divider>
    <div class="pd-30" v-loading="loading">
        <div class="fontN">
          <el-button type="primary" size="small" @click="dialogFormVisible = true">添加产品</el-button>
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
    <el-dialog title="添加产品" :visible.sync="dialogFormVisible">
        <el-tabs tab-position="left" >
        <el-tab-pane label="基本信息">
          <el-form :model="form">
            <el-form-item label="产品名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="产品图片" :label-width="formLabelWidth">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="详细介绍">
          
        </el-tab-pane>
      </el-tabs>
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
        dialogFormVisible: false,
        formLabelWidth: '120px',
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        fileList: []
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
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }

</script>
<style scoped>

</style>