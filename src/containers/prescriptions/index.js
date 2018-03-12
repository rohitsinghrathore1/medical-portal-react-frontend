import React from "react";

import makeApiCall from "../../services/apiCallService";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

class Prescriptions extends React.Component {
  state = {
    myPrescriptions: []
  };

  constructor() {
    super();
    this.getPrescriptionsSuccessCb = this.getPrescriptionsSuccessCb.bind(this);
    this.getPrescriptionsFailureCb = this.getPrescriptionsFailureCb.bind(this);
  }

  componentDidMount() {
    const reqObj = {
      endPoint: "getMyPrescriptions",
      successCb: this.getPrescriptionsSuccessCb,
      failureCb: this.getPrescriptionsFailureCb
    };
    makeApiCall(reqObj);
  }

  getPrescriptionsSuccessCb(res) {
    console.log(res);
    this.setState({
      myPrescriptions: res.records
    });
  }

  getPrescriptionsFailureCb(res) {
    console.log(res);
  }

  render() {
    return (
      <div>
        <h2>Prescriptions</h2>

        <Table className="records-table">
          <TableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.myPrescriptions.map((data, i) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.prescription}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Prescriptions;
