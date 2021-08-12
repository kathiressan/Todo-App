import Head from "next/head";
import { useEffect, useState } from "react";
import {
  PlusCircleIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { Item } from "../components/Item";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState([]);
  useEffect(async () => {
    const quotes = await fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .catch(console.log("An error"));
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const addItem = (e) => {
    e.preventDefault();
    setListItems([...listItems, input]);
    setInput("");
  };
  // const [isChecked, setIsChecked] = useState(false);
  // const changeChecked = () => {
  //   if (isChecked) {
  //     setIsChecked(false);
  //   } else {
  //     setIsChecked(true);
  //   }
  // };
  return (
    <div className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] mx-auto px-10 min-h-screen ">
      <Head>
        <title>Kathiressan Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1000px] mx-auto pt-36">
        <div className="rounded-xl p-10 border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.4)] shadow-md">
          <div className="text-black text-center mx-auto pb-14 max-w-[400px]">
            <h1 className="text-5xl pb-5">Kathi's Todo App</h1>
            <h2 className="text-2xl">{quote.text}</h2>
            <h3 className="text-2xl">- {quote.author} -</h3>
          </div>
          <div className="text-center">
            <form
              onSubmit={addItem}
              className="flex items-center justify-center"
            >
              <input
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border border-white rounded-md p-1 outline-none shadow-md placeholder-white text-white"
                type="text"
                placeholder="Todo Item"
                value={input}
              />
              <button onClick={addItem}>
                <PlusCircleIcon className="h-7 cursor-pointer text-white pl-4 hover:scale-105 active:scale-100 transition duration-200 ease-out" />
              </button>
            </form>
          </div>
          <div className="max-w-[500px] mx-auto">
            {listItems?.map((item) => (
              <Item item={item} />
            ))}
          </div>
          {/* <div className="max-w-[500px] mx-auto">
            {listItems?.map((item) => (
              <div className="border border-gray-600 m-2 p-2 rounded-xl flex justify-between">
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
                  className={`p-3 text-white ${
                    isChecked ? "line-through" : false
                  }`}
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
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
