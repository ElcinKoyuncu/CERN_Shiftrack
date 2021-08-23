import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const AdminDD = (props) => {
    
    return (
<div class="btn-group">
  <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Admin menu
  </button>
  <ul class="dropdown-menu dropdown-menu-left">
    <li><a class="dropdown-item" href="/">Make a Schedule</a></li>
    <li><a class="dropdown-item" href="/"></a>Team, position, hours</li>
    <li><a class="dropdown-item" href="/"></a>PTO Request</li>
  </ul>
</div>


    )
}


export default AdminDD