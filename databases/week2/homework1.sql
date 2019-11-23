use hyf_db_lesson1;
describe task;
-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
insert into task(
title, 
description, 
created,
updated,
due_date, 
status_id,
user_id) 
value ('Learn about insert query',
       'blah blah...',
        now(),
        now(), 
        '2019-11-02 17:35:00',
         1,
         9);
select * from task 
order by id desc limit 10;
-- Change the title of a task with these attributes: taskID, newTitle
update task set title = 'Learn about Sql queries'
where id = 36;
-- Change the task due date with these attributes: taskID, newDueDate
update task set due_date = '2018-12-20 15:22:33'
where id = 36;
-- Change the task status with these attributes: taskID, newStatus
update task set status_id = 2
where id = 36;
-- Mark a task as complete with this attribute: taskID
UPDATE task SET status_id = 3 
where id = 35;
-- Delete task with this attribute: taskID
delete from task 
where id = 39;

