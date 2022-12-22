const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>photo</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.photo}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;