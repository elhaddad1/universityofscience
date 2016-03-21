using BL.Interface;
using LinqToExcel;
using LinqToExcel.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Entity;

namespace BL
{
    public class ExamManager :IExamManager
    {
        public ExamManager()
        {
 
        }

        public bool ImportExamFromExcel(string filePath)
        {
            bool result = false;
            if (!string.IsNullOrEmpty(filePath))
            {
                var excelFile = new ExcelQueryFactory(filePath);
                List<string> sheetnames = excelFile.GetWorksheetNames().ToList();

                excelFile.AddMapping("string prop name","column name");
                //excelFile.AddMapping<PayrollItemDataEntryCustom>(x => x.MonthID, PayrollItemDataEntry.MonthID.ToString());
                excelFile.AddMapping<Exam>(x => x.ExamDate, "ExamDate");
               
                excelFile.StrictMapping = StrictMappingType.ClassStrict;
                excelFile.TrimSpaces = TrimSpacesType.Both;
                excelFile.ReadOnly = true;

                var AllExcellData = (from ExcelData in excelFile.Worksheet(0)
                                     select ExcelData).ToList();
            }
            return result;
        }

    }
}
