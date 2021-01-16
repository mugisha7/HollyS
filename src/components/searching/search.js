import React,{useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table'

const Searching = () => {
    
    const [state, setstate] = useState([])
    const url = 'https://contactaddress.herokuapp.com/api/all_contacts';
    
    const getContacts = () => {
        fetch(url).then(response => response.json())
            .then((json) => setstate(json.data)).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getContacts()
    }, []);
     
     if (state.length===0) {      
            return<center><h1>Loading ...</h1></center>     
   }
  
    return (
        <div>
<Table striped bordered hover variant="dark">
  <thead>
   <tr>
      <th>names</th>
      <th>Phone number</th> 
    </tr>
    </thead>         
     <tbody> 
         {state.map(contact => <tr key={contact.id}>
        <td>{ contact.names}</td>
         <td>{contact.phone}</td>
       </tr>)}             
   </tbody>
 </Table>
</div>
    )
}

export default Searching
