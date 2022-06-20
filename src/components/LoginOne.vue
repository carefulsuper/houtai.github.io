<template>
	<div class="login">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>后台管理系统</span>
		  </div>
			  <el-form label-width="80px" :model="form" ref="form">
			        <el-form-item label="用户名"  prop="username"
			           :rules="[
						{required:true,message:'请输入用户名' ,trigger:'blur'},
						{min:4,max:10,message:'长度4-10',trigger:'blur'}
						]">
						<el-input v-model="form.username"></el-input>
					</el-form-item>
						
					<el-form-item label="密码"  prop="password" :rules="[
						{required:true,message:'请输入你的密码' ,trigger:'blur'},
						{min:6,max:12,message:'长度6-12',trigger:'blur'}
						]">
						<el-input v-model="form.password"></el-input>
					</el-form-item>
			        <el-form-item >
			          <el-button type="primary" @click="login('form')">Login</el-button>
			        </el-form-item>
			      </el-form>
			  </el-card>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				form:{
					username:'',
					password:'',
				}
			};
		},
		methods:{
			login(form){
				this.$refs[form].validate((valid) => {
					if(valid){
						console.log(this.form);
						this.axios.post('https://rapserver.sunmi.com/app/mock/340/login',this.form)
						.then(res =>{
							console.log(res)
							if(res.data.status === 200){
								localStorage.setItem('username',res.data.username)
								this.$message({message: res.data.message,type: 'success'})
								this.$router.push('./home')
							}
						})
						.catch(err =>{
						console.error(err)})
					}else{
						alert('傻逼你没注册！');
					}
				})
			}
		}
	};
</script>

<style lang="less">
	.login{
		background-color: aquamarine;
		position: relative;
		.box-card{
			 width: 400px;
			 height: 300px;
			
			 top: 0;
			 left: 0;
			 bottom: 0;
			 right: px;
			 margin: auto;
		}
	}
</style>