import { IconType } from "react-icons";

type TFooterComponent = {
  iconProp: IconType;
  name: string;
  
};
const Footer_contact_component: React.FC<TFooterComponent> = ({
  iconProp: Icon,
  name,
}) => {
  return (
    <li className="flex space-x-1 text-sm font-bold lg:text-base">
      <Icon className="text-orange-500 self-center text-base" />
      <p>{name}</p>
    </li>
  );
};

export default Footer_contact_component;
