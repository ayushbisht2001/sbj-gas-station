import React from 'react';
 
 

const data = [
    {
        "date" : "12 may, 2021, 3:00 pm",
        "rate" : 80,
        "category" : "petrol",
        "quantity" : 10,
        "total_cost" : 800,
        "pump_id" : "UK1001"
        
    },
    {
        "date" : "12 may, 2021, 3:00 pm",
        "rate" : 80,
        "category" : "diesel",
        "quantity" : 10,
        "total_cost" : 800,
        "pump_id" : "UK1002"
        
    },
    {
        "date" : "12 may, 2021, 3:00 pm",
        "rate" : 90,
        "category" : "petrol",
        "quantity" : 10,
        "total_cost" : 900,
        "pump_id" : "UK1003"
        
    },
    {
        "date" : "12 may, 2021, 3:00 pm",
        "rate" : 70,
        "category" : "lube",
        "quantity" : 10,
        "total_cost" : 700,
        "pump_id" : "UK1004"
        
    }

]

// anychart.onDocumentReady(function() {
// const purchase_data =[
//     {x : "PETROL", value : 60},
//     {x : "DIESEL", value : 30},
//     {x : "LUBE", value : 10}
// ];
// var chart = anychart.pie();
// chart.title("Purchase Records");
// chart.data(data);
// chart.container('container');
// chart.draw();
// })

const badges = {
    "petrol" : "badge-warning",
    "lube" : "badge-dark",
    "diesel" : "badge-primary"
}

const purchase_data = data.map(i =>(
    <li className="list-group-item text-dark purchase-list">
        <ul className="list-group m-0 p-0 purchase-subroot-list" key={i}>
            <li className="list-group-item purchase-sublist m-0 p-2 "> 
                <ul className="list-inline m-0 p-0 ">
                    <li className="list-inline-item m-0 p-0"> <p>{i.date}</p></li>
                    <li className="list-inline-item m-0 p-0"> <small className="text-muted">Rate : {i.rate} rs/ltr</small></li>
                </ul>
            </li>
            <li className="list-group-item m-0 p-1 purchase-sublist">
                <ul className="list-inline purchase-sub-subroot-list">
                    <li className="list-inline-item purchase-sub-sublist">
                        <ul className="list-group m-0 p-0 h-auto purchase-data-list">
                            <li className="list-group-item m-0 p-0"> <p>Category</p></li>
                            <li className="list-group-item  p-0  h5"><p className={ "badge m-0 " + badges[i.category]}>{i.category}</p></li>
                        </ul>    
                
                    </li>
                    <li className="list-inline-item purchase-sub-sublist">
                        <ul className="list-group m-0 p-0 h-auto purchase-data-list">
                            <li className="list-group-item m-0 p-0"> <p>Cost (INR)</p></li>
                            <li className="list-group-item m-0 p-0"> <p className="m-0 "> {i.total_cost} </p></li>
                        </ul>
                    </li>
                    <li className="list-inline-item purchase-sub-sublist">
                        <ul className="list-group m-0 p-0 h-auto purchase-data-list">
                                <li className="list-group-item m-0 p-0"> <p>Quantity</p></li>
                                <li className="list-group-item m-0 p-0"> <p className="m-0 "> {i.quantity} </p></li>
                        </ul>
                    </li>
                    <li className="list-inline-item purchase-sub-sublist">
                        <ul className="list-group m-0 p-0 h-auto purchase-data-list">
                            <li className="list-group-item m-0 p-0"> <p>Pump ID</p></li>
                            <li className="list-group-item m-0 p-0"> <p className="m-0 "> {i.pump_id}</p></li>
                        </ul>    
                    </li>                          
                </ul> 
            </li>
        
        </ul> 
    </li>

))

export default function PurchaseHistory() {  
    
        return (  
            <div className="col-md-8 col-sm-12  order-lg-last p-0 m-0">
            <div className="card purchase-root  p-0">
                <div className="card-body">
                        <h3 className="card-title text-center">Purchasing History</h3> 
                        <hr></hr>
                        <ul className="list-group purchase-root-list">
                            {purchase_data}
                        </ul>
                </div>
            </div>
           </div>
        );
   
}
 
 