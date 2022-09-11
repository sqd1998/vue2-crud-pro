import Mock from "mockjs"; //引入mockjs
import homeApi from "./mockData/home"
import userApi from "./mockData/user"
import loginApi from "./mockData/login"


//设置200-2000毫秒延迟数据 模拟随机延时效果 
Mock.setup({
    timeout: "200-2000"
});
//发出图表数据
Mock.mock(/home\/getData/, "get", homeApi.getStatisticalData);

Mock.mock(/user\/add/, "post", userApi.createUser);
Mock.mock(/user\/edit/, "post", userApi.updateUser);
Mock.mock(/user\/getList/, "get", userApi.getUserList);
Mock.mock(/user\/del/, "post", userApi.deleteUser);
Mock.mock(/user\/login/, "post", loginApi.getMenu);