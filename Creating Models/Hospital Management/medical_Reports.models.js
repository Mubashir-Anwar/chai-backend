import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalReports = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
