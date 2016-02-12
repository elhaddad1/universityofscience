CREATE TABLE [dbo].[Student] (
    [ID]       BIGINT         IDENTITY (1, 1) NOT NULL,
    [SID]      BIGINT         NOT NULL,
    [Name]     NVARCHAR (250) NULL,
    [Minor]    NVARCHAR (250) NULL,
    [Major]    NVARCHAR (250) NULL,
    [Division] NVARCHAR (250) NULL,
    CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED ([ID] ASC)
);

