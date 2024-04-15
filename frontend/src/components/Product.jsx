import { Card } from "react-bootstrap"

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href="">
        <Card.Img src={Product.image} variant="top"/>
      </a>
      <Card.Body>
        <a href="">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">
          $ {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product