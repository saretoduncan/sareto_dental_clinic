import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TReview } from "../types/apiTypes";

const Testimony_card_component: React.FC<TReview> = ({
  author_name,
  profile_photo_url,
  relative_time_description,
  text,
  rating,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const [isClamped, setIsClamped] = useState(false);
  const [isexpanded, setExpanded] = useState(false);

  const expandReview = () => setExpanded(!isexpanded);
  useEffect(() => {
    if (paragraphRef.current) {
      setIsClamped(
        paragraphRef.current.scrollHeight > paragraphRef.current.clientHeight
      );
    }
  }, [text]);
  return (
    <>
      <div>
        <div className="grid gap-2 rounded shadow-gray-300 bg-white p-4 text-sm m-2">
          <div className="flex space-x-2">
            <img src={profile_photo_url} alt="" className="w-16" />
            <div className="self-center">
              <p className="">{author_name}</p>
              <p>{relative_time_description}</p>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex space-x-1">
              {Array(rating)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <FaStar className="text-orange-500" />
                  </div>
                ))}
            </div>
            <div className="">
              <p
                className={isexpanded ? "" : "line-clamp-3"}
                ref={paragraphRef}
              >
                {text}
              </p>{" "}
              {isClamped ? (
                <span className="text-blue-800 underline" onClick={expandReview}>{isexpanded?'Read Less'
                  :'Read More'}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony_card_component;
