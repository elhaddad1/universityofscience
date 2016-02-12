CREATE TABLE [dbo].[Subject] (
    [ID]   BIGINT         IDENTITY (1, 1) NOT NULL,
    [Code] NVARCHAR (250) NULL,
    [Name] NVARCHAR (250) NULL,
    CONSTRAINT [PK_Subject] PRIMARY KEY CLUSTERED ([ID] ASC)
);

