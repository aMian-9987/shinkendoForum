import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'

import {Row, Col, List, Breadcrumb} from 'antd'
import {AiOutlineCalendar, AiFillFolder, AiFillFire} from "react-icons/ai";
import axios from 'axios'

import Header from '../components/Header'
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import servicePath from '../config/apiUrl';

// 1st header: Discussion

export default function Home(list) {
  // 数组解构
  const [myList, setMyList] = useState(list.data)
  
  return (
    <div>
      <Head>
        <title>Shinkendo</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>

        <div className='logoBox'>
          <img size={100} src="https://raw.githubusercontent.com/fantaome/shinkendoForum/797c89f5e17d3a2d136d4dc06cbda10b4ef09fc2/blog/public/shinkendoText.png" width="100%" />
        </div>

        <Col className='comm-left' xs={24} sm={24} md={16} lg={16} xl={16} >
          <List
            header={<div>Latest Posts</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item=>(
              <List.Item>
                <div className='list-title'>
                  <Link href={{pathname:'/details',query:{id:item.id}}}>
                    <a className='list-title-text'>{item.title}</a>
                  </Link>
                  </div>
                <div className='list-icon'>
                  <span><AiOutlineCalendar /> {item.addTime} </span>
                  <span><AiFillFolder /> {item.typeName} </span>
                  <span><AiFillFire /> {item.view_count} view </span>
                </div>
                <div className='list-context'>{item.intro}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}


Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        console.log('getArticleList-----> ', res.data);
        resolve(res.data);
      }
    )
  })
  return await promise;
}