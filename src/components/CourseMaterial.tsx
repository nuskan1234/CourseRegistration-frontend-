import { Table } from "react-bootstrap";

export const CourseMaterial = () =>{

    const tblHeaders : string [] = [
        "Material ID",
        "File Name",
        "Material Name",
        "Material",
        "Upload Time",
        "Course ID",
        "Option",
    ];
    
    return(
        
    <Table striped bordered hover>
      <thead>
        <tr>
            {tblHeaders.map((headings,index)=>(
                   <th key={index}>{headings}</th>
            ))};
          {/* <th>Metireal ID</th>
          <th>Material Name</th>
          <th>Material</th>
          <th>Upload Time</th>
          <th>Course ID</th>
          <th>Option</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>

      </tbody>
    </Table>
      
    );
}