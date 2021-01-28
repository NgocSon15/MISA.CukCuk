<template>
   <div class="content">
       <div class="header-content">
            <div class="page-title">Danh sách nhân viên</div>
            <div class="content-feature">
                <button id="btnAdd" class="btn" @click="btnAddOnClick">
                    <div class="add-icon"></div>
                    <div class="btn-text">Thêm nhân viên</div>
                </button>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input type="text" class="search-icon input-search" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" @input="searchEmployee" v-model="searchWord"/>
                <select class="dropdown" @select="searchEmployee" v-model="departmentId">
                    <option value="">Tất cả phòng ban</option>
                    <option value="7c4f14d8-66fb-14ae-198f-6354f958f4c0">Phòng Nhân Sự</option>
                    <option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7">Phòng Marketing</option>
                    <option value="45ac3d26-18f2-18a9-3031-644313fbb055">Phòng Đào Tạo</option>
                    <option value="35e773ea-5d44-2dda-26a8-6d513e380bde">Phòng Công Nghệ</option>
                    <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">Phòng Hành Chính</option>
                </select>
                <select class="dropdown" @select="searchEmployee" v-model="positionId">
                    <option value="">Tất cả vị trí</option>
                    <option value="6528b15d-6674-724f-79a4-4b24de418577">Giám đốc</option>
                    <option value="27f91d6c-14b1-6c74-92ef-c9d5c2d91e91">Nhân viên</option>
                    <option value="30007451-29ff-4fe4-3707-70859f4ff30d">Thu ngân</option>
                    <option value="3e39129b-279f-623f-88ea-778aee59fea3">Trưởng phòng</option>
                </select>
            </div>
            <div class="filter-right">
                <button id="btnRefresh" class="second-btn refresh-btn" @click="refreshData"></button>
            </div>
        </div>
        <div class="grid grid-employee">
            <table cellspacing="1" border="0" width="100%">
                <thead>
                    <tr>
                        <th style="max-width: 90px;" title="Mã nhân viên" fieldName="EmployeeCode">Mã nhân viên</th>
                        <th style="max-width: 120px;" title="Họ và tên" fieldName="FullName">Họ và tên</th>
                        <th style="max-width: 70px;" title="Giới tính" fieldName="Gender" formatType="Gender">Giới tính</th>
                        <th style="max-width: 100px;" class="text-align-center" title="Ngày sinh" fieldName="DateOfBirth" formatType="Date">Ngày sinh</th>
                        <th style="max-width: 120px;" title="Điện thoại" fieldName="PhoneNumber">Điện thoại</th>
                        <th style="max-width: 200px;" title="Email" fieldName="Email">Email</th>
                        <th style="max-width: 80px;" title="Chức vụ" fieldName="PositionName">Chức vụ</th>
                        <th style="max-width: 100px;" title="Phòng ban" fieldName="DepartmentName">Phòng ban</th>
                        <th style="max-width: 100px;" class="text-align-right" title="Mức lương cơ bản" fieldName="Salary" formatType="Money">Mức lương cơ bản</th>
                        <th style="max-width: 100px;" title="Tình trạng công việc" fieldName="WorkStatus" formatType="Status">Tình trạng công việc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in employees" :key="index" @dblclick="rowOnDoubleClick">
                        <td style="max-width: 90px;" :title="employee.EmployeeCode" fieldName="EmployeeCode">{{employee.employeeCode}}</td>
                        <td style="max-width: 120px;" :title="employee.FullName" fieldName="FullName">{{employee.fullName}}</td>
                        <td style="max-width: 70px;" :title="employee.Gender" fieldName="Gender" formatType="Gender">{{getGenderName(employee.gender)}}</td>
                        <td style="max-width: 100px;" class="text-align-center" :title="employee.DateOfBirth" fieldName="DateOfBirth" formatType="Date">{{formatDate(employee.dateOfBirth)}}</td>
                        <td style="max-width: 120px;" :title="employee.PhoneNumber" fieldName="PhoneNumber">{{employee.phoneNumber}}</td>
                        <td style="max-width: 200px;" title="Email" fieldName="Email">{{employee.email}}</td>
                        <td style="max-width: 80px;" title="Chức vụ" fieldName="PositionName">{{employee.positionName}}</td>
                        <td style="max-width: 100px;" title="Phòng ban" fieldName="DepartmentName">{{employee.departmentName}}</td>
                        <td style="max-width: 100px;" class="text-align-right" title="Mức lương cơ bản" fieldName="Salary" formatType="Money">{{formatMoney(employee.salary)}}</td>
                        <td style="max-width: 100px;" title="Tình trạng công việc" fieldName="WorkStatus" formatType="Status">{{getWorkStatusName(employee.workStatus)}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="paging-bar">
            <div class="left-text">Hiển thị 1-10/1000 nhân viên</div>
            <div class="paging-field">
                <button class="first-page-btn"></button>
                <button class="prev-page-btn"></button>
                <button class="number-btn">1</button>
                <button class="number-btn">2</button>
                <button class="number-btn">3</button>
                <button class="number-btn">4</button>
                <button class="next-page-btn"></button>
                <button class="last-page-btn"></button>
            </div>
            <div class="right-text">10 nhân viên/trang</div>
        </div>
        <Dialog @closeDialog="closeDialog" :isHide="isHideParent"/>
    </div>
</template>

<script>
import * as axios from "axios";
import Dialog from "./EmployeeDetail.vue";
export default {
    data() {
        return {
            employees: [],
            isHideParent: true,
            searchWord: "",
            departmentId: "",
            positionId: ""
        }
    },
    components: {
        Dialog,
    },
    methods: {
        async refreshData() {
            const response = await axios.get("http://localhost:64798/api/Employees");
            this.employees = response.data;
        },
        btnAddOnClick() {
            this.isHideParent = false;
        },
        closeDialog(value) {
            this.isHideParent = value;
        },
        rowOnDoubleClick() {
            this.isHideParent = false;
        },
        async searchEmployee() {
            if (this.searchWord != null && this.searchWord != "" && this.positionId != "" && this.departmentId != "") {
                const response = await axios.get("http://localhost:64798/api/Employees/search?searchWord=" + this.searchWord + "&departmentId=" + this.departmentId +"&positionId=" + this.positionId);
                this.employees = response.data;
            }
            else {
                this.refreshData();
            }
        },
        formatDate(date) {
            date = new Date(date);
            if (Number.isNaN(date.getTime())) {
                return "";
            }
            else {
                var day = date.getDate();
                if (day < 10) day = '0' + day;
                var month = date.getMonth() + 1;
                if (month < 10) month = '0' + month;
                var year = date.getFullYear();
                return day + '/' + month + '/' + year;
            }
        },
        formatMoney(money) {
            if (money == null) {
                return "";
            } else {
                var num = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                return num;
            }
        },
        getGenderName(genderCode) {
            if (genderCode == 0) {
                return "Nam";
            }
            else if (genderCode == 1) {
                return "Nữ";
            }
            else
            {
                return "Khác";
            }
        },

        getWorkStatusName(statusCode) {
            if (statusCode == 0) {
                return "Đang làm việc";
            }
            else if (statusCode == 1) {
                return "Đang thử việc";
            }
            else if (statusCode == 2) {
                return "Đã nghỉ việc";
            }
            else
            {
                return "Đã nghỉ hưu";
            }
        },
    },
    async created() {
        const response = await axios.get("http://localhost:64798/api/Employees");
        this.employees = response.data;
    }
}
</script>

<style scoped>
    .text-align-right{
        text-align: right;
    }

    .text-align-center{
        text-align: center;
    }

    .content {
        position: absolute;
        left: 201px;
        top: 60px;
        width: calc(100% - 201px);
        height: calc(100vh - 61px);
    }

    .content .header-content {
        padding: 16px;
        display: flex;
        align-items: center;
    }

        .content .header-content .page-title {
            font-size: 20px;
            font-weight: bold;
        }

        .content .header-content .content-feature {
            position: absolute;
            right: 16px;
        }

    .content .filter-bar .dropdown {
        width: 200px;
        margin-left: 10px;
    }

    .filter-bar {
        display: flex;
    }

    .filter-left {
        padding-left: 16px;
    }

    .content .paging-bar {
        margin-left: 16px;
        margin-right: 16px;
        width: calc(100% -32px);
        height: 56px;
        border-top: 1px solid #bbbbbb;
        display: flex;
        align-items: center;
        justify-content: center;
    }

        .content .paging-bar .left-text {
            position: absolute;
            left: 32px;
        }

        .content .paging-bar .right-text {
            position: absolute;
            right: 32px;
        }

        .content .paging-bar .paging-field {
            position: absolute;
            display: flex;
            align-items: center;
        }

    .btn {
        background-color: #019160;
        border-radius: 4px;
        height: 40px;
        color: #ffffff;
        padding-left: 24px;
        padding-right: 24px;
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
    }

        .btn:hover {
            background-color: #2fbe8e;
        }

        .btn .btn-text {
            margin-left: 8px;
        }

    .add-icon {
        width: 16px;
        height: 16px;
        background-image: url('../../assets/icon/add.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .search-icon {
        background-image: url('../../assets/icon/search.png');
        background-repeat: no-repeat;
        background-position: 16px center;
    }

    input {
        padding: 10px 16px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #bbbbbb;
    }

        input:focus{
            border: 1px solid #019160;
        }

        input::placeholder {
            font-size: 11px;
        }

    .input-search {
        padding-left: 40px;
        width: 220px;
        height: 18px;
    }

    .dropdown {
        height: 40px;
        padding-left: 16px;
        border: 1px solid #bbbbbb;
        border-radius: 4px;
        outline: none;
    }

    .dropdown:focus{
        border: 1px solid #019160;
    }

    .second-btn {
        background-color: #ffffff;
        border-radius: 4px;
        height: 40px;
        color: #000000;
        padding-left: 24px;
        padding-right: 24px;
        text-align: center;
        border: 1px solid #bbbbbb;
        outline: none;
        cursor: pointer;
    }

        .second-btn:hover {
            background-color: #e9ebee;
        }

    .refresh-btn {
        position: absolute;
        right: 16px;
        height: 40px;
        background-image: url('../../assets/icon/refresh.png');
        background-repeat: no-repeat;
        background-position: center;
    }

    .first-page-btn {
        width: 32px;
        height: 32px;
        background-image: url('../../assets/icon/btn-firstpage.svg');
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 4px;
        margin-right: 16px;
        background-color: #ffffff;
        cursor: pointer;
        outline: none;
    }

        .first-page-btn:hover {
            background-color: #e9ebee;
        }

    .prev-page-btn {
        width: 32px;
        height: 32px;
        background-image: url('../../assets/icon/btn-prev-page.svg');
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 4px;
        margin-right: 10px;
        background-color: #ffffff;
        cursor: pointer;
        outline: none;
    }

        .prev-page-btn:hover {
            background-color: #e9ebee;
        }

    .next-page-btn {
        width: 32px;
        height: 32px;
        background-image: url('../../assets/icon/btn-next-page.svg');
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 4px;
        margin-right: 16px;
        background-color: #ffffff;
        cursor: pointer;
        outline: none;
    }

        .next-page-btn:hover {
            background-color: #e9ebee;
        }

    .last-page-btn {
        width: 32px;
        height: 32px;
        background-image: url('../../assets/icon/btn-lastpage.svg');
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 4px;
        background-color: #ffffff;
        cursor: pointer;
        outline: none;
    }

        .last-page-btn:hover {
            background-color: #e9ebee;
        }

    .number-btn {
        width: 32px;
        height: 32px;
        border: 1px solid #bbbbbb;
        border-radius: 50%;
        background-color: #ffffff;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        outline: none;
    }

        .number-btn:hover {
            background-color: #e9ebee;
        }

        .number-btn:focus {
            color: #ffffff;
            background-color: #019160;
            border: none;
        }

    .grid {
        margin-left: 16px;
        margin-right: 16px;
        width: calc(100% - 32px);
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

        table tbody {
            overflow-y: auto;
        }

        table th, td {
            border-bottom: 1px solid #bbbbbb;
            padding: 10px 16px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        table tbody tr{
            cursor: pointer;
        }

        table tbody tr:nth-child(2n + 1) {
            background-color: #f2f2f2
        }

            table tbody tr:hover {
                background-color: #e5e5e5;
            }

    .grid-employee {
        height: calc(100% - 154px);
    }
</style>