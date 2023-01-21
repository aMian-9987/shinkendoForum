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

  const [shopList, setMyList] = useState([
    {shop:'E-Bogu', url:'http://www.e-bogu.com/'},
    {shop:'Tozando', url:'http://www.tozandoshop.com/'},
    {shop:'Golden Tiger Martial Arts', url:'http://www.goldentiger.com/'},
  ]);
  const [uscTimeList] = useState([
    {item:"Spring 2023:"},
    {item:"Monday, 8:00-10:00PM PT, PED South Gym (PED 210), USC"},
    {item:"Wednesday, 8:00-10:00PM PT, PED North Gym (PED 200), USC"},
  ]);
    const [dojoTimeList] = useState([
    {item:"Shinkendo: Monday~Friday, 6:15-7:15PM PT"},
    {item:"Aikido, Monday~Friday, 7:15-8:15PM PT"},
  ]);




  // useEffect(() => {
  //     setMyList(list.data);
  // });

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
          {/* <img size={100} src='https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg' /> */}


        </div>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={16} xl={16} >
          {/* USC 训练时间 */}
          <List 
            header={<div className='schedule-list-title'>USC Practice Time</div>}
            itemLayout="vertical"
            dataSource={uscTimeList}
            renderItem={item=>(
              <div className='USC-Practice-Time'>{item.item}</div>
            )}
          />

          {/* Honbu Dojo 训练时间 */}
          <List 
            header={<div className='schedule-list-title'>Honbu Dojo (World Headquarters) Classes</div>}
            itemLayout="vertical"
            dataSource={dojoTimeList}
            renderItem={item=>(
              <div className='USC-Practice-Time'>{item.item}</div>
            )}
          />
          <div class="honbuDojo">
            <div class="honbuDojo1">Address: </div>
            <div>
              Nichiren Shu Beikoku Betsuin Buddhist Temple
              (<Link href="https://goo.gl/maps/ivKKn8tkTLHRFw2e6"><a class="honbuDojo2">Google Map</a></Link>)
            </div>
            <div>2801 East 4th St., Los Angeles, CA 90033 USA, (626) 688-7540</div>
          </div>
          



          {/* 商店链接 */}
          <List 
            header={<div className='schedule-list-title'>Equipment Suppliers</div>}
            itemLayout="vertical"
            dataSource={shopList}
            renderItem={item=>(
                <div ><Link href={item.url}><a className='schedule-list-item'>{item.shop}</a></Link></div>
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
