<?php

/* Конфигурация базы данных */

$db_host		= '';
$db_user		= '';
$db_pass		= '';
$db_database		= ''; 

/* Конец секции */


$link = @mysql_connect($db_host,$db_user,$db_pass) or die('Не могу установить соединение с базой данных');

mysql_query("SET NAMES 'utf8'");
mysql_select_db($db_database,$link);

?>