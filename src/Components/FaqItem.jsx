import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faqData } from "../data";

const FaqItem = () => {
  const [isOpenList, setIsOpenList] = useState([false, false, false]); // State for each FAQ item

  // Toggle function to handle opening and closing of each FAQ item
  const toggleItem = (index) => {
    const newIsOpenList = [...isOpenList];
    newIsOpenList[index] = !newIsOpenList[index];
    setIsOpenList(newIsOpenList);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((faq, index) => (
        <div key={index} className="border border-primary p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <h2 className="text-[#383838] lg:text-[20px] text-[14px]">
              {faq.question}
            </h2>
            <div className="cursor-pointer" onClick={() => toggleItem(index)}>
              {isOpenList[index] ? (
                <FaAngleUp className="w-6 h-6" />
              ) : (
                <FaAngleDown className="w-6 h-6" />
              )}
            </div>
          </div>
          <div
            className={`lg:text-[16px] text-[12px] font-normal text-[#7E848C] mt-2 ${
              isOpenList[index] ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
