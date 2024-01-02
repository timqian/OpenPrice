import { SelectorIcon } from "@heroicons/react/16/solid";

export default function Th({ name, justifyStart, onClick }) {
  return (
    <th onClick={onClick}>
      <label>
        <div className={`cursor-pointer flex flex-nowrap items-center text-right ${!justifyStart && 'justify-end'}`}>
          <span className="normal-case">{name}</span>
          {/* <SelectorIcon className="h-4 w-4 text-gray-600 inline" /> */}
        </div>
      </label>
    </th>
  );
}
