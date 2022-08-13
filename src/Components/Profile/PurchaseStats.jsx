import React,  { useCallback, useState  } from 'react';
import { PieChart, Pie, Sector,Tooltip, Cell, ResponsiveContainer, Legend, } from 'recharts';


const data = [
    {name : "Petrol", value: 1000},
    {name : "Diesel", value: 200},
    {name : "Lube", value : 300}
];

const quantity_data = {
    "Petrol" : 23,
    "Diesel" : 10,
    "Lube" : 20
};

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
          fontSize="10"
        >{`QTY ${quantity_data[payload.name]} L`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
          fontSize="10"
        >
          {`(COST ${value} INR)`}
        </text>
      </g>
    );
  };








const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
  
  const CustomTooltip = ( {payload,active,label} ) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" >
          <p className="label"><strong>{"Category"}</strong>: {payload[0].name}</p>
          <p className="intro"><strong>{"QTY"}</strong> : {quantity_data[payload[0].name]} L</p>
          <p className="intro"><strong>{"Cost"}</strong> : {payload[0].value} INR</p>
        </div>
      );
    
      }
    return null;
  };
  
const GainStatsChart = () =>{
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return(
    <>
    <h5 className="text-warning text-responsive text-center">Gain Stats</h5>            
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={500} height={500}>
         <Pie         
             activeIndex={activeIndex}
             activeShape={renderActiveShape}
             data={data}                               
             innerRadius={"40%"}
             outerRadius={"80%"}
             fill="#8884d8"
             dataKey="value"
             onMouseEnter={onPieEnter}   >
              {data.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
         ))}
         </Pie>
         <Legend  />
     </PieChart>
 </ResponsiveContainer>
 </>
  );
}

const ProductStatsChart = () =>{
 
 return (
   <>
  <h5 className="text-warning text-responsive text-center">Purchase Stats</h5> 
          
  <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={500}>         
          <Pie          
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={ "95%"}
              fill="#8884d8"
              dataKey="value"
            
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />            
           <Legend  />
      </PieChart>
  </ResponsiveContainer>
  </>
 );
}

 const PurchaseStats = () => {
   
     return (
        <div className="col-md-4  purchase-chart p-2" >
            <div className="row p-3 ">
                <div className="card chart-1"> 
                  <GainStatsChart />
                </div>
            </div>
            <div className="row p-3">
                <div className="card chart-2">  
                  <ProductStatsChart />
                </div>
            </div>
         </div>
     );

 };

 export default PurchaseStats;