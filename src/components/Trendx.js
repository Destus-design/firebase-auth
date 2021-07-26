import '../App.css';
import React, {useEffect, useState} from 'react';

    

 const Stocks = () => {

    useEffect( () => {
      getDat();
    }, [])
    
    const [competition, setCompetition] = useState([]);
   
        const getDat = async () => {
            const response = await fetch("https://api.coinlayer.com/api/live?access_key=9fa1e6b9cfdbef1a4e7bc7d9dc2a5827");
            const data = await response.json();
            setCompetition(data);
            console.log(data);
        }





    return (
   <div>
<h1>Shop page</h1>
   </div>
    );

}

export default Stocks;
