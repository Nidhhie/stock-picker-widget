import React from "react";
import {
  decrementCurrentPathIdx,
  incrementCurrentPathIdx,
  canMoveFwd,
  canMoveBack,
  getPrevRoute,
  getNextRoute
} from "./../utils/navigation";
import { useConfigContext } from "./../context/configContext";

const NavigationHandlers = () => {
  const { setSymbol } = useConfigContext();
  const { widgetId } = useConfigContext();

  const onPrev = () => {
    decrementCurrentPathIdx(widgetId);
    setSymbol(getPrevRoute(widgetId));
  };

  const onNext = () => {
    incrementCurrentPathIdx(widgetId);
    setSymbol(getNextRoute(widgetId));
  };

  const goToHome = () => {
    setSymbol("");
  };

  return (
    <div className="flex p-3">
      <button
        className={`font-bold mr-4 border border-solid border-gray-500 p-1 text-sm rounded-md w-24`}
        onClick={goToHome}
      >
        Home
      </button>
      <button
        disabled={!canMoveBack(widgetId)}
        className={`font-bold mr-4 border border-solid border-gray-500 p-1 text-sm rounded-md w-24 ${
          canMoveBack(widgetId) ? "opacity-100" : "opacity-40"
        }`}
        onClick={onPrev}
      >
        {"← "}
        Previous
      </button>
      <button
        className={`font-bold border border-solid border-gray-500 text-sm rounded-md w-24 ${
          canMoveFwd(widgetId) ? "opacity-100" : "opacity-40"
        }`}
        onClick={onNext}
        disabled={!canMoveFwd(widgetId)}
      >
        Next
        {" →"}
      </button>
    </div>
  );
};

export default NavigationHandlers;
