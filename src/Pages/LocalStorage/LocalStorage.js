import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Components/Context";

export let LocalStorage = () => {
  let { getInputData, inputData, sendData } = useContext(DataContext);
  let formLocal = useNavigate();
  return (
    <>
      <div className="localPage">
        <button onClick={()=> formLocal("/localMap")}> local table</button>
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onInput={getInputData}
            value={inputData?.name}
          />
          <input
            type="text"
            placeholder="surname"
            name="surname"
            onInput={getInputData}
            value={inputData?.surname}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onInput={getInputData}
            value={inputData?.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onInput={getInputData}
            value={inputData?.password}
          />
          <input
            type="text"
            placeholder="image URL"
            name="rasm"
            onInput={getInputData}
            value={inputData?.rasm}
          />

          <button type="button" onClick={sendData}>
            yuborish
          </button>
        </form>
      </div>
    </>
  );
};
