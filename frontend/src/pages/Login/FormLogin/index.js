import React, { useState } from "react";
import api from '../../../services/api';
import Button from "../ButtonLogin";
import FormLogin from "../../../utils/Form"

export default function Form({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubimit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }
  return (
    <FormLogin onSubmit={handleSubimit}>
      <label htmlFor="email">E-MAIL *</label>
      <input
        type="email"
        id='email'
        placeholder='Seu melhor e-mail'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <Button />
    </FormLogin>
  )
}