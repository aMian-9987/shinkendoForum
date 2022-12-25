import React, {useState, useEffect} from 'react'
import '../static/css/AddArticle.css'
import {Row, Col, Input, Select, Button, DatePicker, message} from 'antd'
import {marked} from "marked";
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const {Option} = Select;  // Select 组件里的 Option
const {TextArea} = Input;  // 文章内容

function AddArticle(props) {
    const navigate = useNavigate();

    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')  //文章标题
    const [articleContent,setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent,setMarkdownContent] = useState('预览内容')  //html内容
    const [introducemd,setIntroducemd] = useState()  //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑')  //简介的html内容
    const [showDate,setShowDate] = useState()  //发布日期
    const [updateDate,setUpdateDate] = useState()  //修改日志的日期
    const [typeInfo,setTypeInfo] = useState([])  // 文章类别信息
    const [selectedType,setSelectType] = useState('选择文章类型')  //选择的文章类别


    useEffect(() => {
        console.log('loopinggggg');
        getTypeInfo();
        const tempId = 0; // props.match.params.id;
        // message.error('props = ', props);

        
        // const { tempId } = Number(useParams());

        // const tempId = props.match.params.id;
        if (tempId){
            setArticleId(tempId);
            getArticleById(tempId);
        }
    },[]);

    marked.setOptions({
        // renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: false,
    })

    // 实时渲染 markdown content
    const changeContent = (e) => {
        setArticleContent(e.target.value);
        let html = marked(e.target.value);
        setMarkdownContent(html);
    }

    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroducehtml(html);
    }

    // 从中台接口获得type info，路由守卫
    const getTypeInfo = () => {
        console.log('正在getTypeInfo');
        // try {
        axios({
            method:'get',
            url: servicePath.getTypeInfo,
            withCredentials: true,  // 跨域请求
            // credentials: true, // 允许cookie跨域
        }).then(
            res => {
                console.log("res.data.data ", res.data.data);
                if(res.data.data === '没有登录'){  // 路由守卫
                    // 移除session的openId，跳转到默认首页(login)
                    localStorage.removeItem('openId');
                    navigate('/');
                }else{
                    setTypeInfo(res.data.data);
                }
            }
        )
        // } catch (error) {
        //     console.log('AddArticle axios error: ', error.response.data);
        // }
        
    }

    // 实时改变文章类型下拉框
    const selectTypeHandler = (value) => {
        setSelectType(value);  // 每次变化都修改一下
    }

    // 保存文章
    const saveArticle = () => {
        if(!selectedType){
            message.error('必须选择文章类型');
            return false;
        } else if (!articleTitle) {
            message.error('文章标题不能为空');
            return false;
        } else if (!articleContent) {
            message.error('文章内容不能为空');
            return false;
        } else if (!introducemd) {
            message.error('文章简介不能为空');
            return false;
        } else if (!showDate) {
            message.error('发布日期不能为空');
            return false;
        }
        message.success('检验通过');
        let dataProps = {};
        dataProps.type_id = selectedType;
        dataProps.title = articleTitle;
        dataProps.article_content = articleContent;
        dataProps.intro = introducemd;

        let dataText = showDate.replace('-','/');
        dataProps.addTime = (new Date(dataText).getTime())/1000;  // 时间戳
        
        if (articleId === 0){  // 新增加
            dataProps.view_count = 0;  // 访问人数
            message.info('正在尝试保存文章');
            console.log('7777777');

            axios({
                method:'post',
                url:servicePath.addArticle,
                withCredentials: true,
                data: dataProps,
            }).then(
                res=>{
                    setArticleId(res.data.insertId);  // 新建文章成功，保存id；以后再次点击时，获取到返回到id，就时修改了，而不是新增
                    if(res.data.isSuccess){
                        message.success('文章保存成功');
                    } else {
                        message.error('文章保存失败');
                    }
                }
            )
        } else {
            dataProps.id = articleId;
            axios({
                method: 'post',
                url:servicePath.updateArticle,
                data:dataProps,
                withCredentials:true,
            }).then(
                res=>{
                    if(res.data.isSuccess){
                        message.success('文章保存成功');
                    } else {
                        message.error('文章保存失败');
                    }
                }
            )
        }
    }

    // 显示文章
    const getArticleById=(id)=>{
        message.error('id = ', id);

        
        axios(servicePath.getArticleById+id,{
            withCredentials:true,
        }).then(
            res=>{
                const articleInfo = res.data.data[0];
                setArticleTitle(articleInfo.title)
                setArticleContent(articleInfo.article_content);
                const html = marked(articleInfo.article_content);
                setMarkdownContent(html);
                setIntroducemd(articleInfo.introduce);
                const tempIntro = marked(articleInfo.introduce);
                setIntroducehtml(tempIntro);
                setShowDate(articleInfo.addTime);
                setSelectType(articleInfo.type_id);

                
            }
        )
    }

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}><Input placeholder='文章标题' size='large' value={articleTitle} onChange={(e)=>{setArticleTitle(e.target.value)}}/></Col>
                        <Col span={4}>
                            <Select defaultValue={selectedType} size='large' onChange={selectTypeHandler}>
                                {
                                    typeInfo.map((item,index)=>{
                                        return (<Option key={index} value={item.id}>{item.typeName}</Option>);
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea className='markdown-content' rows={35} value={articleContent} placeholder='文章内容' onChange={changeContent}/>
                        </Col>
                        <Col span={12}>
                            <div className='show-html' dangerouslySetInnerHTML={{__html:markdownContent}} ></div>
                        </Col>
                    </Row>

                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size='large'>暂存文章</Button>
                            <Button type='primary' size='large' style={{margin: '0 16px'}} onClick={saveArticle} >发布文章</Button>
                        </Col>
                        <Col span={24}>
                            <TextArea rows={4} value={introducemd} placeholder='文章简介' onChange={changeIntroduce} style={{margin: '16px 0'}}></TextArea>
                            <div className='introduce-html' dangerouslySetInnerHTML={{__html:introducehtml}} ></div>
                        </Col>
                        <Col span={12} style={{margin: '16px 0'}}>
                            <div className='=date-select'>
                                <DatePicker placeholder='发布日期' size='large' onChange={(date, dateString)=>{setShowDate(dateString)}}/>
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default AddArticle;