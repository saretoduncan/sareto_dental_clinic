import { AiOutlineLoading3Quarters } from "react-icons/ai";
type props = {
  classes?: string;
};
const Loading: React.FC<props> = ({ classes }) => {
  return (
    <div>
      <AiOutlineLoading3Quarters className={`text-orange-500 text-3xl animate-spin  ${classes}`} />
    </div>
  );
};

export default Loading;
