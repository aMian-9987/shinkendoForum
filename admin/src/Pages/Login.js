import React, {useState} from 'react' 
import 'antd/dist/antd.min.css'
import {Card, Input, Button, Spin, message} from 'antd'
import {AiOutlineUser, AiOutlineKey} from "react-icons/ai";
import '../static/css/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // 防止重复提交

    const checkLogin=()=> {
        setIsLoading(true);
        if(!userName) {
            message.error('用户名不能为空');
            setTimeout(()=>{
                setIsLoading(false)
            },500);  // 500ms后loading消失
            return false;
        } else if (!password) {
            message.error('密码不能为空');
            setTimeout(()=>{
                setIsLoading(false)
            },500);  // 500ms后loading消失
            return false;
        }
        let dataProps = {  // 以对象形式传到后台
            'userName':userName,
            'password':password,
        }
        
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true,  // 允许跨域，前后端共享session
        }).then(
            res => {
                setIsLoading(false);
                if(res.data.data==='登录成功'){
                    console.log('Login page 登录成功');
                    localStorage.setItem('openId', res.data.openId);
                    console.log('localStorage = ', localStorage);
                    navigate('/index');
                } else {
                    message.error('用户名密码错误');
                }
            }
        )
    }

    return (
        <div className='login-div'>
            <Spin tip='Loading...' spinning={isLoading}>
                <Card title='JSPang Blog System' bordered={true} style={{width:400}} >
                    <Input
                        id='userName'
                        size='large'
                        placeholder='Enter your username'
                        prefix={<AiOutlineUser style={{color:'rgba(0,0,0,0.25'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id='password'
                        size='large'
                        placeholder='Enter your password'
                        prefix={<AiOutlineKey style={{color:'rgba(0,0,0,0.25'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type='primary' size='large' block onClick={checkLogin}>Login in</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login;