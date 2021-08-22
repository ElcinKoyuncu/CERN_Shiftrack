import React from 'react';
import ReactFlow from 'react-flow-renderer';
import "./admin.css";

const AdminPage = () => {

    const elements = [
        { id: '1', type: 'input', data: { label: 'Manager Steve' }, position: { x: 250, y: 5 } },
        // you can also pass a React Node as a label
        { id: '2', data: { label: <div>Employee: Sarah</div> }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: <div>Employee: James</div> }, position: { x: 100, y: 100 } },
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-2', source: '1', target: '3', animated: true },
      ];

    return (
        <div> 
            
           <h2 class="text-center">Admin page</h2> 
            
           <div>
               <h3>Staff Flow Chart</h3>
               <div style={{ height: 200, width: 300}} class="border border-primary">
               <ReactFlow elements={elements} />
               </div>
            
           </div>
     
        </div>
    )

}

export default AdminPage;