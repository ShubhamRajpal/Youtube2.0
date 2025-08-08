import Button from "./Button";
import { btnList } from "../utils/helper";


const ButtonList = () => {

  return (
    <div className="flex gap-3 px-2 py-4">
      {btnList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
