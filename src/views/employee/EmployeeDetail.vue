<template>
    <div :class="{isHide: isHide}">
        <div class="dialog-modal"></div>
        <div class="dialog">
            <div class="dialog-header">
                <div>THÔNG TIN NHÂN VIÊN</div>
                <button class="btnClose" @click="btnCancelOnClick">X</button>
            </div>
            <div class="dialog-content">
                <div class="avatar-label">
                    <div class="avatar"></div>
                    <div class="avatar-txt">(Vui lòng chọn ảnh có định  dạng</div>
                    <div class="avatar-txt">.jpg .jpeg .png .gif)</div>
                </div>
                <div class="input-label">
                    <div><b>A. THÔNG TIN CHUNG:</b></div>
                    <div class="green-underline"></div>
                    <div style="display: flex;">
                        <div class="left-label">
                            <label>Mã nhân viên (<font color="red">*</font>)</label>
                            <input type="text" class="text-field" id="txtEmployeeCode" v-model="employee.employeeCode" required />
                        </div>
                        <div class="right-label">
                            <label>Họ và tên (<font color="red">*</font>)</label>
                            <input type="text" class="text-field" id="txtFullName" v-model="employee.fullName" required />
                        </div>
                    </div>
                    <div style="display: flex;">
                        <div class="left-label">
                            <label>Ngày sinh</label>
                            <input type="date" class="text-field" id="txtDateOfBirth" v-model="employee.dateOfBirth"/>
                        </div>
                        <div class="right-label">
                            <label>Giới tính</label>
                            <select class="dropdown" id="txtGender" v-model="employee.gender">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                                <option value="2">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div style="display:flex;">
                        <div class="left-label">
                            <label>Số CMTND/ Căn cước (<font color="red">*</font>)</label>
                            <input type="text" class="text-field" required id="txtIdentityNumber" v-model="employee.identityNumber"/>
                        </div>
                        <div class="right-label">
                            <label>Ngày cấp</label>
                            <input type="date" class="text-field" id="txtIdentityDate" v-model="employee.identityDate"/>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <div class="left-label">
                            <label>Nơi cấp</label>
                            <input type="text" class="text-field" id="txtIdentityPlace" v-model="employee.identityPlace"/>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <div class="left-label">
                            <label>Email (<font color="red">*</font>)</label>
                            <input type="email" class="text-field" placeholder="example@domain.com" id="txtEmail"  v-model="employee.email" required />
                        </div>
                        <div class="right-label">
                            <label>Số điện thoại (<font color="red">*</font>)</label>
                            <input type="text" class="text-field" id="txtPhoneNumber" v-model="employee.phoneNumber" required />
                        </div>
                    </div>
                    <div><b>B. THÔNG TIN CÔNG VIỆC:</b></div>
                    <div class="green-underline"></div>
                    <div>
                        <div style="display: flex;">
                            <div class="left-label">
                                <label>Vị trí</label>
                                <br />
                                <select class="dropdown" id="txtPositionId" v-model="employee.positionId">
                                    <option value="6528b15d-6674-724f-79a4-4b24de418577">Giám đốc</option>
                                    <option value="27f91d6c-14b1-6c74-92ef-c9d5c2d91e91">Nhân viên</option>
                                    <option value="3e39129b-279f-623f-88ea-778aee59fea3">Trưởng phòng</option>
                                    <option value="30007451-29ff-4fe4-3707-70859f4ff30d">Thu ngân</option>
                                </select>
                            </div>
                            <div class="right-label">
                                <label>Phòng ban</label>
                                <br />
                                <select class="dropdown" id="txtDepartmentId" v-model="employee.departmentId">
                                    <option value="7c4f14d8-66fb-14ae-198f-6354f958f4c0">Phòng Nhân sự</option>
                                    <option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7">Phòng Marketing</option>
                                    <option value="35e773ea-5d44-2dda-26a8-6d513e380bde">Phòng Công nghệ</option>
                                    <option value="45ac3d26-18f2-18a9-3031-644313fbb055">Phòng Đào tạo</option>
                                    <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">Phòng Hành chính</option>
                                </select>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="left-label">
                                <label>Mã số thuế cá nhân</label>
                                <input type="text" class="text-field" id="txtPersonalTaxCode" v-model="employee.personalTaxCode"/>
                            </div>
                            <div class="right-label">
                                <label>Mức lương cơ bản</label>
                                <div class="money-field">
                                    <input type="text" style="width: 100%; height: 18px;" id="txtSalary" v-model="employee.salary" />
                                    <span class="currency-for-input">(VNĐ)</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="left-label">
                                <label>Ngày gia nhập công ty</label>
                                <input type="date" class="text-field" id="txtJoinDate" v-model="employee.joinDate"/>
                            </div>
                            <div class="right-label">
                                <label>Tình trạng công việc</label>
                                <br />
                                <select class="dropdown" id="txtWorkStatus" v-model="employee.workStatus">
                                    <option value="0">Đang làm việc</option>
                                    <option value="2">Đã nghỉ việc</option>
                                    <option value="3">Đã nghỉ hưu</option>
                                    <option value="1">Đang thử việc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <div style="display: flex; align-items: center; position:absolute; right: 16px;">
                    <button id="btnCancel" class="cancel-btn" @click="btnCancelOnClick">Hủy</button>
                    <button id="btnDelete" class="delete-btn">Xóa</button>
                    <button id="btnSave" class="btn" value="add" @click="btnSaveOnClick">Lưu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ["isHide"],
    methods: {
        btnCancelOnClick() {
            this.$emit('closeDialog',true);
        },
        async btnSaveOnClick() {
            const response = await axios.post("http://localhost:64798/api/Employees", this.employee);
            console.log(response);
        }
    },
    data() {
        return {
            employee: {
                dateOfBirth: "2021-01-01T00:00:00",
                departmentId: "7c4f14d8-66fb-14ae-198f-6354f958f4c0",
                departmentName: "Phòng Nhân sự",
                email: "meomeo@ducbo.tran",
                employeeCode: "NV123123",
                fullName: "Trần Đức Bo",
                gender: 0,
                identityDate: "2021-01-01T00:00:00",
                identityNumber: "828288100",
                identityPlace: "Hà Nội",
                joinDate: "1970-01-01T00:00:00",
                personalTaxCode: "88281928389",
                phoneNumber: "882210",
                positionId: "6528b15d-6674-724f-79a4-4b24de418577",
                positionName: "Giám đốc",
                salary: "10000000",
                workStatus: 0,
            }
        }
    }
}
</script>

