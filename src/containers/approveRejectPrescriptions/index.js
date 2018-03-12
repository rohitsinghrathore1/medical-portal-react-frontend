import React from "react";

import makeApiCall from "../../services/apiCallService";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Button from "material-ui/Button";

class ApproveRejectPrescriptions extends React.Component {
  state = {
    myPrescriptions: []
  };

  constructor() {
    super();
    this.getApproveRejectPrescriptionsSuccessCb = this.getApproveRejectPrescriptionsSuccessCb.bind(
      this
    );
    this.getApproveRejectPrescriptionsFailureCb = this.getApproveRejectPrescriptionsFailureCb.bind(
      this
    );
    this.getApproveRejectPrescriptions = this.getApproveRejectPrescriptions.bind(
      this
    );
    this.updateAccessStatusSuccessCb = this.updateAccessStatusSuccessCb.bind(
      this
    );
    this.updateAccessStatusFailureCb = this.updateAccessStatusFailureCb.bind(
      this
    );
  }

  componentDidMount() {
    this.getApproveRejectPrescriptions();
  }

  getApproveRejectPrescriptions() {
    const reqObj = {
      endPoint: "getApproveRejectPrescriptions",
      successCb: this.getApproveRejectPrescriptionsSuccessCb,
      failureCb: this.getApproveRejectPrescriptionsFailureCb
    };
    makeApiCall(reqObj);
  }

  getApproveRejectPrescriptionsSuccessCb(res) {
    console.log(res);
    this.setState({
      myPrescriptions: res.records
    });
  }

  getApproveRejectPrescriptionsFailureCb(res) {
    console.log(res);
  }

  updateAccessStatusSuccessCb(res) {
    console.log(res);
    this.getApproveRejectPrescriptions();
  }

  updateAccessStatusFailureCb(res) {
    console.log(res);
  }

  updateAccessStatus(status, id) {
    const reqObj = {
      endPoint: "approveRejectPrescriptionRequest",
      method: "PUT",
      data: { status, prescriptionId: id },
      successCb: this.updateAccessStatusSuccessCb,
      failureCb: this.updateAccessStatusFailureCb
    };
    makeApiCall(reqObj);
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
              <TableCell>Requested By</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.myPrescriptions.map((data, i) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{data.prescription_id.title}</TableCell>
                  <TableCell>{data.user_id.name}</TableCell>
                  <TableCell>{data.approval_status}</TableCell>

                  <TableCell>
                    {data.approval_status === "accessRequested" ? (
                      <Button
                        size="small"
                        color="primary"
                        onClick={() =>
                          this.updateAccessStatus(
                            "accessAllowed",
                            data.prescription_id.id
                          )}
                      >
                        Approve
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        color="primary"
                        onClick={() =>
                          this.updateAccessStatus(
                            "accessRequested",
                            data.prescription_id.id
                          )}
                      >
                        Reject
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ApproveRejectPrescriptions;
