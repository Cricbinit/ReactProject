// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Image1 from "./fishes-7314666_1280.jpg"
//  function CustomCard({title, imageUrl}) {
//   return (
//     <Card sx={{ maxWidth: 400 }}>
//       <CardMedia
//         sx={{ height: 200 }}
//         image={imageUrl}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         The goldfish is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is commonly kept as a pet in indoor aquariums, and is one of the most popular aquarium fish.
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button variant="contained" color='primary' >Share</Button>
//         <Button size="small" variant="outlined" color='error'>Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
// export default CustomCard;


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import VIDEO1 from "./108366-680178196_small.mp4"
import "./Global.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 400 }} className='card'>
      <CardMedia
      className='videocard'
        component="video"
        image={VIDEO1}
        border="none"
        alt="green iguana"
        height="200"
        autoPlay
        loop
        muted
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Red Gold Fish
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large"><CurrencyRupeeIcon/>2000</Button>
        <Button onClick={()=>navigate("/singlePage")}>BuyNow</Button>
      </CardActions>
    </Card>
  );
}