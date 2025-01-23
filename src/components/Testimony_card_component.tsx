import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const Testimony_card_component = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [lineCount, setLineCount] = useState(0);
  useEffect(() => {
    if (paragraphRef.current) {
      const paragraphHeight = paragraphRef.current.clientHeight;
      const lineHeight = parseFloat(
        getComputedStyle(paragraphRef.current).lineHeight
      );
      const totalLines = Math.floor(paragraphHeight / lineHeight);
      setLineCount(totalLines);
      console.log(totalLines);
    }
  }, []);
  return (
    <>
      <div>
        <div className="grid gap-2 rounded shadow-gray-300 bg-white p-4 text-sm">
          <div className="flex space-x-2">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjVScKJ85Ib8Q4ZrOTxoVmk0HC-FD1QG-9NnD1iU1xsxBaWMEjE_Ow=s128-c0x00000000-cc-rp-mo"
              alt=""
              className="w-16"
            />
            <div className="self-center">
              <p className="">Bishop Githuku</p>
              <p>4 days ago</p>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex space-x-1">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <FaStar className="text-orange-500" />
                  </div>
                ))}
            </div>
            <div className="">
              <p
                className="line-clamp-3"
                ref={paragraphRef}
              >{`Hi am well, happy, strong, confident, and my smile is back .... reason I'd because when I was recommended to Sareto Dental Clinic by a friend who went through some procedure.... I rested and my life of painful procedures from different dentists.\n1. No pains\n2. Healing process is amaizing\n3. Customer service is on another level\n4. Affordable charges\n5. Cleanliness\n6. Follow up is wonderful\n\nI recommend anyone who have given up on dentists out there`}</p>{" "} <span className="text-blue-800 underline">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony_card_component;
