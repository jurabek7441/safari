



import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Components/Context";

export let AdminClothes = () => {
    let { getFileData, getInputData, inputData, sendData } = useContext(DataContext);
    let formLocal = useNavigate();
    return (
        <>
            <div className="localPage">
                <button onClick={() => formLocal("/localMap")}> local table</button>
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
                        placeholder="Price"
                        name="price"
                        onInput={getInputData}
                        value={inputData?.price}
                    />
                    <input
                        type="text"
                        placeholder="category"
                        name="category"
                        onInput={getInputData}
                        value={inputData?.category}
                    />
                    <input
                        type="text"
                        placeholder="color"
                        name="color"
                        onInput={getInputData}
                        value={inputData?.color}
                    />
                    <input
                        type="file"
                        placeholder="image"
                        name="rasm"
                        onInput={getFileData}
                        value={inputData?.rasm}
                    />
                    <div>
                        <label htmlFor="count">count</label>
                        <input
                            id="count"
                            type="text"
                            placeholder="count"
                            name="count"
                            onInput={getInputData}
                            value={inputData?.count}
                        />
                    </div>
                    <div>
                        <label htmlFor="discount">discount</label>
                        <input
                            id="discount"
                            type="text"
                            placeholder="discount"
                            name="discount"
                            onInput={getInputData}
                            value={inputData?.discount}
                        />
                    </div>
                    <button type="button" onClick={sendData}>
                        yuborish
                    </button>
                </form>
            </div>
        </>
    );
};
