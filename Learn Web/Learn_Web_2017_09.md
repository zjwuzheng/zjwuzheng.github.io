#Review FCC 20170909
##1.算法
String.split("") 分割字符串成数组
Array.reverse() 翻转数组顺序
Array.join("") 连接数组成字符串
String.replace(,'') 替换部分字符串
String.toLowerCase() 转换成小写
String.toUpperCase() 转换成大写
String.length() 字符串长度
Array.sort(function()) 对数组排序
String.sunstr(,) 提取从指定位置开始指定长度的字符串
String.slice(,) 提取从指定位置到指定位置的字符串
Array.splice(,,) 在指定位置删除/添加元素
String.indexOf() 索引字符串出现的位置
Array.filter() 删除指定的元素/按条件过滤元素
Boolean Objects 对象是一个布尔值的对象包装器
Arguments Object 是一个类似数组的对象, 对应于传递给函数的参数
String.charCodeAt() 返回UTF-16编码值
String.fromCharCode() UTF-16返回字符串

##2.1bootstrap
.container/.container-fluid 响应式布局容器
.img-responsive 图片响应式布局支持
.text-center 文本居中
.btn botton属性
.btn-block botton为块属性
.btn-Primary/Success/Info/Warning/Danger 自带属性
.row 行
.col-xs-4 列
.xs/sm/md/lg px:768/992/1200的分区
.div/span
.text-primary
.well 视觉深度感
##2.2 Font Awesome
.fa
.fa-thumbs-up/info-circle/trash/paper-plane
##2.3 jQuery
$(document).ready(function(){}); 写在script里 保证HTML渲染完成后执行代码
$(botton).addClass("animated bounce") 回弹效果
$(.well).addClass("animated shake") 摇动效果
$(#target6).addClass("animated fadeout") 淡出效果
$(#target6).removeClass("animated fadeout") 移除class
$(#target6).css("color","blue") 改变CSS样式
$("botton").prop("disabled","true") 调整元素属性为不可点击
$("#target6"),html("<em>#target6</em>") 改变文本不能改变标记
$("#target6").remove() 移除HTML元素
$("#target6").appendTo("#right-well") 把选中的元素加到其他元素中去
$("#target6").clone() 克隆一个元素
$("#left-well").parent() 指定元素的父元素
$("#left-well").children() 指定元素的子元素
$(".target:nth-child(n)") 指定元素的第n个子元素
$(".target:odd") 指定元素的偶数个子元素
$(".target:even") 指定元素的奇数个子元素
"animated fadeOut" 淡出效果
"animated hinge" 合页效果
$("#getMessage").on("click",function{}) 绑定事件运行函数
.forEach() 循环遍历JSON数据
navigator.geolocation 获取经纬度


##3 java script
<!-->\' \" \\ \n \r \t \b \f</--> 单引号/双引号/反斜杠符/换行/回车/制表/推格/换页
Array.push() 在最后面加入一个元素
Array.pop() 移除最后一个元素
Array.shift() 移除第一个元素
Array.unshift() 在最前面加入一个元素
Objects.hasOwnProperty 检查是否有这个属性
函数返回的永远是整个对象
Math.random() 随机数函数
MAth.floor() 向下取整
正则表达方式
Array.map() 迭代每个元素
Array.reduce() 迭代一个数组，累积到一个值中
Arrar.concatMe() 拼接数组
Array.findIndex(func) 第一个满足函数的元素的位置
Array.isArray() 判断是否是数组
Number.isFinite(num) 检测数字是否是无穷大
