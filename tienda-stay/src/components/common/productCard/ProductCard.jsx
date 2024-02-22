import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../counter/Counter.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title, description, price }) => {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia sx={{ height: 350, width: 420 }} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {description} */}
        </Typography>
        <Typography variant="h6" className="price">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`}>
          <Button className="buttonDetails" size="small">
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
