<?php
	header('content-type:text/html;charset=utf-8');
	require "test1.php";
	
	if(isset($_POST['name'])){//获取值
		$name=$_POST['name'];
		$pass=md5($_POST['password']);
	}else{
		exit('非法操作');
	}
	
	
	$query1="select * from user where username='$name' and password='$pass'";
	$query2="select * from user where email='$name' and password='$pass'";
	$result1=mysql_query($query1);
	$result2=mysql_query($query1);
	if(mysql_fetch_array($result1)||mysql_fetch_array($result2)){
		echo "登录成功";
	}else{
		echo "登录失败";
	}
?>