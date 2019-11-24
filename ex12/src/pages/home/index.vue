<template>
  <div id="home">
    <div class="left-top">
        <el-menu :default-active="active" class="el-menu-vertical-demo" @select="handleClick" background-color="#353441" text-color="#fff" active-text-color="#00A9FF">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-cooperation"></i>
                    <span>产品</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="product/product-management" >产品管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span>订单</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="order/order-management" >订单管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>会员</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="member/user-admin" >用户管理</el-menu-item>
                    <el-menu-item index="member/backstage-admin" >后端管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-marketing"></i>
                    <span>营销</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="marketing/preferential-activities" >优惠活动</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
    <router-view class="middle-right"></router-view>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        active: 'activity-center'
      };
    },
    methods: {
      handleClick(index) {
				this.$router.push({
					path: '/home/children/' + index
				})
			}
    },
    created() {
			var that = this;
			//判断每次刷新后，显示api对应的路径
			let router = this.$router.history.current.path
			if(router == '/home/children/product/product-management' || router == '/home') {
				this.active = 'product/product-management'
			} else if(router == '/home/children/order/order-management') {
				this.active = 'order/order-management'
			} else if(router == '/home/children/member/user-admin') {
				this.active = 'member/user-admin'
			} else if(router == '/home/children/member/backstage-admin') {
				this.active = 'member/backstage-admin'
			} else if(router == '/home/children/marketing/preferential-activities') {
				this.active = 'marketing/preferential-activities'
			};
			
		}
  }

</script>
<style>
    #home .el-menu-item-group__title {
        padding: 0 !important;
    }
	#home .el-submenu .el-menu-item {
		box-sizing: border-box;
		height: 46px;
		line-height: 46px;
	}
	
	#home .el-menu-item.is-active {
		box-sizing: border-box;
		background: #2A2A34 !important;
		border-right: 3px solid #E6A23C;
	}
	
	#home .el-submenu .el-submenu__title {
		width: 200px;
		height: 46px;
		line-height: 46px;
	}
    
</style>