<style scoped>
    .isHide {
        display: none;
    }

    .dialog-modal {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #000000;
        opacity: 0.3;
    }

    .dialog {
        position: fixed;
        width: 750px;
        background-color: #ffffff;
        left: calc(50vw - 325px);
        top: calc(50vh - 411px);
        border-radius: 5px;
    }

    .dialog .dialog-header {
        display: flex;
        position: relative;
        height: 40px;
        color: #000000;
        font-size: 18px;
        padding-left: 16px;
        align-items: center;
    }
    
    .btnClose {
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        border: none;
        outline: none;
        border-radius: 0px 5px 0px 0px;
        background-color: #ffffff;
        cursor: pointer;
    }

    .btnClose:hover {
        background-color: #e5e5e5;
    }

    .dialog .dialog-content {
        margin: 24px 24px 8px 24px;
        display: flex;
    }

    .pop-up .dialog-content {
        margin: 24px;
    }

        .dialog .dialog-content .avatar-label {
            width: calc(30% - 5px);
            margin-right: 10px;
        }

            .dialog .dialog-content .avatar-label .avatar {
                width: 135px;
                height: 135px;
                border-radius: 50%;
                background-image: url('../../assets/img/default-avatar.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                border: 1px solid #BBBBBB;
                margin: auto;
                cursor: pointer;
            }

            .dialog .dialog-content .avatar-label .avatar-txt {
                text-align: center;
            }

        .dialog .dialog-content .input-label {
            width: calc(70% - 5px);
        }

            .dialog .dialog-content .input-label .green-underline {
                background-color: #019160;
                height: 4px;
                width: 75px;
                margin: 8px 0 8px 0;
            }

            .dialog .dialog-content .input-label .left-label{
                width: calc(50% - 5px);
                margin-right: 10px;
            }

            .dialog .dialog-content .input-label .right-label{
                width: calc(50% - 5px);
            }

            .dialog .dialog-content .input-label .text-field {
                margin-top: 4px;
                margin-bottom: 16px;
                width: calc(100% - 35px);
                height: 18px;
            }

            .dialog .dialog-content .input-label .text-field:focus {
                border: 1px solid #019160;
            }

            .dialog .dialog-content .input-label .dropdown {
                width: 100%;
                margin-top: 4px;
                margin-bottom: 16px;
            }

    .dialog .dialog-footer {
        height: 60px;
        width: 100%;
        background-color: #f2f2f2;
        border-radius: 0 0 5px 5px;
        display: flex;
        align-items: center;
    }

        .cancel-btn {
            height: 40px;
            border-radius: 4px;
            background-color: #f2f2f2;
            padding: 0 24px 0 24px;
            display: flex;
            align-items: center;
            cursor: pointer;
            border: none;
            margin-right: 10px;
            outline: none;
        }

            .cancel-btn:hover {
                background-color: #e5e5e5;
            }

        .delete-btn {
            height: 40px;
            border-radius: 4px;
            background-color: #ffffff;
            padding: 0 24px 0 24px;
            display: none;
            align-items: center;
            cursor: pointer;
            border: none;
            margin-right: 10px;
        }

            .delete-btn:hover {
                background-color: #e5e5e5;
            }

        .dialog .dialog-footer .btn {
            position: relative;
            margin-right: 24px;
            height: 40px;
            border-radius: 5px;
            background-color: #019160;
            padding: 0 24px 0 24px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #ffffff;
            border: none;
        }

            .dialog .dialog-footer .btn:hover {
                background-color: #2FBE8E;
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

    input {
        padding: 10px 16px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #bbbbbb;
    }

    .currency-for-input {
        position: absolute;
        right: 40px;
        font-style: italic;
    }

    .money-field {
        margin-top: 4px;
        margin-bottom: 16px;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }
</style>