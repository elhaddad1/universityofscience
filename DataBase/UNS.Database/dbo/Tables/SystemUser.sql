CREATE TABLE [dbo].[SystemUser]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [UserName] NVARCHAR(250) NULL, 
    [Password] NVARCHAR(MAX) NULL, 
    [Email] NVARCHAR(250) NULL, 
    [FullName] NVARCHAR(500) NULL, 
    [IsActive] BIT NOT NULL DEFAULT 1
)
