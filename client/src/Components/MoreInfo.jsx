import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import '../Style/MoreInfo.css'

import MoreTable from './MoreTable'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Chart from './Chart'

const MoreInfo = () => {

    const {id} = useParams();
    const [Data, setData] = useState({})
    const [rows, setRows] = useState([])

    const [loc, setLoc] = useState([]);
    const [total, setTotal] = useState(0)
    const [chartData, setChartData] = useState([])

    
    const autoConvertMapToObject = (map) => {
        const obj = {};
        for (const item of [...map]) {
        const [
            key,
            value
        ] = item;
        obj[key] = value;
        }
        return obj;
    }

    const colors = ["#f56858","#db5546",'#bc4234','#952e23','#7f1d12','#5f1108'];

    const getData = async() =>{
        try {
            const res = await fetch(`/getDataById/${id}`,{
                method : 'GET',
                headers : {
                    'Content-Type' : 'applciation/json'
                }
            })

            const Data = await res.json();

            setData(Data);

            const res2 = await fetch(`/getDataByDID/${Data.DeviceId}`,{
                method : 'GET',
                headers : {
                    'Content-Type' : 'applciation/json'
                }
            })

            const Data2 = await res2.json();
            const temp = new Map([]);
            for(var i = 0; i<Data2.length;i++){
                if(temp.get(Data2[i].location) == null){
                    temp[Data2[i].location] = 0;
                    continue;
                }
                temp[Data2[i].location]+=1;
            }
            for(i = 0; i<Data2.length;i++){
                temp[Data2[i].location]+=1;
                
            }
            
            var obj = {};
            for(i = 0; i<Data2.length;i++){
                obj[ '' + Data2[i].location] = temp[Data2[i].location];  
            }

            const values = Object.values(obj);

            const sum = values.reduce((accumulator, value) => {
            return accumulator + value;
            }, 0);

            let sortable = [];
            for (var vehicle in obj) {
                sortable.push([vehicle, obj[vehicle]]);
            }

            sortable.sort(function(a, b) {
                return b[1] - a[1];
            });

            console.log(sortable);
            let cd = [];
            for(let i=0;i<sortable.length;i++){
                console.log(sortable[i]);
                cd.push({
                    value : sortable[i][1],
                    color : colors[i],
                })
            }
            console.log(cd);
            setChartData(cd);
            setTotal(sum);
            setLoc(sortable);

            // console.log(sortable);
            // console.log(sum);
            


            setRows(Data2)

        } catch (error) {
            
        }
    }

    useEffect(() => {
      getData();
    }, [])
    

  return (
    <div className='more_body'>
        <div className='first'>
            <div style={{
                 fontSize: "larger"
            }}>{Data.DeviceId}</div>
            <div>{Data.DeviceType}</div>
        </div>
        <div className='second'>
            <div className='second1'>
                <MoreTable rows={rows}/>
            </div>
            <div className='second2'>
                <div className='second21'>
                    

                    <Chart data={chartData}/>
                </div>
                <div className='second22'>
                    <div className='second221'>

                        <p>% Time to spend in each location</p>
                        {
                            loc.map((ele,index) => {
                                return <p style={{
                                    display : 'flex',
                                    // alignItems : 'center',
                                    // width:'20%',
                                    // justifyContent:'space-between'
                                }}>
                                    <div>

                                    <FiberManualRecordIcon fontSize='10px' style={{
                                        color : colors[index],
                                        marginRight:'.5rem'
                                    }}  />
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                        
                                    }}>
                                        <span>{ele[0]}</span>
                                        <span>{ele[1]/total * 100} %</span>
                                    </div>

                                </p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoreInfo