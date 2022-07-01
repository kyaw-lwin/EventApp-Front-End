import React, { useState, useEffect } from "react";
import Add from "./Add";
import './App.css';
import Container from 'react-bootstrap/Container';


function Dashboard(props) {
  const [events, cEvents] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getEvents().then((response) => cEvents(response.data));
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (event) => {
    cCurrent(event);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return events.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.eventName}</td>        
          <td>{current.eventLocation}</td>
          <td>{current.eventDetails}</td>
          <td>{current.eventDate}</td>
          <td>£{current.price}</td>
          <td>
          <div className = "add-submit">
            <button  className = "login-submit2"  onClick={() => removeEvent(current._id)}> remove</button>
            <button  className = "login-submit2"  onClick={() => updateEvent(current)}> update</button>
          </div>
          </td>
        </tr>
      
      );
    });
  };

  return (
    <>
{/* /********************************************************************************************************************************/}
    
<Container className = "mainPage  ">
      <br />
      <div className="mainpage-header  col-md-12">
        Events
      </div>
{/* /********************************************************************************************************************************/}      
      <br />
      <br />
      <div className="update-event col-md-12">
{/* /********************************************************************************************************************************/}  
        <div  className= "addForm col-md-6">
        <Add
          client={props.client}
          refreshList={() => {
            refreshList();
            cCurrent(undefined);
          }}
          currentEvent={current}
        />
      </div>
{/* /********************************************************************************************************************************/}      
      <br />
      <div className = "event-list col-md-6">
        <br />
          <table>
            <thead  className = "titles">
                <tr>
                    <th>Event Name</th>
                    <th>Event Location</th>    
                    <th>Event Details</th>      
                    <th>Event Date</th>    
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{buildrows()}</tbody>
          </table>       
      </div>

{/* /********************************************************************************************************************************/}      
      </div>
{/* /********************************************************************************************************************************/}      
    </Container>
      
{/* /**********************************************************************************************************************/}
    </>
  );
}

export default Dashboard;


