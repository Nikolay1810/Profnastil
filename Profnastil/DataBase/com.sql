create Database Comments;
use Comments;
create table Comment(id int identity primary key,
Name varchar(30) not NULL,
Text_comment text not NULL);