import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const ExperienceCard = (props) => {
  const {
    title,
    companyName,
    startDate,
    finishDate,
    jobDescription,
    companyLogo,
    companyLink,
    technologies,
    location,
  } = props;

  //bg-gradient-to-r from-gray-200 to-gray-300 dark:from-cyan-500 dark:to-teal-500  dark:hover:from-teal-500 dark:hover:to-cyan-500
  return (
    <div className="bg-gray-200 rounded-md dark:bg-teal-600/50 gap-4 px-12 py-8 flex flex-col md:flex-row justify-center w-full">
      <Image
        src={companyLogo}
        alt="Company Logo"
        className=" drop-shadow-[0_4px_5px_rgba(0,0,0,1)] rounded-lg"
        style={{
          width: "150px",
          height: "150px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div className="flex flex-col gap-2 w-full md:px-8">
        <div className="flex gap-5 font-bold">
          <div className="flex flex-col md:justify-between md:flex-row w-full">
            <div>
              <h2 className="capitalize text-center text-xl ">{title}</h2>
              <div>
                <a target="_blank" href={companyLink} rel="noopener noreferrer">
                  {companyName}
                </a>
              </div>
              <pan>{location}</pan>
            </div>
            <div>
              <span className="capitalize">
                {startDate} - {finishDate}
              </span>
              {/* <DateDifference startDate={startDate} endDate={finishDate} /> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center relative mx-4"></div>
        <div className="">
          <div
            className="text-justify list-square"
            dangerouslySetInnerHTML={{ __html: jobDescription }}
          />
          {/* <Link className="underline">more details</Link> */}

          <ul className="flex flex-wrap gap-2 justify-center text-xl md:text-sm py-3">
            {technologies.length > 3 ? (
              <>
                {technologies.map((e) => (
                  <li
                    key={e}
                    className="px-2 py-2  bg-stone-200 text-stone-800 rounded-md"
                  >
                    {e}
                  </li>
                ))}
              </>
            ) : (
              technologies.map((e) => (
                <li
                  key={e}
                  className="px-2 py-2 bg-stone-200 text-stone-800 rounded-md"
                >
                  {e}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

function DateDifference(start, end) {
  console.log(start, end);
  const calculateTimeDifference = (startDateData, endDateData) => {
    if (startDateData || endDateData) {
      const startDate = new Date(startDateData);
      const endDate =
        endDateData == "current" ? new Date() : new Date(endDateData);

      const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
      const monthsDifference =
        endDate.getMonth() - startDate.getMonth() + 12 * yearsDifference;
      console.log({
        startDateData,
        endDateData,
        startDate,
        endDate,
        yearsDifference,
        monthsDifference,
      });
      return monthsDifference;
    }
  };

  const formatTimeDifference = (monthsDiff) => {
    const years = parseInt(monthsDiff / 12);
    const months = monthsDiff - 12 * parseInt(monthsDiff / 12);

    if (years > 0 && months > 0) {
      return `${years} ${years === 1 ? "year" : "years"} and ${months} ${
        months === 1 ? "month" : "months"
      }`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"}`;
    } else {
      return "Less than 1 month";
    }
  };

  const months = calculateTimeDifference(start, end);
  console.log(months);

  return <div>{/* <p>{formatTimeDifference(months)}</p> */}</div>;
}
