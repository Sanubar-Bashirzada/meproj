function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Kullanıcı adı ve şifre doğrulama işlemleri burada gerçekleştirilebilir
    if (username === "admin" && password === "admin") {
      // Yönlendirme yapılacak sayfanın URL'sini burada belirtin
      window.location.href = "admin.html";
    } else {
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  }



const btnUp=document.getElementById("btnUp");
const sign=document.createElement("a");
sign.innerText="Sign Up";
sign.href="sign.html";
sign.target="_blank";
btnUp.append(sign);
