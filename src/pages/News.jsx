import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews, getData } from "../features/haberSlice";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif";

const News = () => {
  const dispatch = useDispatch();

  const { loading, news } = useSelector((state) => state.haberSlice);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log(news);
  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="" height="800px" />
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
          gap="1rem"
          margin="1rem"
        >
          {news.map((article) => (
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: "5px 5px 5px #0D0D0D",
                cursor: "pointer",
                "&:hover": { boxShadow: "5px 5px 5px #F2884B" },
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={article.urlToImage}
                title="news image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // 2 satırdan sonra kırp
                    overflow: "hidden",
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // 2 satırdan sonra kırp
                    overflow: "hidden",
                  }}
                >
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    color: "#0D0D0D",
                    "&:hover": { color: "#F2884B", fontWeight: "bolder" },
                  }}
                  onClick={() => dispatch(deleteNews(article.title))}
                >
                  Clear
                </Button>
                <Button
                  size="small"
                  href={article.url}
                  target="_blank"
                  sx={{
                    color: "#0D0D0D",
                    "&:hover": { color: "#F2884B", fontWeight: "bolder" },
                  }}
                >
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
