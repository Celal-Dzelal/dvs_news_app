import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createUser } from "../features/yetkiSlice";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ email, password }));
    navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src={avatar}
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#F2784B" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="">
          DVS
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
