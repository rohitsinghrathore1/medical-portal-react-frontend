const apiEndPoints = {
  login: "/login",
  getMedicalRecords: "/medical-records",
  getMyPrescriptions: "/users-prescriptions",
  getAllPrescriptions: "/prescriptions",
  getPrescriptionDetails: "/getPrescriptionDetails/:id",
  requestPrescriptionAccess: "/request-prescription-access",
  getApproveRejectPrescriptions: "/approve-reject-prescriptions",
  approveRejectPrescriptionRequest: "/approve-reject-prescription-access"
}

export default apiEndPoints;