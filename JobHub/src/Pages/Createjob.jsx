import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
const Createjob = () => {
  const [selectedOption, setselectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data);
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "ReactJs", label: "ReactJs" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "Angular", label: "Angular" },
    { value: "Django", label: "Django" },
    { value: "C/C++", label: "C/C++" },
    { value: "ExpressJs", label: "ExpressJs" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "MySQL", label: "MySQL" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#f7f7f7] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Cisco"
                {...register("companyName")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimun Salary</label>
              <input
                type="text"
                placeholder="Ex: $10k"
                {...register("minPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="Ex: $150k"
                {...register("maxPrice")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                {...register("salaryType")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Pune"
                {...register("jobLocation")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 4th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2024-06-26"
                {...register("postingDate")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Worked remotely">Worked remotely</option>
                <option value="Any experience">Any experience</option>
              </select>
            </div>
          </div>
          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skillset</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setselectedOption}
              options={options}
              isMulti
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6 py-4"
            />
          </div>
          {/* 6th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo URL: https://weshare.com/img1"
                {...register("companyLogo")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your Experience</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}

          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-3.5 focus:outline-none placeholder:text-gray-700"
              row={6}
              defaultValue={
                "Seeking a motivated software developer to design, develop, and maintain web applications, collaborate with teams, and ensure project success."
              }
              placeholder="Enter your Job Description here"
              {...register("description")}
            />
          </div>

          {/* last row */}

          <div className="w-full">
            <label className="block mb-1 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="YourEmail@xyz.com"
              {...register("postedBy")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-[#212121] placeholder:text-[#BDBDBD] focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <input
            type="submit"
            className="block mt-12 bg-[#843ac9] text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Createjob;
