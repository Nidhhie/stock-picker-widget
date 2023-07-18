import React, { useEffect, useRef, useState } from "react";

const RefreshInput = ({ onRefreshCb }: { onRefreshCb: () => void }) => {
  const [refreshInterval, setRefreshInterval] = useState("");
  const intervalRef = useRef<any>();
  const onChangeRefreshInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRefreshInterval(e.target.value);
  };

  useEffect(() => {
    const interval = Number(refreshInterval) * 1000;
    if (interval) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        onRefreshCb();
      }, interval);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [onRefreshCb, refreshInterval]);

  return (
    <div className="flex items-center">
      <div> Refresh stock data in </div>
      <input
        className="w-16 text-xs  p-1 mx-2 border-2 border-solid border-blue-800"
        placeholder="e.g. 2"
        type="number"
        value={refreshInterval}
        onChange={onChangeRefreshInterval}
      />
      <div> seconds </div>
    </div>
  );
};

export default RefreshInput;
