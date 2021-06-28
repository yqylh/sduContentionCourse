# sduContentionCourse

## 山东大学选课

### 使用方法

支持必修课 选修课 限选课内能查询到的课, 辅修和重修不存在课余量限制请自行选课

1. 在chrome进入选课系统登录后进入详细的选课页面，按F12点击console

2. 打开代码1.js 前两行的两个数组表示存放抢课的课程号课序号，也是唯一一个需要修改的地方

   例如：

   ```js
   var kch = ['sd07517110', 'sd07510180'];
   var kxh = ['600', '600'];
   ```

   表示需要抢课程号sd07517110课序号600的课 以及 课程号sd07510180课序号600的课  

3. 将修改后的代码粘贴到chrome的console里面，回车执行 

4. **终止方法**：F5刷新即可

如果发现抢的课不对，请刷新页面-退课-重新执行脚本。

由于调试时Chrome会缓存所有的请求, 会造成Chrome占用大量的内存, 解决方案是NetWork-> Ctrl+E

感谢李正华同学帮助进行的测试 !

## 山东大学自动评价

### 使用方法

1. 在chrome进入本科生选课系统登录后，按F12点击console

2. 打开代码2.js, 复制代码 , 粘贴到chrome的console里面，回车执行 

3. 2s执行一条
