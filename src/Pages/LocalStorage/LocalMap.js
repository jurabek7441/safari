import { useContext } from "react";
import { DataContext } from "../../Components/Context";

export let LocalMap = () => {
  let { localData, deleteFunc, editFunc } = useContext(DataContext);
  return (
    <div className="localMap">
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>color</th>
            <th>size</th>
            <th>photo</th>
            <th>count</th>
            <th>discount</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            localData.length > 0 ? (
              localData.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>{item?.category}</td>
                  <td>{item?.color}</td>
                  <td>{item?.size}</td>
                  <td>
                    <img src={item?.photo} alt={item?.name} />
                  </td>
                  <td>{item?.count}</td>
                  <td>{item?.discount}</td>

                  <td>
                    <button
                      onClick={() => editFunc(item)}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => deleteFunc(item.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10}>No data...</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};
