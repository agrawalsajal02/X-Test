import React,{useState,useEffect} from 'react'
import { Row,Col,Button ,ButtonGroup, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {Route,Switch} from 'react-router-dom'
import Questions from "../../Questions"
import Question from "./Question";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const TestWindow = () => {
    const [ans, setans] = useState([]);
    const handle = useFullScreenHandle();

useEffect(() => {
    Questions.map(ques=>{
        setans(state=>[...state,{
            id:ques.id,
            options:-1,
            correctans:ques.correctans
        }])

})}, [])
const onselect=(questionid,choice)=>{
   var newans=[...ans];

   if(choice+1==newans[questionid-1].options){
    newans[questionid-1].options=-1;
  
   }else{
    newans[questionid-1].options=choice+1;
  
   }
   setans(newans)
}

    return (
        <>
        <button onClick={handle.enter}>
        Enter fullscreen
      </button>
        <FullScreen handle={handle}>
        <div style={{background: "white"}}>
        <Row>
            <Col md={2} className="border-right mx-auto">
            <ButtonGroup vertical>
            {Questions.map(ques=><Link to={{pathname:`/teststuents/${ques.id}`}} key={ques.id} className="btn btn-primary my-2">Q {ques.id}</Link>)}
            </ButtonGroup>
            </Col>
            <Col md={8} className="mx-auto">
           
                <Switch>
               <Route path={`/teststuents/:id`} 
               render={(props) => <Question onselect={onselect} ans={ans} {...props}/>}
                />
              </Switch>
                       
                
            </Col>
        </Row>
        </div>
        </FullScreen>
        </>
    )
}

export default TestWindow
