<?php
	header('content-type:text/html;charset=utf-8');
	$conn=mysql_connect('localhost','root','123456');
	mysql_select_db('jiujiulg');
	mysql_query('SET NAMES UTF8');
	$query='select * from goodslist limit 40';	
	$result=mysql_query($query);	
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result);
	}	
	echo json_encode($arr);
?>