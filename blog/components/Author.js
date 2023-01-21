import {Avatar, Divider} from 'antd'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

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



export default Author
