<template>
    <div class="header">
        <div class="header-left">
            <select class="select">
                <option>Nhà hàng biển Đông</option>
            </select>
        </div>
        <div class="header-right">
            <div class="avatar-picture"></div>
            <div class="full-name">Nguyễn Ngọc Sơn</div>
            <div class="option-icon"></div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        position: absolute;
        left: 200px;
        width: calc(100% - 201px);
        height: 60px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        top: 0px;
    }

    .header-left {
        position: absolute;
        left: 16px;
        height: 24px;
    }

        .select {
            border: none;
            height: 100%;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
            outline: none;
        }

            .select:hover {
                background-color: #e5e5e5;
            }
    
    .header-right {
        position: absolute;
        right: 16px;
        height: 30px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .option-icon {
        width: 24px;
        height: 24px;
        background-image: url('../../assets/icon/option.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

        .header-right .avatar-picture {
            width: 30px;
            height: 30px;
            background-image: url('../../assets/icon/avatar-default.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            margin-right:16px;
        }

        .header-right .full-name{
            margin-right: 16px;
        }
</style>