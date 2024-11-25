import React from "react";
import { v4 } from "uuid";

interface IEmployeesProps {
  employees: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }[];
}

export const Employees: React.FC<IEmployeesProps> = ({ employees }) => {
  return (
    <div className="flex flex-col gap-2 py-1 px-2 bg-slate-300">
      {employees.map((emp) => {
        return (
          <div
            key={v4()}
            className="flex gap-3 items-center justify-arround bg-white p-1"
          >
            <div key={v4()}>
              <img src={emp.logo} alt={emp.company} />
            </div>
            <div key={v4()}>
              <div className="flex gap-2 text-sm items-center">
                <p className="text-slate-600 font-semibold">{emp.company}</p>
                {emp.new && (
                  <p className="bg-slate-500 text-slate-100 py-1 px-1 rounded-full text-xs">
                    NEW!
                  </p>
                )}
                {emp.featured && (
                  <p className="bg-slate-800 text-slate-100 py-1 px-1 rounded-full text-xs">
                    FEATURED
                  </p>
                )}
              </div>
              <p className="font-semibold">{emp.position}</p>
              <div className="flex gap-3 text-sm text-slate-500">
                <p>{emp.postedAt}</p>
                <p>{emp.contract}</p>
                <p>{emp.location}</p>
              </div>
            </div>
            <div className="flex flex-col px-4 text-sm">
              {emp.languages.map((lang) => (
                <p key={v4()}>{lang}</p>
              ))}
            </div>
            <div className="flex flex-col px-4 text-sm">
              {emp.tools.map((tool) => (
                <p key={v4()}>{tool}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    // <div  className="flex flex-col gap-2 py-1 px-2">
    //   {employees.map((emp, idx) => (
    //     <></>
    //   ))}
    // </div>
  );
};

{
  /* <div key={useId()} className="flex gap-3">
<div key={useId()}>
  <img key={useId()} src={emp.logo} alt={emp.company} />
</div>
<div key={useId()}>kas liko</div>
</div> */
}
