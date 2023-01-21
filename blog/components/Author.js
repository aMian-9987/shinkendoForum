import {Avatar, Divider} from 'antd'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';




// const Author=()=>{
//   return (
//       <div className='author-div comm-box'>
//           <div><Avatar size={100} src='https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg' /> </div>
//           {/* <div className='author-introduction'>Login in</div> */}
//           {/* <Button type='primary'>按钮</Button> */}
//           <Button style={{backgroundColor:'#F0F2F5'}}

//   onClick={()=>{window.location.href="local:3000"}}

//   className="r-button"

// >Log in</Button>
//           <Divider>Links</Divider>
//           <Avatar size={28} className='account'> <AiFillGithub/> </Avatar>
//           <Avatar size={28} className='account'> <AiFillLinkedin/> </Avatar>
//           <Avatar size={28} className='account'> <AiFillTwitterCircle/> </Avatar>
//       </div> 
//   )
// }





const login = ({ username , password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.is(username, 'bili') && Object.is(password, 'bili')) {
        console.log(username, password)
        resolve('success')
      } else {
        console.log(username, password)
        reject('error')
      }
    }, 1000)
  })
} 



function Author() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSumbitting] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const handleSumbit = async (e) => {
    e.preventDefault()
    setIsSumbitting(true)
    try {
      await login({ username, password })
      setUsername('')
      setPassword('')
      setError('')
      setIsSumbitting(false)
      setIsLogin(true)
    } catch (error) {
      setUsername('')
      setPassword('')
      setError('incorrect username or password')
      setIsSumbitting(false)
    }
  }
  const logout = () => {
    setIsLogin(false)
  }
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
     const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="card container my-5">
      {isLogin ? (
        <>
          <h1>Hello, Bili</h1>
          <button onClick={logout} className="btn-block btn btn-warning">
            Logout
          </button>
        </>
      ) : (
        
        <div className="card-body">
          <h1 className="card-title">User Login</h1>
          
          <div><Avatar size={100} src='https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg' /> </div>
          <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          Login
          </Button>
          {error && (
            <>
              <h1 className="text-danger">{error}</h1>
            </>
          )}
      <Drawer
        title="Login to comment"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={onClose} type="primary">
        //       Submit
        //     </Button>
        //   </Space>
        //   }
          >
          <form onSubmit={handleSumbit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                aria-describedby="emailHelp"
              />

          
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"

              className="btn btn-block btn-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'submitting' : 'submit'}
            </button>
          </form>
          </Drawer>
        </div>
      )}
    </div>
  )
}

// const { Option } = Select;
// const Author = () => {
//   const [open, setOpen] = useState(false);
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <div><Avatar size={100} src='https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg' /> </div>
//       <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
//         Login
//       </Button>
//       <Drawer
//         title="Create a new account"
//         width={720}
//         onClose={onClose}
//         open={open}
//         bodyStyle={{
//           paddingBottom: 80,
//         }}
//         extra={
//           <Space>
//             <Button onClick={onClose}>Cancel</Button>
//             <Button onClick={onClose} type="primary">
//               Submit
//             </Button>
//           </Space>
//         }
//       >
//         <Form layout="vertical" hideRequiredMark>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="name"
//                 label="Name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter user name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="Please enter user name" />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="owner"
//                 label="Owner"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input the password',
//                   },
//                 ]}
//               >
//                  <Input placeholder="Please enter password" />
                
//               </Form.Item>
//             </Col>        
//           </Row>
//         </Form>
//       </Drawer>
//     </>
//   );
// };


export default Author
