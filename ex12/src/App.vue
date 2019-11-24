<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    let path = this.$router.history.current.path;
    if(path=="/"){
		this.$router.push({
				path:'/login'
			});
			this.isLogin = false
	  }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  color: inherit;
  font: inherit;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
  /* -webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		user-select: none; */
  color: inherit;
  font: inherit;
}
.left-top{
	background: #353441;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  z-index: 1001;
}
.middle-right{
	padding-left: 201px;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

input {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}

.clear:after {
  content: '';
  display: block;
  clear: both;
}

html,body{
	width: 100%;
	height: 100%;
}
#app {
	height: 100%;
	width: 100%;
}
.system-middle-one {
		border-bottom: 1px solid #f2f2f2;
		padding-bottom: 10px;
		height: 27px;
}
.system-middle-top-text3 {
		font-size: 18px;
		font-family: SourceHanSansCN-Normal;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
.viewer-transition {
	z-index: 9999 !important;
}
.router{
	padding-top: 78px !important;
}
.bd { border: 1px solid; }
.bzb { box-sizing: border-box; }
.h100pc { height: 100%; }
.w100pc { width: 100%; }
.dsn { display: none; }
/*// (4) 定位*/
.fixed { position: fixed; }
.rel { position: relative; }
.abs { position: absolute; }
/*// (7)居中*/
.tac { text-align: center; }
/*// (8) 行高*/
.lh15 { line-height: 1.5; }
/*// 颜色设置*/
.f999 { color: #999; }
.fff { color: #ffffff; } 
.gray { color: #ECEEF2; }
.fffs { color: #ffffff;
				font-size: 14px; } 
.grays { color: #ECEEF2; 
         font-size: 14px; }
.grays { color: #696969; }
.blue{	color: #00A9FF;}
.red{	color: red;}
.green{	color: #5BB021;}
.orange{	color: #F79F61;}
.red2x{	color: #FD5454;}
/*// (11) 背景颜色*/
.bg-green { background: green; }
.bg-gray { background: #ECEEF2;}
.bg-fff { background: #ffffff;}
.bg-grays { background: #ECEEF2; font-size: 14px; }
.bg-fffs { background: #ffffff; font-size: 14px; }
.bg-black { background: #222426; } 

/*字体加粗*/
.weight{ font-weight: bold; }
.weight4{ font-weight: 400; }

/*鼠标类型*/
 .cursor{
 	    cursor: pointer;
 }

.font{
	font-family:SourceHanSansCN-Regular;
font-weight:400;
color:rgba(51,51,51,1)
}

.fontN{
	font-family:SourceHanSansCN-Normal;
font-weight:400;
color:rgba(51,51,51,1)
}
/*字体大小*/
.f10{ font-size: 10px; }
.f11{ font-size: 11px; }
.f12{ font-size: 12px; }
.f14{ font-size: 14px; }
.f16{ font-size: 16px; }
.f18{ font-size: 18px; }
.f20{ font-size: 20px; }
.f22{ font-size: 22px; }
.f24{ font-size: 24px; }
.f26{ font-size: 26px; }
.f28{ font-size: 28px; }

.fw {font-weight: bold;}

 .right-top{
 	height: 56px;
 	background-color: #FFFFFF;
 	color: #00A9FF;
 }
/*// flex相关
// 水平居中,垂直居中*/
.fcc {
    -moz-display: flex;
    -moz-justify-content: center;
    -moz-align-items: center;
    -webkit-display: flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    -o-display: flex;
    -o-justify-content: center;
    -o-align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ifcc {
    -moz-display: inline-flex;
    -moz-justify-content: center;
    -moz-align-items: center;
    -webkit-display: inline-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    -o-display: inline-flex;
    -o-justify-content: center;
    -o-align-items: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
/*// 垂直居中,两端对齐*/
.flex-sb {
    -moz-display: flex;
    -moz-justify-content: space-between;
    -moz-align-items: center;
    -webkit-display: flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    -o-display: flex;
    -o-justify-content: space-between;
    -o-align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/*// 垂直居中,分散对齐*/
.flex-sa {
    -moz-display: flex;
    -moz-justify-content: space-around;
    -moz-align-items: center;
    -webkit-display: flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    -o-display: flex;
    -o-justify-content: space-around;
    -o-align-items: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
/*// 剩余空间分配*/
.fg1 { 
			 -moz-flex-grow: 1;
			 -webkit-flex-grow: 1;
			 -o-flex-grow: 1;
			 flex-grow: 1;
			  }
.fg2 { 
	-moz-flex-grow: 2; 
	-webkit-flex-grow: 2; 
	-o-flex-grow: 2; 
	flex-grow: 2; 
	}
	
.fg3 { 
	-moz-flex-grow: 3; 
	-webkit-flex-grow: 3; 
	-o-flex-grow: 3; 
	flex-grow: 3; 
	}
	
.flex { 
				-o-display: flex; 
				-moz-display: flex;
				-webkit-display: flex;
				display: flex;
			}
/*// 纵向排列*/
.fdc {
    -moz-display: flex;
    -moz-flex-direction: column;
    -webkit-display: flex;
    -webkit-flex-direction: column;
    -o-display: flex;
    -o-flex-direction: column;
    display: flex;
    flex-direction: column;
}
/*// 水平垂直居中*/
.fdcc {
    -moz-display: flex;
    -moz-flex-direction: column;
    -moz-justify-content: center;
    -moz-align-items: center;
    -webkit-display: flex;
    -webkit-flex-direction: column;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    -o-display: flex;
    -o-flex-direction: column;
    -o-justify-content: center;
    -o-align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
/*// justify-content*/
.jc-start { 
	-moz-justify-content: flex-start; 
	-webkit-justify-content: flex-start;
	-o-justify-content: flex-start;
	justify-content: flex-start;
	}
	.jc-end { 
	-moz-justify-content: flex-end; 
	-webkit-justify-content: flex-end;
	-o-justify-content: flex-end;
	justify-content: flex-end;
	}
.jc-center { 
	-moz-justify-content: center; 
	-webkit-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	}
.jc-sb { 
	-moz-justify-content: space-between; 
	-webkit-justify-content: space-between; 
	-o-justify-content: space-between; 
	justify-content: space-between; 
	}
.jc-sa { 
	-moz-justify-content: space-around; 
	-webkit-justify-content: space-around; 
	-o-justify-content: space-around; 
	justify-content: space-around; 
	}
.ai-center { 
	-moz-align-items: center; 
	-webkit-align-items: center; 
	-o-align-items: center; 
	align-items: center; 
	}
	
	/* margin */
	/* padding */
	.mg-t-5 {
		margin-top: 5px;
	}
	
	.mg-t-10 {
		margin-top: 10px;
	}
	
	.mg-t-20 {
		margin-top: 20px;
	}

	.mg-t-30 {
		margin-top: 30px;
	}

	.mg-t-40 {
		margin-top: 40px;
	}

	.mg-t-50 {
		margin-top: 50px;
	}

	.mg-t-60 {
		margin-top: 60px;
	}

	.mg-top-150{
		margin-top: 150px;
	}

	.pd-b-40 {
		padding-bottom: 40px;
	}
	.mg-b-10 {
		margin-bottom: 10px;
	}
	.mg-b-20{
    margin-bottom: 20px;
  }
	.mg-b-30 {
		margin-bottom: 30px;
	}
	
	.mg-b-40 {
		margin-bottom: 40px;
	}

.mg-r-5 {
		margin-right: 5px;
	}

	.mg-r-10 {
		margin-right: 10px;
	}

	.mg-r-30 {
		margin-right: 30px;
	}

	.mg-l-10 {
		margin-left: 10px;
	}

	.mg-l-20 {
		margin-left: 20px;
	}

.pd-l-5 {
		padding-left: 5px;
	}

	.pd-30{
		padding: 30px;
	}
	
.pd-l-10 {
		padding-left: 10px;
	}


	.pd-l-30 {
		padding-left: 30px;
	}

	.pd-l-40 {
		padding-left: 40px;
	}

	.lrmg-30 {
		margin: 0 30px;
	}

	.pd-r-10 {
		padding-right: 10px;
	}

	.pd-l-10 {
		padding-left: 10px;
	}

	.pd-l-20 {
		padding-left: 20px;
	}

	.pd-r-20 {
		padding-right: 20px;
	}
	
	.pd-t-30{
		padding-top: 30px;
	}

	.pd-r-30 {
		padding-right: 30px;
	}


.lrpadd-10 {
		padding: 0 10px;
	}
	.lrpadd-30 {
		padding: 0 30px;
	}

	.lrpadd-40 {
		padding: 0 40px;
	}

	.tmpadd-10 {
		padding: 10px 0;
	}

	.tmpadd-20 {
		padding: 20px 0;
	}


.tmmgin-10 {
		margin: 10px 0;
	}
	.tmmgin-20 {
		margin: 20px 0;
	}
	
	.tmmgin-30 {
		margin: 30px 0;
	}
	
	.tmmgin-40 {
		margin: 40px 0;
	}

	.tmpadd-30 {
		padding: 30px 0;
	}

	.tmpadd-40 {
		padding: 40px 0;
	}
	
	.pd-r-100{
		padding-right: 100px;
	}
	.pd-r-270{
		padding-right: 270px;
	}
	
	.pd-l-100{
		padding-left: 100px;
	}
	
	.pd-r-70{
		padding-right: 70px;
	}
.el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
		text-align: center;
	}
	.el-table__footer-wrapper, .el-table__header-wrapper table thead tr th{
		background: #EBEEF3;
	}
	.el-table table {
		border-collapse:collapse;
		border: 1px solid #F2F2F2;
	}
	#table table td{
		border:1px solid #E1E1E1;
	}
	#table table{
		border-collapse: collapse;
	}

	ul {
		list-style-type: none;
	}
	.textDeco {
		text-decoration: underline;
	}
	.hh {
		flex-wrap:wrap;
	}

</style>
