import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownMenu = () => {
    
    return (
<div class="btn-group">
  <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Personal menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="/">Payroll</a></li>
    <li><a class="dropdown-item" href="/">Request Time Off</a></li>
  </ul>
</div>


    )
}


export default DropdownMenu