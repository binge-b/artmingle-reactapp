import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h1 className="text-4xl sm:text-3xl font-medium mb-2 text-gray-900">Log In</h1>
        </div>
        <div id="formContainer">
            <form>
                <h1>Log In</h1>
                <hr />
                <div id="form">
                    <div class="formField">
                        <label>ユーザー名</label>
                        <input type="text" placeholder="ユーザー名" name="username" />
                    </div>
                    <div class="formField">
                        <label>email</label>
                        <input type="text" placeholder="mailAdress" name="mailAdress" />
                    </div>
                    <div class="formField">
                        <label>Password</label>
                        <input type="text" placeholder="password" name="password" />
                    </div>
                    <button class="submitButton">送信</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login