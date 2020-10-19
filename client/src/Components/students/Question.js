import React,{useState,useEffect} from 'react'
import {Form,Row,Col} from 'react-bootstrap';
import Questions from "../../Questions"
const Question = (props) => {
    const {Title,choices}=Questions.find(ques=>ques.id===props.match.params.id);
const {ans}=props;
const {options}=ans[props.match.params.id-1]||{};

    return (
        <div>    
            <div style={{fontSize:"1.5rem",fontFamily:'Pro'}} className="my-3 mb-5">{Title}</div>       
            {choices.map((ch,index)=>(
        <Row key={index} className="my-3">
<Col md={1} className="">
<input type='checkbox' style={{width:"2rem",height:"2rem"}}  checked={options===-1?0:index+1===options?1:0}    onChange={()=>props.onselect(props.match.params.id,index)} />
           
</Col>
<Col md={10}>
<label for='checkboxOneInput' className="h3 ml-3 mr-auto" style={{fontWeight:"normal",fontFamily:"Source"}}>{ch}</label>

</Col>
        </Row>

))}
        </div>
    )
}

export default Question;

