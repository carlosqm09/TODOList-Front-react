CREATE DATABASE todo_list;

USE todo_list;

CREATE TABLE Tasks (
	TaskID int IDENTITY(1,1) PRIMARY KEY,
	TaskTitle varchar(50) NOT NULL,
	TaskDescription varchar(100) NOT NULL,
	TaskDate varchar(20) NOT NULL,
	TaskStatus int NOT NULL,
	TaskPriority int NOT NULL
);

INSERT INTO [dbo].[Tasks]
           ([TaskTitle]
           ,[TaskDescription]
           ,[TaskDate]
           ,[TaskStatus]
           ,[TaskPriority])
     VALUES
           ('Beber agua'
           ,'Cada 2 horas beber un vaso de agua'
           ,'14/07/2022'
           ,1
           ,2)