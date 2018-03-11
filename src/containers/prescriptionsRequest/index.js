import React from 'react';

import makeApiCall from "../../services/apiCallService";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';



class Prescriptions extends React.Component {

  state = {
    myPrescriptions: []
  }

  constructor(){
    super();
    this.getAllPrescriptionsSuccessCb = this.getAllPrescriptionsSuccessCb.bind(this);
    this.getAllPrescriptionsFailureCb = this.getAllPrescriptionsFailureCb.bind(this);
  }

  getAllPrescriptionsSuccessCb(res){
    console.log(res);
    this.setState({
      myPrescriptions: res.records
    })
  }

  getAllPrescriptionsFailureCb(res){
     console.log(res)
  }

  requestPrescriptionAccess(id){
    console.log("requestPrescriptionAccess");
  }

  componentDidMount() {
    const reqObj = {
      endPoint: "getAllPrescriptions",
      successCb: this.getAllPrescriptionsSuccessCb,
      failureCb: this.getAllPrescriptionsFailureCb
    }
    makeApiCall(reqObj)
  }

  render() {
   return (
    <div>
      <h2>Prescriptions</h2>

       <Table className="records-table">
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>Prescription Title</TableCell>
            <TableCell>Request Access</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.myPrescriptions.map((data,i) => {
            return (
              <TableRow key={data.id}>
                <TableCell>{i+1}</TableCell>
                <TableCell >{data.title}</TableCell>
                <TableCell >
                  <Button size="small" color="primary" onClick={()=>this.requestPrescriptionAccess(data.id)}>Request Access</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

    </div>
  )
 }
}

export default Prescriptions;