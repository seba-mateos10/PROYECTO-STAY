import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia sx={{ height: 350 }} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6">{price}</Typography>
      </CardContent>
    </Card>
  );
};
