<?php
/* Принимаем данные из формы */
$name = $_POST["name"];
$page_id = $_POST["page_id"];
$text_comment = $_POST["text_comment"];
if($name != "" || $text_comment != "" || ($name != "" && $text_comment != "")){
    $name = htmlspecialchars($name); // Преобразуем спецсимволы в HTML-сущности
$text_comment = htmlspecialchars($text_comment);

$mysqli = mysql_connect("localhost", "root", "")//параметры в скобках ("хост", "имя пользователя", "пароль")
or die("<p>Ошибка подключения к базе данных! " . mysql_error() . "</p>");

mysql_select_db("Comments")//параметр в скобках ("имя базы, с которой соединяемся")
 or die("<p>Ошибка выбора базы данных! ". mysql_error() . "</p>");
echo "Подключен"
$mysqli -> query("INSERT INTO 'com'('name', `page_id`, 'text_comment') VALUES ('$name', '$page_id', '$text_comment')");//Добавляем комментарий в таблицу
}
else{
    echo"Error";
}
//$name = "Kolya";
//$text_comment = "efwefheef wefwefewjfwef wefwefwefwefew";

header("Location: " .$_SERVER["HTTP_REFERER"]); // делаем реридект обратно
?>


