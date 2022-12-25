import React, {useEffect, useState} from 'react'
import {List, Row, Col, Modal, message, Button} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../static/css/ArticleList.css'
import { useNavigate } from 'react-router-dom';


const {confirm} = Modal;

function ArticleList(props){
    const navigate = useNavigate();

    const [list, setList] = useState([]);

    useEffect(()=>{
        getList();
    },[]);

    const getList = () => {
        console.log('ing: getList()');
        axios({
            method:'get',
            url: servicePath.getArticleList,
            withCredentials: true,  // 允许跨域，前后端共享session
        }).then(
            res=>{
                setList(res.data.list);
                console.log('res.data.list: ', res.data.list);
                console.log('res.data: ', res.data);
                console.log('res: ', res);
            }
        )
    }

    // 删除文章的方法
    const delArticle =(id)=> {
        confirm({
            title: '确定要删除这篇文章吗？',
            content: '点击OK按钮删除文章',
            onOk(){
                console.log('2222222');
                axios(servicePath.delArticle+id, {withCredentials:true}).then(
                    res=>{
                        message.success('文章删除成功');
                        getList();
                    }
                )
            },
            onCancel(){
                message.success('取消删除操作, 文章没有任何变化')
            }
        })
    }

    // 修改文章，跳转到AddArticle页面，展示已有文章
    const updateArticle = (id) => {
        // navigate('/index/'+id);  // 携带文章id跳转到AddArticle
        // navigate('/index/');  // 携带文章id跳转到AddArticle
        navigate('/index/add/'+id);  // 携带文章id跳转到AddArticle
    }

    return (
        <div>
            <List
                header={
                    <Row className='list-div'>
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item=>(
                    <List.Item>
                        <Row className='list-div'>
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={4}>
                                {item.typeName}
                            </Col>
                            <Col span={4}>
                                {item.addTime}
                            </Col>
                            <Col span={4}>
                                {item.view_count}
                            </Col>
                            <Col span={4}>
                                <Button type='primary' onClick={()=>{updateArticle(item.id)}} >修改</Button>
                                <Button onClick={()=>{delArticle(item.id)}} style={{marginLeft: '10px'}}>删除</Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}

            />

        </div>
    );
};

export default ArticleList;