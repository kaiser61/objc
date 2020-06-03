function getdata(way,send_info,args,callback_function){
/*
* way :协议类型
* send_info：请求/发送内容
* args：控制接口
* callback_function：一个隐匿函数，用于判断Data
* */
    //创建网络请求对象
    var xhr=new XMLHttpRequest();
    //与服务端建立连接 get/post
    xhr.open(way,' https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+args)
    //设置请求头，行服务器发送的数据是表单形式的
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //发送数据
    xhr.send(send_info);
    //接收数据
    xhr.onreadystatechange=function () {
        //xhr.readyState   ajax数据请求完成
        if(xhr.readyState==4&&xhr.status==200){
            var responseData=JSON.parse(xhr.responseText);
            // var code=responseData.code;
            var Data=responseData.data;
            callback_function(Data)
        }
    }
}