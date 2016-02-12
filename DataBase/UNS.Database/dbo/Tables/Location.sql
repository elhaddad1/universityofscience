CREATE TABLE [dbo].[Location] (
    [ID]      BIGINT          IDENTITY (1, 1) NOT NULL,
    [Name]    NVARCHAR (250)  NULL,
    [Capacty] NVARCHAR (250)  NULL,
    [Notes]   NVARCHAR (1000) NULL,
    CONSTRAINT [PK_Location] PRIMARY KEY CLUSTERED ([ID] ASC)
);

