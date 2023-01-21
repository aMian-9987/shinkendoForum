import React, {useState, useEffect} from 'react'
import Head from 'next/head'

import {Row, Col, List, Breadcrumb} from 'antd'
import {AiOutlineCalendar, AiFillFolder, AiFillFire} from "react-icons/ai";
import axios from 'axios'
import servicePath from '../config/apiUrl';
import Link from 'next/link'


import Header from '../components/Header'
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

// 4nd header: schedule


export default function Schedule(list) {

  const [videoLink] = useState([
    {title:'Shinkendo/Aikibujutsu Introduction Video (2003)', url:'http://www.youtube.com/embed/uc4an4PVEV8?rel=0'},
    {title:'Shinkendo Introduction Video', url:'http://www.youtube.com/embed/Y3d4QjgkYCM'},
    {title:'Fight Science - Shinkendo', url:'http://www.youtube.com/embed/hmLTr9zFegQ'},
    {title:'Obata Toshishiro Tameshigiri Montage', url:'http://www.youtube.com/embed/5_v92GFAIlY'},
    {title:'Brooklyn Botanical Gardens Demonstration (2005)', url:'http://www.youtube.com/embed/Hf5ty2blpkA'},
  ]);

  return (
    <div>
      <Head>
        <title>List</title>
      </Head>
      
      <Header />
      
      <Row className='comm-main' type='flex' justify='center'>
        {/* <Col className='comm-right' xs={0} sm={0} md={2} lg={2} xl={2} >
        
        </Col> */}
        <div className='logoBox'>
          <img size={100} src="https://raw.githubusercontent.com/fantaome/shinkendoForum/797c89f5e17d3a2d136d4dc06cbda10b4ef09fc2/blog/public/shinkendoText.png" width="100%" />


        </div>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={16} xl={16} >
          {/* USC 训练时间 */}
          <List 
            header={<div className='schedule-list-title'>USC Practice Time</div>}
            itemLayout="vertical"
            dataSource={videoLink}
            renderItem={item=>(
              <div className='USC-Practice-Time'>
                <div className='youtubeTitle'>{item.title}</div>
                <iframe className='youtube' src={item.url} frameborder="0" allowfullscreen></iframe>
              </div>
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
