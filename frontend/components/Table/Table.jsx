'use client'
import { useMemo, useState } from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Th from "./Th";
import TrendTd from "./TrendTd";
import RepoTd from "./RepoTd";
import Row from "./Row";
import projects from "./projects.json";

export default function Table() {
  const [orderedProjects, setOrderedProjects] = useState(projects);
  const [orderRange, setOrderRange] = useState("w"); // w, m, y
  const [orderDesc, setOrderDesc] = useState(true); // desc; asc
  const [orderProperty, setOrderProperty] = useState("stars"); // stars, issues, commits, twitter, discord
  const [hoverLine, setHoverLine] = useState(null);

  const orderByTrends = (property) => {
    const newProjects = [...orderedProjects].sort(
      (a, b) =>
        b[property][orderRange].reduce((a, b) => a + b, 0) -
        a[property][orderRange].reduce((a, b) => a + b, 0)
    );
    if (property === orderProperty) {
      if (orderDesc) {
        setOrderedProjects([...newProjects].reverse());
        setOrderDesc(false);
      } else {
        setOrderedProjects(newProjects);
        setOrderDesc(true);
      }
    } else {
      setOrderedProjects(newProjects);
      setOrderDesc(true);
    }
    setOrderProperty(property);
  };

  const orderByName = () => {
    const newProjects = [...orderedProjects].sort((a, b) => {
      if (a.repo.toLocaleLowerCase() < b.repo.toLocaleLowerCase()) return -1;
      if (a.repo.toLocaleLowerCase() > b.repo.toLocaleLowerCase()) return 1;
      return 0;
    });
    if (orderDesc) {
      setOrderedProjects(newProjects);
      setOrderDesc(false);
    } else {
      setOrderedProjects([...newProjects].reverse());
      setOrderDesc(true);
    }
  };

  const orderByCreatedAt = () => {
    const newProjects = [...orderedProjects].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    if (orderDesc) {
      setOrderedProjects(newProjects);
      setOrderDesc(false);
    } else {
      setOrderedProjects([...newProjects].reverse());
      setOrderDesc(true);
    }
  };

  const orderByFunding = () => {
    const newProjects = [...orderedProjects].sort((a, b) => {
      return Number(b.fundingAmount) - Number(a.fundingAmount);
    });
    if (orderDesc) {
      setOrderedProjects(newProjects);
      setOrderDesc(false);
    } else {
      setOrderedProjects([...newProjects].reverse());
      setOrderDesc(true);
    }
  };
  return (
    <div className=" w-full flex flex-col lg:items-center">
      <div className="flex w-full max-w-5xl justify-end items-center font-medium ">
        {/* <span>Category:</span>
        <select className="select select-bordered select-sm max-w-xs m-2 rounded">
          <option>Any</option>
          <option>AppDev</option>
          <option>Database</option>
        </select>
        &nbsp; */}
        <span>Date range:</span>
        <select
          className="select select-bordered select-sm max-w-xs m-2 rounded"
          value={orderRange}
          onChange={(e) => setOrderRange(e.target.value)}
        >
          <option value="w">Last week</option>
          <option value="m">Last month</option>
          <option value="y">Last year</option>
        </select>
      </div>
      <div className=" w-full max-w-5xl">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="">
              <tr>
                <th className="text-center">#</th>
                <Th name={"Repo"} justifyStart onClick={() => orderByName()} />
                <Th name={"Stars"} onClick={() => orderByTrends("stars")} />
                <Th name={"Issues"} onClick={() => orderByTrends("issues")} />
                <Th name={"Commits"} onClick={() => orderByTrends("commits")} />
                <Th name={"Twitter"} />
                <Th name={"Discord"} />
                <Th name={"CreatedAt"} onClick={() => orderByCreatedAt()} />
                <Th name={"Funding raised"} onClick={() => orderByFunding()} />
                <Th name={"Last Round"} onClick={() => orderByFunding()} />
              </tr>
            </thead>
            <tbody className="releative">
              {orderedProjects.map((project, index) => {
                const {
                  repo,
                  description,
                  img,
                  stars,
                  commits,
                  issues,
                  twitter,
                  discord,
                  createdAt,
                  fundingAmount,
                } = project;
                return (
                  <tr
                    key={repo}
                    className="hover:cursor-pointer border-0 hover"
                    onMouseEnter={() => setHoverLine(index)}
                    onMouseLeave={() => setHoverLine(null)}
                  >
                    <th className="text-slate-800 font-normal text-sm px-1 border-0 ">
                      <div className="w-8 h-8 flex justify-center items-center mx-2">
                        <Image
                          src={
                            img ||
                            "https://avatars.githubusercontent.com/u/67109815?s=200&v=4"
                          }
                          alt={repo}
                          width="100"
                          height="100"
                          className="rounded"
                        />
                        <div
                          className={`absolute backdrop-blur-sm bg-gray-100/70 w-8 h-8 justify-center items-center ${
                            hoverLine === index ? "flex" : "hidden"
                          }`}
                        >
                          {index}
                        </div>
                      </div>
                    </th>
                    <RepoTd
                      repo={repo}
                      imgSrc={img}
                      description={description}
                      hover={hoverLine === index}
                    />
                    <TrendTd data={stars[orderRange]} />
                    <TrendTd data={issues[orderRange]} />
                    <TrendTd data={commits[orderRange]} />
                    <TrendTd data={twitter[orderRange]} />
                    <TrendTd data={discord[orderRange]} />
                    <td className=" border-0">
                      <span>{createdAt.slice(0, 7)}</span>
                    </td>
                    <td className=" border-0">
                      <span>{fundingAmount ? `${fundingAmount}M` : " "}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
