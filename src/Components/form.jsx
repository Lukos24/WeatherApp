import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../Store/citySlice";
import s from "../Styles/form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setCity(inputRef.current.value.trim().toUpperCase()));
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <input
        className={s.input}
        type="text"
        ref={inputRef}
        placeholder="Название населенного пункта"
      />
      <button className={s.button} type="submit">
        УЗНАТЬ
      </button>
    </form>
  );
};

export default Form;
