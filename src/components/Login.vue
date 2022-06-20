<template>
	<div class="login">
		<el-card class="container">
		  <div slot="header" class="tit">
		    后台管理系统
		  </div>
			  <el-form :model="form" ref="form" :rules="rules">
			        <el-form-item  prop="username"  :rules="[
						{required:true,message:'请输入用户名' ,trigger:'blur'},
						{min:4,max:10,message:'长度4-10',trigger:'blur'}
						]">
						<el-input v-model="form.username" placeholder="用户名(4-10位)"></el-input>
					</el-form-item>
					<el-form-item prop="password" 
					:rules="[
						{required:true,message:'请输入你的密码' ,trigger:'blur'},
						{min:6,max:12,message:'长度6-12',trigger:'blur'}
						]">
						<el-input v-model="form.password" type="password" placeholder="密码(6-12位)"></el-input>
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
			const validateName = (rule,value,callback)=>{
				
			}
			return {
				form:{
					username:'',
					password:'', 
				},
				rules:{
					username:[],
					password:[]
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
	*{
		margin: 0;
		padding: 0; 
		body{
			/* 100%窗口高度 */
			height: 100vh;
			/* 弹性布局 居中 */
			
			justify-content: center;
			ael-lign-items: center;
			/* 渐变背景 */
			background: el-linear-gradient(200deg,#e3c5eb,#a9c1ed);
			/* 溢出隐藏 */
			overflow: hidden;
			el-card{
				display: flex;
				padding-top: 30px;
			    /* 相对定位 */
			    position: relative;
			    z-index: 1;
			    background-color: #fff;
			    border-radius: 15px;
			    /* 弹性布局 垂直排列 */
			    
			    flex-direction: column;
			    ael-lign-items: center;
			    width: 350px;
			    height: 500px;
			    /* 阴影 */
			    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
				.tit{
				    font-size: 26px;
				    margin: 40px auto 30px auto;
				}
				.el-input{
				    width: 300px;
				    height: 30px;
				    text-indent: 8px;
				    border: none;
				    border-bottom: 1px soel-lid #ddd;
				    outel-line: none;
				    margin: 12px auto;
				}
				.el-button{
				    width: 280px;
				    height: 40px;
				    margin: 35px auto 40px auto;
				    border: none;
				    background: el-linear-gradient(-200deg,#fac0e7,#aac2ee);
				    color: #fff;
				    font-weight: bold;
				    letter-spacing: 8px;
				    border-radius: 10px;
				    cursor: pointer;
				    /* 动画过渡 */
				    transition: 0.5s;
				}
			}
		}
		
	}
</style>