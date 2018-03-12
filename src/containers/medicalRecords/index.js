import React from "react";

import makeApiCall from "../../services/apiCallService";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

class MedicalRecords extends React.Component {
  state = {
    myMedicalRecords: []
  };

  constructor() {
    super();
    this.getMedicalRecordsSuccessCb = this.getMedicalRecordsSuccessCb.bind(
      this
    );
    this.getMedicalRecordsFailureCb = this.getMedicalRecordsFailureCb.bind(
      this
    );
  }

  componentDidMount() {
    const reqObj = {
      endPoint: "getMedicalRecords",
      successCb: this.getMedicalRecordsSuccessCb,
      failureCb: this.getMedicalRecordsFailureCb
    };
    makeApiCall(reqObj);
  }

  getMedicalRecordsSuccessCb(res) {
    console.log(res);
    this.setState({
      myMedicalRecords: res.records
    });
  }

  getMedicalRecordsFailureCb(res) {
    console.log(res);
  }

  render() {
    return (
      <div>
        <h2>MedicalRecords</h2>

        <Table className="records-table">
          <TableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.myMedicalRecords.map((data, i) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{data.recordDetails}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default MedicalRecords;
