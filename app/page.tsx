"use client";

import React, { use, useState } from "react";
import InputForm from "./components/inputForm";


interface FormData {
  studentName: string;
  yearLevel: string;
  degree: string;
  date: string;
  studentNumber: string;
  academicYear: string;
  code: string;
  units: string;
  courseTitle: string;
  grade: string;
  remarks: string;
  faculty: string;
}

interface SubjectData {
  code: string;
  units: string;
  courseTitle: string;
  grade: string;
  remarks: string;
  faculty: string;
}


function page() {
  const [formData, setFormData] = useState({
    studentName: "",
    yearLevel: "",
    degree: "",
    date: "",
    studentNumber: "",
    academicYear: "",

    code: "",
    units: "",
    courseTitle: "",
    grade: "",
    remarks: "",
    faculty: "",

  });

  const [data, setData] = useState<SubjectData[]>([]);
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddData = () => {
    // Add current "Subjects" data to the table
    setData((prevData) => [
      ...prevData,
      {
        code: formData.code,
        units: formData.units,
        courseTitle: formData.courseTitle,
        grade: formData.grade,
        remarks: formData.remarks,
        faculty: formData.faculty,
      },
    ]);

    // Reset "Subjects" form fields
    setFormData((prevFormData) => ({
      ...prevFormData,
      code: "",
      units: "",
      courseTitle: "",
      grade: "",
      remarks: "",
      faculty: "",
    }));
  };
  

  return (
    <>
      <span className="text-4xl font-semibold flex justify-center">
        Cavite State University Portal
      </span>

      <div className="flex justify-center gap-4">
        {/* Top Column 1 */}
        <div className="flex-1 h-full max-h-screen overflow-auto w-full px-4 py-4">
          <span className="text-2xl font-semibold flex justify-center">
            Student Info
          </span>

          <div className="flex justify-between">
            <div className="flex flex-col mt-8">
              <label className="font-semibold">Student Full Name</label>
              <InputForm
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="LN, FN, SN, MI, SFX"
              />
            </div>

            <div className="flex flex-col mt-8">
              <label className="font-semibold">Student Number</label>
              <InputForm
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                placeholder="202310101"
              />
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <label className="font-semibold">Year Level</label>
            <InputForm
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
              placeholder="  FIRST YEAR"
            />
          </div>

          <div className="flex flex-col mt-8">
            <label className="font-semibold">Degree</label>
            <InputForm
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="BACHELOR OF SCIENCE IN COMPUTER SCIENCE"
            />
          </div>

          <div className="flex flex-col mt-8">
            <label className="font-semibold">Date</label>
            <InputForm
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="FEBRUARY 12, 2024"
            />
          </div>

          <div className="flex flex-col mt-8">
            <label className="font-semibold">Academic Year</label>
            <InputForm
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              placeholder="1st SEM. 2023-2024"
            />
          </div>
        </div>

        {/* Top Column 2 */}
        <div className="flex-1 h-full max-h-screen overflow-auto w-full px-4 py-4">
          <span className="text-2xl font-semibold flex justify-center mb-8">
            Subjects
          </span>

          <div className="flex justify-between mt-8">
            <div className="flex-col">
              <label className="font-semibold">Code</label>
              <br />
              <InputForm
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="DCIT 21"
              />
            </div>

            <div className="flex-col">
              <label className="font-semibold">Units</label>
              <InputForm
                name="units"
                value={formData.units}
                onChange={handleChange}
                placeholder="3"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex-col">
              <label className="font-semibold">Course Title</label>
              <br />
              <InputForm
                name="courseTitle"
                value={formData.courseTitle}
                onChange={handleChange}
                placeholder="Computer Programming 1"
              />
            </div>

            <div className="flex-col">
              <label className="font-semibold">Grade</label>
              <InputForm
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                placeholder="3.00"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex-col">
              <label className="font-semibold">Remarks</label>
              <br />
              <InputForm
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Passed"
              />
            </div>

            <div className="flex-col">
              <label className="font-semibold">Faculty</label>
              <InputForm
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                placeholder="Faculty Professor"
              />
            </div>
          </div>

          <button type="button" onClick={handleAddData} className="btn btn-success w-full mt-8 text-white">Add</button>

        </div>
      </div>

      {/* Preview Result */}

      <div className="flex-1 h-full max-h-screen overflow-auto w-full px-4 py-4">

        <div className="flex justify-between">
          <div className="w-full">
            <div className="flex gap-2 mt-8">
              <label className="font-semibold">Student Name: </label>
              {formData.studentName.toUpperCase()}
            </div>

            <div className="flex gap-2 mt-8">
              <label className="font-semibold text-start">Year Level: </label>
              {formData.yearLevel.toUpperCase()}
            </div>

            <div className="flex gap-2 mt-8">
              <label className="font-semibold">Degree: </label>
              {formData.degree.toUpperCase()}
            </div>

            <div className="flex gap-2 mt-8">
              <label className="font-semibold">Date: </label>
              {formData.date.toUpperCase()}
            </div>
          </div>

          <div className="w-full">
            <div className="flex gap-2 mt-8">
              <label className="font-semibold">Student Number: </label>
              {formData.studentNumber.toUpperCase()}
            </div>

            <div className="flex gap-2 mt-8">
              <label className="font-semibold">Academic Year: </label>
              {formData.academicYear.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      
      <hr />
      {/* Table */}
      <div className="mt-8">
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Units</th>
              <th>Course Title</th>
              <th>Grade</th>
              <th>Remarks</th>
              <th>Faculty</th>
            </tr>
          </thead>

          <tbody>
            
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.code.toUpperCase()}</td>
                <td>{item.units.toUpperCase()}</td>
                <td>{item.courseTitle.toUpperCase()}</td>
                <td>{item.grade.toUpperCase()}</td>
                <td>{item.remarks.toUpperCase()}</td>
                <td>{item.faculty.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default page;
