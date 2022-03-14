import React from "react";
import Paragrafo from './Paragrafo';
import Form from "./FormLogin";

export default function Login({ history }) {

  return (
    <>
      <Paragrafo />
      <Form history={history} />
    </>
  )
}