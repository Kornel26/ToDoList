# ToDoList

## FE

```
cd .\frontend\
npm i
npm run dev
```

## DB

```
CREATE DATABASE ToDoList;

CREATE TABLE [dbo].[ToDoItems] (
    [Id]          NVARCHAR (36)  NOT NULL,
    [Title]       NVARCHAR (100) NULL,
    [IsCompleted] BIT            NULL
);
```
