import { useState } from "react";

type UseModalOpen = [
  (arg: any) => void,
  { data: any; isLoading: boolean; error: any; open: boolean }
];

const useModalOpen = (): UseModalOpen => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return [setOpen, { data, isLoading, error, open }];
};

export { useModalOpen };
