const Table = ({ data }) => {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Origin</th>
          </tr>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td><img alt= {item.first_name} src= {item.photo}/></td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.origin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;