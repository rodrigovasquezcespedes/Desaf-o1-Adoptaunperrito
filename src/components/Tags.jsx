import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
  return (
    <div>
    <Badge className="w-100" bg={props.bg}>{props.buttonText}</Badge>
  </div>
  )
}
export default Tags