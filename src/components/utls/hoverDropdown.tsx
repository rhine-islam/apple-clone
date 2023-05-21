import { useState } from "react";

const HoverDropdown = ({ name, data }: any) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-2">
          <p className="text-white">Test</p>
          <p className="text-white">Test</p>
          <p className="text-white">Test</p>
        </div>
      </div>
    </div>
  );
};
export default HoverDropdown;
