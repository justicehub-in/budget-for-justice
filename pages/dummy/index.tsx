import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import 'bootstrap/dist/css/bootstrap.css';



const App = () => {
      const [inputFields, setInputFields] = useState([{
        xaxis:'',
        yaxis:''       
    } ]);
 
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            xaxis:'',
            yaxis:''
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
   }
    
   const handleSubmit = e => {
    const list = [...inputFields];
      console.log(list);
   }

  const option = {
    title: {
      text: 'ECharts'
    },
    tooltip: {},
    legend: {
      data: ['sales']
    },
    xAxis: {
      data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 45]
      }
    ]
  };
  return (
    < >
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {xaxis, yaxis}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={xaxis} name="xaxis" className="form-control"  placeholder="Xaxis" />
                    </div>
                    </div>
                    <div className="col">
                    <input type="email" onChange={(evnt)=>handleChange(index, evnt)} value={yaxis} name="yaxis" className="form-control" placeholder="Yaxis" />
                    </div>
                    <div className="col">
                
                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                   <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={handleSubmit}>Submit</button>
                    
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
             
         <ReactEcharts option={option} />
    </>   
  )
  
}
export default App;