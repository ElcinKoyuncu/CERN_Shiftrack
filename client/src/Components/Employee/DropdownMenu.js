import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
    
    return (
<div class="btn-group">
  <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Personal menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="/">Payroll</a></li>
    <li><a class="dropdown-item" onClick={showModal}>Request Time Off</a></li>
  </ul>
</div>


    )
}


export default DropdownMenu