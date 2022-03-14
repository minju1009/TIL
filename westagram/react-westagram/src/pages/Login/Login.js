import React from "react";
import "./Login.css";


function Login(){
    return (
            <div className="loginContainer">
                <h1 className="logo">Westagram</h1>
                <form action="./main.html" method="get" className="loginForm">
                    <input className="loginForm__id" required placeholder="전화번호, 사용자 이름 또는 이메일" type="text"/>
                    <input className="loginForm__pwd" required placeholder="비밀번호" type="password" />
                    <button className="loginForm__submit">로그인</button>
                </form>
                    <span className="forgotPassword">비밀번호를 잊으셨나요?</span>
            </div>    
    )
}

export default Login;