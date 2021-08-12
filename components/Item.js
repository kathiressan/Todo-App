import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";

export const Item = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const changeChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  return (
    <div className="border border-gray-600 m-2 p-2 rounded-xl flex justify-between shadow-lg">
      <div className="border-r border-gray-600 p-3">
        <div
          onClick={changeChecked}
          className={`w-6 h-6 cursor-pointer hover:opacity-80 ${
            isChecked ? "bg-green-400" : "bg-white"
          }`}
        >
          <CheckIcon className="h-6 text-white p-1" />
        </div>
      </div>
      <div
        className={`p-3 text-white ${isChecked ? "line-through" : false}`}
        style={{ textDecorationColor: "black" }}
      >
        {item}
      </div>
      <div className="border-l border-gray-600 p-3 flex space-x-3">
        <div className="bg-yellow-400 w-6 h-6 cursor-pointer hover:opacity-80">
          <PencilIcon className="h-6 text-white p-1" />
        </div>
        <div className="bg-red-500 w-6 h-6 cursor-pointer hover:opacity-80">
          <TrashIcon className="h-6 text-white p-1" />
        </div>
      </div>
    </div>
  );
};
