import './App.css';
import React/*, { useEffect, useState }*/ from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Badge, Stack, Button} from "react-bootstrap";

import { User } from "./components/User";
import { Photo } from "./components/Photo";

export default function App() {
  return (
    <React.StrictMode>
      <Stack direction="horizontal" gap={2}>
        <Button varian="primary">Hej</Button>
        <Button varian="success">Jej</Button>
      </Stack>
      <Badge bg="secondary">Users</Badge>
      <User/>
      <Badge bg="secondary">Photos</Badge>
      <Photo/>
    </React.StrictMode>
  );
}