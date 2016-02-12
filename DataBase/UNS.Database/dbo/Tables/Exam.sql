CREATE TABLE [dbo].[Exam] (
    [ID]        BIGINT   IDENTITY (1, 1) NOT NULL,
    [SubjectID] BIGINT   NULL,
    [ExamDate]  DATETIME NULL,
    CONSTRAINT [PK_Exam] PRIMARY KEY CLUSTERED ([ID] ASC)
);

