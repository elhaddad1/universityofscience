using BL.Interface;
using LinqToExcel;
using LinqToExcel.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.Entity;

namespace BL
{
   public class StudentManager:IStudentManager
    {

       public StudentManager()
       {
 
       }
       public bool ImportStudentFromExcel(string filePath)
       {
           bool result = false;
           if (!string.IsNullOrEmpty(filePath))
           {
               var excelFile = new ExcelQueryFactory(filePath);
               List<string> sheetnames = excelFile.GetWorksheetNames().ToList();

               //excelFile.AddMapping<PayrollItemDataEntryCustom>(x => x.Remarks, PayrollItemDataEntry.Remarks.ToString());
               //excelFile.AddMapping<PayrollItemDataEntryCustom>(x => x.filePath, PayrollItemDataEntry.filePath.ToString());
               //excelFile.AddMapping<PayrollItemDataEntryCustom>(x => x.sheetNames, "tstSheet1");//PayrollItemDataEntry.sheetNames.ToString()

               excelFile.AddMapping<Student>(x => x.SID, "SID");
               excelFile.AddMapping<Student>(x => x.Name,"Name");
               excelFile.AddMapping<Student>(x => x.Minor, "Minor");
               excelFile.AddMapping<Student>(x => x.Major, "Major");
               excelFile.AddMapping<Student>(x => x.Division, "Division"); 

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
