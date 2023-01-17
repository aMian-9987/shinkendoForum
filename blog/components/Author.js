
import {Avatar, Divider} from 'antd'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import React, { memo } from 'react'
import { Button } from 'antd'
import { routerRedux } from 'dva/router';



const Author=()=>{
  return (
      <div className='author-div comm-box'>
          <div><Avatar size={100} src='https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg' /> </div>
          {/* <div className='author-introduction'>Login in</div> */}
          {/* <Button type='primary'>按钮</Button> */}
          <Button style={{backgroundColor:'#F0F2F5'}}

  onClick={()=>{window.location.href="localhost:3000/login"}}

  className="r-button"

>Log in</Button>
          <Divider>Links</Divider>
          <Avatar size={28} className='account'> <AiFillGithub/> </Avatar>
          <Avatar size={28} className='account'> <AiFillLinkedin/> </Avatar>
          <Avatar size={28} className='account'> <AiFillTwitterCircle/> </Avatar>
      </div> 
  )
}


handleSubmit = (err, values) => {
	let dt = hex_md5(values.password);
	console.log("dt="+dt);
	if (!err) {
		this.props.dispatch({
			type: 'login/doLogin',
			payload: {
				userName: values.userName,
				password: dt,
			},
		});
		// 此处为登录成功后跳转指定页面
		this.props.dispatch(routerRedux.push({
			pathname: "localhost:3000"
		}));
	}
}
 
export default Author
