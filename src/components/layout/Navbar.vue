<template>
    <div class="navbar">
        <div class="logo">
            <div class="toggle-icon"></div>
            <div class="cukcuk-logo"></div>
        </div>
        <div class="navbar-content">
            <div v-for="(item, index) in items" :key="index">
                <router-link class="item" :to="item.link">
                    <div class="item-icon" :class="item.icon"></div>
                    <div class="item-text">{{item.text}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {icon:"icon-dashboard", text:"Tổng quan", link:"/general"},
                {icon:"icon-report", text:"Báo cáo", link:"/report"},
                {icon:"icon-dashboard", text:"Mua hàng", link:"/shopping"},
                {icon:"icon-dic-employee", text:"Danh mục nhân viên", link: "/employee"},
                {icon:"icon-dic-employee", text:"Danh mục khách hàng", link: "/customer"},
                {icon:"icon-setting", text:"Thiết lập hệ thống", link:"/setting"}
            ]
        }
    }
}
</script>

<style scoped>
    .navbar {
        width: 200px;
        border-right: 1px solid #e5e5e5;
        height: 100vh;
    }

    .logo {
        width: calc(100% - 16px);
        height: 60px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        padding-left: 16px;
    }

    .toggle-icon {
        width: 24px;
        height: 24px;
        background-image: url('../../assets/img/toggle.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .cukcuk-logo {
        margin-left: 10px;
        height: 24px;
        width: calc(100% - 50px);
        background-image: url('../../assets/img/cukcuk-logo.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .navbar-content {
        width: 100%;
    }

    .icon-dashboard {
        background-image: url('../../assets/icon/dashboard.png');
    }

    .icon-report {
        background-image: url('../../assets/icon/report.png');
    }

    .icon-dic-employee {
        background-image: url('../../assets/icon/dic-employee.png');
    }

    .icon-setting {
        background-image: url('../../assets/icon/setting.png');
    }

    .item {
        height: 44px;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: #ffffff;
        border: none;
        outline: none;
        padding: 0px;
        text-decoration: none;
    }

    .item-icon {
        width: 20px;
        height: 20px;
        margin-left: 16px;
        background-repeat: no-repeat;
        background-size: contain;
    }

        .item:hover {
            background-color: #e5e5e5;
        }

        .item:focus {
            background-color: #019160;
            color: white;
        }

    .item-text {
        margin-left: 10px;
    }
</style>