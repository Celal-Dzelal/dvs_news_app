import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const News = () => {
  return (
    <>
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        <Card sx={{ maxWidth: 345, height: 450, m: 5 }}>
          <CardMedia sx={{ height: 140 }} image={{}} title="haber" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {{}}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {{}}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Clear</Button>
            <Button href={{}} size="small" target="_blank">
              Detail
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default News;
