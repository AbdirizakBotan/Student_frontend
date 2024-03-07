import { Link } from "react-router-dom"
function StudentData(props){



return <tbody className="text-center  border-orange-500">
<tr className="">
    <td  className="py-4">{props.ID}</td>
    <td  className="py-4">{props.name}</td>
    <td  className="py-4"  >{props.className}</td>
    <td  className="py-4">{props.sub1}</td>
    <td className="py-4" >{props.sub2}</td>
    <td  className="py-4">{props.sub3}</td>
    <td  className="py-4">{props.sub4}</td>
    <td  className="py-4">{props.date}</td>
    <td  className="py-4">
    <Link to={`/updateStudent/${props.id}`}><i  class="fa-solid mr-2  text-textColor fa-pen-to-square"></i></Link>
    <i onClick={props.handleDelete} class="fa-solid ml-2 text-textColor fa-trash"></i>
    </td>

    <td className="cursor-pointer" onClick={props.click} >
        <Link to={`/view/${props.ID}`}>View</Link>
    </td>
</tr>
</tbody>
}
export default StudentData