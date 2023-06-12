import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData.users[0].firstName);
        setData(actualData.users);
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleRemove(id) {
    const newList = data.filter((item) => item.id !== id);
    console.log("Deleted");
    // console.log(newList)

    setData(newList);
  }

  return (
    <div className="container">
      <div className="menu">
        <ul>
          <h3>ABL Dashboard</h3>

          <li>
            <a href="#">Customer</a>
          </li>
          <li>
            <a href="#">Vendors</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Setting</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
        </ul>
      </div>

      <div className="datacontainer">
        {/* <h3>ABL Dashboard</h3> */}
        <tbody>
          <tr class="theading">
            <th>Id</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Designation</th>
            <th>Account Number</th>
            <th>Action</th>
          </tr>
          {data.map((item, index) => (
            <tr key={item.id} class="titem">
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="" height={30} />
              </td>
              <td>
                {item.firstName} {item.lastName}
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address.city}</td>
              <td>{item.company.title}</td>
              <td>{item.bank.cardNumber}</td>
              <button
                class="deletebtn"
                type="button"
                onClick={() => handleRemove(item.id)}
              >
                Delete
              </button>

              <td>
                <img src={item.thumbnail} alt="" height={100} />
              </td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}

export default App;
