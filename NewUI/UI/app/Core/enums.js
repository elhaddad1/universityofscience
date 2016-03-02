var enums = (function () {
    "use strict";

    // for service config
    var OMLookupModelEnums = {
        HR_ContactType: 1,
        HR_ContractDuration: 2,
        HR_ContractType: 3,
        HR_Gender: 4,
        HR_Religion: 5,
        HR_MaritalStatus: 6,
        HR_InsuranceStatus: 7,
        HR_EmployeeStatus: 8,
        Country: 9,
        HR_JobType: 10,
        Nationality: 11,
        HR_Specialty: 12,
        HR_TerminationReason: 13,
        HR_TerminationStatus: 14,
        HR_TerminationType: 15,
        HR_PaidOffDaysType: 16,
        HR_WorkingHoursType: 17,
        HR_MilitaryStatus: 18,
        HR_EmployeeDeductionType: 19,
        HR_EmployeeQualificationType: 20,
        HR_EmployeeConfiguration: 21
    };

    var JobType = {
        Physician: 2
    }

    var Gender = {
        Male: 1,
        Female: 2,
        NotDefined: 3
    }

    var MilitaryStatus = {
        Completed: 1,
        Postponed: 2,
        Exempted: 3,
        NotApplicable: 4
    }

    var ContractType = {
        FullTime: 1,
        PartTime: 2,
        MonthlyReward: 3
    }

    var InsuranceStatus =
     {
         Insured: 1,

         NotInsured: 2,

         Authorized: 3
     };

    var EmployeePenaltyStatus =
    {
        Approved: 1,

        NotApproved: 2
    };

    var OMServicesName = {
        Lookups: "OMLookups",
        CitiesByCountryId: "CitiesByCountryId",
        RegionsByCityId: "RegionsByCityId",
        SaveEmployee: "SaveEmployee",
        GETEmployeeTermination: "GETEmployeeTermination",
        POSTEmployeeTermination: "POSTEmployeeTermination",
        RollbackEmployeeTermination: "RollbackEmployeeTermination",
        PUTEmployeeTermination: "PUTEmployeeTermination",
        DELETEEmployeeTermination: "DELETEEmployeeTermination",
        UpdateEmployee: "UpdateEmployee",
        Upload: "Upload",
        EmployeesCount: 'GetEmployeesCount',
        GetOrganizationUnits: "GetOrganizationUnits",
        GetPositionsByDepartmentsID: "GetPositionsByDepartmentsID",
        GetEmployees: "GetEmployees",
        GetPenaltyActionGroups: "GetPenaltyActionGroups",
        GetPenaltyActionGroupsNoAttendence:"GetPenaltyActionGroupsNoAttendence",
        GetPenaltyActions: "GetPenaltyActions",
        GetPenaltyActionsByActionGroupId: "GetPenaltyActionsByActionGroupId",
        SaveNewEmployeePenalty: "SaveNewEmployeePenalty",
        GetRecomendedPenalty: "GetRecomendedPenalty",
        GetDirectManagerEmployeeInTheSamePositionLookup: "GetDirectManagerEmployeeInTheSamePositionLookup",
        GetEmployeePositionsByDirectManagerIDCount: "GetEmployeePositionsByDirectManagerIDCount",
        GetContractExpiresAfter: "GetContractExpiresAfter",
        ExportContractExpiresAfterReport: "ExportContractExpiresAfterReport",
        SaveNewEmployeeDeduction: "SaveNewEmployeeDeduction",
        GetActivePenalties: "GetActivePenalties",
        GetPositionsLookup: "GetPositionsLookup",
        GetEmployeesWithContractTypes: "GetEmployeesWithContractTypes"
    };

    var TMServicesName = {
        GetAllHolidayInfo: "GetAllHolidayInfo",
        GetAllHolidayData: "GetAllHolidayData",
        GetHolidayData: "GetHolidayData",
        AddNewHolidayData: "AddNewHolidayData",
        DeleteHolidayData: "DeleteHolidayData",
        UpdateHolidayData: "UpdateHolidayData",
        GetLeaveBalanceByEmployee: "GetLeaveBalanceByEmployee",
        GetAllLeave: "GetAllLeave",
        AddNewLeaveBalance: "AddNewLeaveBalance",
        GetAllHolidayDataCount: "GetAllHolidayDataCount",
        GetAllPolicies: "GetAllPolicies",
        GetAssignedPositionsByPolicyID: "GetAssignedPositionsByPolicyID",
        SaveNewTimeAndAttendancePolicyAssignment: "SaveNewTimeAndAttendancePolicyAssignment",
        GetAllPoliciesExceptCurrent: "GetAllPoliciesExceptCurrent",
        UpdateAttendancePolicyAssignment: "UpdateAttendancePolicyAssignment",
        GetPositionsByPolicyTypeID: "GetPositionsByPolicyTypeID",
        GetOpenedMonths: "GetOpenedMonths"
    };

    var CoreServicesName = {
        LockUserByEmployeeID: "LockUserByEmployeeID"
    };

    var ConflictType = {
        MissingIn: 1,
        MissingOut: 2,
        NoConflict: 3,
        MissingInAndOut: 4
    };

    var PairingStatus = {
        Paired: 1,
        UnPaired: 2,
        NotPaired: 3,
        CommitedAndNotValid: 4,
        AttendanceWithNullPairing: 5,
        PairingError: 6,
        NeedRepair: 7,
        NeedCommitAttendence: 8,
    }

    var PairIcons = {
        Danger: 1,
        Info: 2,
        Success: 3,
        Warning: 4,
        NoAttendance: 5,
        NeedRepair: 7,
        NeedCommitAttendence: 8,
    }

    var WorkingHoursType = {
        Day: 1
    }

    var InOrOut = {
        In: 1,
        Out: 2
    }

    var OvertimeCalculationMethod = {
        Daily: 1,
        Monthly: 2
    }

    var AddStatus = {
        Success: 1,
        Failed: 2
    }

    var FailedReason = {
        DuplicateName: 0,
        RateUsedInActivePolicy: 1
    }

    var ReportType =
   {
       Attendance: 0,
       InWithoutOut: 1
   }

    var PenaltyStatus = 
    {
        Pending : 1,
        Approved : 2,
        Rejected : 3
    }

    var vm = {
        OMLookupModelEnums: OMLookupModelEnums,
        OMServicesName: OMServicesName,
        TMServicesName: TMServicesName,
        ConflictType: ConflictType,
        PairingStatus: PairingStatus,
        PairIcons: PairIcons,
        InOrOut: InOrOut,
        JobType: JobType,
        InsuranceStatus: InsuranceStatus,
        Gender: Gender,
        OvertimeCalculationMethod: OvertimeCalculationMethod,
        EmployeePenaltyStatus: EmployeePenaltyStatus,
        AddStatus: AddStatus,
        FailedReason: FailedReason,
        MilitaryStatus: MilitaryStatus,
        ReportType: ReportType,
        WorkingHoursType: WorkingHoursType,
        ContractType: ContractType,
        CoreServicesName: CoreServicesName,
        PenaltyStatus: PenaltyStatus
    };

    return vm;



});
