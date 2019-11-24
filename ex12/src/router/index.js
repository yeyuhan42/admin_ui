import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
//产品
import productManagement from '@/pages/home/children/product/product-management'
//订单
import orderManagement from '@/pages/home/children/order/order-management'
//会员
import userAdmin from '@/pages/home/children/member/user-admin'
import backstageAdmin from '@/pages/home/children/member/backstage-admin'
//营销
import preferentialActivities from '@/pages/home/children/marketing/preferential-activities'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      //配置子路由
			children:[
        {
					path:'children/product/product-management',
					name:'product-management',
					component:productManagement
				},
        {
					path:'children/order/order-management',
					name:'order-management',
					component:orderManagement
				},
				{
					path:'children/member/user-admin',
					name:'user-admin',
					component:userAdmin 
				},
				{
					path:'children/member/backstage-admin',
					name:'backstage-admin',
					component:backstageAdmin
				},
				{
					path:'children/marketing/preferential-activities',
					name:'preferential-activities',
					component:preferentialActivities
				}
				]
    }
  ]
})
