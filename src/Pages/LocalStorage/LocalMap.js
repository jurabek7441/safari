import { useContext } from "react";
import { DataContext } from "../../Components/Context";

export let LocalMap = () => {
  let { localData, deleteFunc, editFunc } = useContext(DataContext);
  return (
    <div className="localmap">
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
            <th>password</th>
            <th>img</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            localData.length > 0 ? (
              localData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.surname}</td>
                  <td>{item?.email}</td>
                  <td>{item?.password}</td>
                  <td>
                    <img src={item?.rasm} alt={item?.name} />
                  </td>
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
            ):(
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
