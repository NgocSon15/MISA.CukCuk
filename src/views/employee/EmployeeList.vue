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
                <input type="text" class="search-icon input-search" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" />
                <select class="dropdown">
                    <option>Tất cả phòng ban</option>
                    <option>Văn phòng Hà Nội</option>
                </select>
                <select class="dropdown">
                    <option>Tất cả vị trí</option>
                    <option>Giám đốc</option>
                </select>
            </div>
            <div class="filter-right">
                <button id="btnRefresh" class="second-btn refresh-btn"></button>
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
                    <tr v-for="(employee, index) in employees" :key="index">
                        <td style="max-width: 90px;" :title="employee.EmployeeCode" fieldName="EmployeeCode">{{employee.EmployeeCode}}</td>
                        <td style="max-width: 120px;" :title="employee.FullName" fieldName="FullName">{{employee.FullName}}</td>
                        <td style="max-width: 70px;" :title="employee.Gender" fieldName="Gender" formatType="Gender">{{employee.Gender}}</td>
                        <td style="max-width: 100px;" class="text-align-center" :title="employee.DateOfBirth" fieldName="DateOfBirth" formatType="Date">{{employee.DateOfBirth}}</td>
                        <td style="max-width: 120px;" :title="employee.PhoneNumber" fieldName="PhoneNumber">{{employee.PhoneNumber}}</td>
                        <td style="max-width: 200px;" title="Email" fieldName="Email">{{employee.Email}}</td>
                        <td style="max-width: 80px;" title="Chức vụ" fieldName="PositionName">{{employee.PositionName}}</td>
                        <td style="max-width: 100px;" title="Phòng ban" fieldName="DepartmentName">{{employee.DepartmentName}}</td>
                        <td style="max-width: 100px;" class="text-align-right" title="Mức lương cơ bản" fieldName="Salary" formatType="Money">{{employee.Salary}}</td>
                        <td style="max-width: 100px;" title="Tình trạng công việc" fieldName="WorkStatus" formatType="Status">{{employee.WorkStatus}}</td>
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
        }
    },
    components: {
        Dialog,
    },
    methods: {
        btnAddOnClick() {
            this.isHideParent = false;
        },
        closeDialog(value) {
            this.isHideParent = value;
        }
    },
    async created() {
        const response = await axios.get("http://localhost:64798/api/employees");
        this.employees = response.data;
    }
}
</script>

<style scoped>
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