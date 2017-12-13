<?php
	header('content-type:text/html;charset=utf-8');
	header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Method:POST,GET');	
	
	
	$conn=@mysql_connect('localhost','root','123456');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	
	mysql_select_db('jiujiulg');
	mysql_query('SET NAMES UTF8');
	
	/*if(isset($_POST['username'])){//获取值
		$name=$_POST['username'];
		$pass=md5($_POST['password']);
		$qq=$_POST['qq'];
		$email=$_POST['email'];
	}else{
		exit('非法操作');
	}
	$query="insert user values(null,'$qq','$name','$pass','email',NOW())";

	$result=mysql_query($query);*/
	
	
	
	/*if(isset($_POST['name'])|| isset($_POST['submit'])){
		$email=@$_POST['email'];
		$qq=@$_POST['qq'];
		$username=@$_POST['username'];
	}else{
		exit('非法登录');
	}*/
	if(isset($_POST['username'])){
		$username=@$_POST['username'];
		$query="select * from user where username='$username'";
	}else if(isset($_POST['qq'])){
		$qq=@$_POST['qq'];
		$query="select * from user where qq='$qq'";
	}else if(isset($_POST['email'])){
		$email=@$_POST['email'];
		$query="select * from user where email='$email'";
	}else if(isset($_POST['submit'])){
	}else{
		exit('非法登录');
	}
	$result=mysql_query($query);//如果用户名存在，有记录集存在。
	
	if(mysql_fetch_array($result)){
		echo false;
	}else{
		echo true;
	}
	
	if(isset($_POST['submit'])&& $_POST['submit']=='提交注册'){//是否点击注册按钮
		$name=$_POST['username'];//username:表单的名称
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
		$qq=$_POST['qq'];
		$query="insert user values(null,'$qq','$name','$pass','$email',NOW())";
		mysql_query($query);
		echo "注册成功";
	}
	
	
	
	
	
	
	
	
	
	
?>