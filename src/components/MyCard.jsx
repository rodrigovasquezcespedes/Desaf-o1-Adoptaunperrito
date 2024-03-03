import Tags from "./Tags";
import Card from 'react-bootstrap/Card';


const MyCard = (props) => {
  return (

    <Card className="p-4" style={{ width: '17rem', height: '25rem' }}>
      <Card.Img   src={props.image} />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text className="text-center" style={{ height: '7rem' }}>
          {props.text}
        </Card.Text>
        <div className="card-body d-grid p-1">
        <Tags bg={props.bg} buttonText={props.buttonText} />
        </div>
      </Card.Body>
    </Card>

  );
}

export default MyCard