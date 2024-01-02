import Trend from "react-trend";

export default function TrendTd({ data }) {
  const history = data.reduce((pre, cur) => {
    pre.length <= 0 ? pre.push(cur) : pre.push(pre[pre.length - 1] + cur);
    return pre;
  }, []);
  return (
    <td className="border-0 ">
      <div className="w-20">
        <Trend
          smooth
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-out"
          data={!data || data.length <= 0 ? [0, 0] : history}
          gradient={["#b5e6c5", "#7acb94", "#25903C"]}
          radius={0}
          strokeWidth={7}
          strokeLinecap={"square"}
        />
        <span className="text-slate-500 text-sm float-right">
          +{data.reduce((pre, cur) => pre + cur, 0)}
        </span>
      </div>
    </td>
  );
}
