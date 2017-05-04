var vm = new Vue({
	el:".menu_setting_area",
	data:{
		menuList:[],
	},
	//过滤器   局部过滤器
	filters:{
		
	},
	//实例化完成以后 需要添加的查询或者方法
	mounted:function(){
		this.menuView();
	},
	methods:{
		menuView:function(){
			var _this = this;
			this.$http.get("data/menu.json").then(function(res){
				_this.menuList = res.body.menu.button;
				if(res.body.menu.button.length<3){
					_this.menuList.isfmenuF = false; 
				}
				_this.menuList.forEach(function(item){
					console.log(item);
				});
			})
		},
		addMenu:function(){
			
		},
	}
	
});
//全局过滤器
//Vue.filter();
