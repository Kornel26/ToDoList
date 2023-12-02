# ToDoList

## FE

```
cd .\frontend\
npm i
npm run dev
```

## BE

**Note:** Replace `ConnectionStrings.DefaultConnection` with your actual connection string inside `appsettings.json`.

## DB

```
CREATE DATABASE ToDoList;

CREATE TABLE [dbo].[ToDoItems] (
    [Id]          NVARCHAR (36)  NOT NULL,
    [Title]       NVARCHAR (100) NULL,
    [IsCompleted] BIT            NULL
);
```
