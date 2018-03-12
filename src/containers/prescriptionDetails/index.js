import React from "react";

import makeApiCall from "../../services/apiCallService";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Button from "material-ui/Button";

class PrescriptionDetails extends React.Component {
  state = {
    myPrescription: {}
  };

  constructor() {
    super();
    this.getPrescriptionDetailsSuccessCb = this.getPrescriptionDetailsSuccessCb.bind(
      this
    );
    this.getPrescriptionDetailsFailureCb = this.getPrescriptionDetailsFailureCb.bind(
      this
    );
    this.requestPrescriptionAccessSuccessCb = this.requestPrescriptionAccessSuccessCb.bind(
      this
    );
    this.requestPrescriptionAccessFailureCb = this.requestPrescriptionAccessFailureCb.bind(
      this
    );
  }

  componentDidMount() {
    const reqObj = {
      endPoint: "getPrescriptionDetails",
      params: [{ key: ":id", val: +this.props.match.params.id }],
      successCb: this.getPrescriptionDetailsSuccessCb,
      failureCb: this.getPrescriptionDetailsFailureCb
    };
    makeApiCall(reqObj);
  }

  getPrescriptionDetailsSuccessCb(res) {
    console.log(res);
    this.setState({
      myPrescription: res.prescription
    });
  }

  getPrescriptionDetailsFailureCb(res) {
    console.log(res);
  }
  requestPrescriptionAccessSuccessCb(res) {
    console.log(res);
  }
  requestPrescriptionAccessFailureCb(res) {
    console.log(res);
  }

  requestPrescriptionAccess(id) {
    console.log("requestPrescriptionAccess");
    const reqObj = {
      endPoint: "requestPrescriptionAccess",
      method: "POST",
      data: { prescriptionId: this.props.match.params.id },
      successCb: this.requestPrescriptionAccessSuccessCb,
      failureCb: this.requestPrescriptionAccessFailureCb
    };
    makeApiCall(reqObj);
  }

  render() {
    const data = this.state.myPrescription;
    return (
      <div>
        <h2>Prescription Details</h2>

        {this.state.myPrescription.id ? (
          <Table className="records-table">
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Prescription Title</TableCell>
                <TableCell>Request Access</TableCell>
                <TableCell>Medical Record Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={data.id}>
                <TableCell>1</TableCell>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.prescription}</TableCell>
                <TableCell>{data.medical_record_id}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <div>
            You are not Authorized to view this Prescription <br />
            <Button
              size="small"
              color="primary"
              onClick={() => this.requestPrescriptionAccess()}
            >
              Request Prescription Access
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default PrescriptionDetails;
