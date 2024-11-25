import { PageTitle } from "../components/shared/PageTitle";
import emp from "../../data/data.json";
import { Employees } from "../components/Employees";
import { useEffect, useState } from "react";

interface singleEmp {
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
}

export default function ContactsPage() {
  const [employees, setEmployees] = useState(emp);
  const [newCheck, setNewCheck] = useState(false);
  const [featuredCheck, setFeaturedCheck] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!newCheck && !featuredCheck && !search) setEmployees([...emp]);

    newCheck && setEmployees(emp.filter((employee) => employee.new === true));
    featuredCheck &&
      setEmployees((prev) =>
        emp.filter((employee) => employee.featured === true)
      );
    search &&
      setEmployees(
        employees.filter((prev) =>
          prev.location.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    // if (newCheck) newArr = emp.filter((employee) => employee.new === true);
    // if (featuredCheck)
    //   featArr = emp.filter((employee) => employee.featured === true);
    // if (search)
    //   searchArr = emp.filter(
    //     (employee) =>
    //       employee.position
    //         .toLocaleLowerCase()
    //         .includes(search.toLocaleLowerCase()) ||
    //       employee.company
    //         .toLocaleLowerCase()
    //         .includes(search.toLocaleLowerCase())
    //   );
    // setEmployees((employees) => [...newArr, ...featArr, ...searchArr]);
  }, [search, newCheck, featuredCheck]);

  // const filterEmployees = (search: string) => {
  //   setEmployees(
  //     emp.filter(
  //       (employee) =>
  //         employee.position
  //           .toLocaleLowerCase()
  //           .includes(search.toLocaleLowerCase()) ||
  //         employee.company
  //           .toLocaleLowerCase()
  //           .includes(search.toLocaleLowerCase())
  //     )
  //   );
  // };

  return (
    <main>
      <PageTitle title="Kontaktai" />

      <div className="max-w-screen-sm mx-auto border border-slate-800">
        <div className="w-full p-5 bg-slate-500">
          <label className="text-slate-300" htmlFor="search">
            Paieška pagal specializaciją ir įmonės pavadinimą
          </label>
          <input
            className="w-full rounded-md py-2 px-3"
            type="text"
            id="search"
            placeholder="Darbuotojo vardas"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-5">
            <div>
              <label className="mr-1 text-slate-200" htmlFor="new">
                NEW
              </label>
              <input
                id="new"
                type="checkbox"
                onChange={(e) => setNewCheck(e.target.checked)}
              />
            </div>
            <div>
              <label className="mr-1 text-slate-200" htmlFor="featured">
                FEATURED
              </label>
              <input
                onChange={(e) => setFeaturedCheck(e.target.checked)}
                id="featured"
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <Employees employees={employees} />
      </div>
    </main>
  );
}
