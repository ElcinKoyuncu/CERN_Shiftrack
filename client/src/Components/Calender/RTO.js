import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const RTO = () => {
    
    return (
<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="" required/>
    </div>
    <div className="col-md-4 mb-3">
      <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="" required/>
    </div>
    <div className="col-md-4 mb-3">
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" className="form-control" id="validationDefault03" placeholder="City" required/>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" className="form-control" id="validationDefault04" placeholder="State" required/>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required/>
    </div>
  </div>
  <div className="form-group">
  </div>
  <button className="btn btn-primary" type="submit">Submit Time Off</button>
</form>
   
    )
}


export default RTO