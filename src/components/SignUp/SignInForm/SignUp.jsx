import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./signUp.css";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import db from "../../../services/firebase";
import swal from "sweetalert";

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  const promiseMock = new Promise((resolve) => {
    setTimeout(() => {
      resolve("https://picsum.photos/900");
    }, 1500);
  });

  useEffect(() => {
    promiseMock
      .then((res) => {
        setImage(res);
      })
      .catch((error) => {
        console.log("error=>", error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const sendData = async (e) => {
    let newUser;
    newUser = {
      name: e.firstName,
      lastName: e.lastName,
      fullName: `${e.firstName} ${e.lastName}`,
      age: e.age,
      mail: e.mail,
      phoneNumber: e.phone,
      user: e.user,
      password: e.password,
      count: Math.floor(Math.random() * 9000000000) + 1000000000,
      date: Timestamp.fromDate(new Date()),
    };

    const userCollection = collection(db, "users");
    try {
      const newDoc = await addDoc(userCollection, newUser);
      swal("Ha sido creador el usuario para:", `${newUser.fullName}`, "success");
    } catch (error) {
      console.log("error=>", error);
    }
  };

  return (
    <>
      <SiWebmoney className="formLogo" />

      <div className="flex_display">
        <form className="flex_form" onSubmit={handleSubmit(sendData)}>
          <p>Nombre</p>
          <input
            className="form_item"
            type="text"
            {...register("firstName", {
              required: true,
              pattern: { value: /[A-Za-z]/, message: "Solo puedes ingresar letras" },
              minLength: { value: 4, message: "Debe ser mayor de cuatro caracteres" },
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="firstName" />
          </div>
          <p>Apellido</p>
          <input
            className="form_item"
            type="text"
            {...register("lastName", {
              required: true,
              pattern: { value: /[A-Za-z]/, message: "Solo puedes ingresar letras" },
              minLength: { value: 4, message: "Debe ser mayor de cuatro caracteres" },
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="lastName" />
          </div>
          <p>Edad</p>
          <input
            className="form_item"
            type="text"
            {...register("age", {
              required: true,
              pattern: { value: /[0-9]/, message: "Solo puedes ingresar Numeros" },
              valueAsNumber: true,
              min: { value: 18, message: "Debes ser mayor de 18 años" },
              max: 99,
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="age" />
          </div>
          <p>Mail</p>
          <input
            className="form_item"
            type="text"
            {...register("mail", {
              require: true,
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Mail incorrecto",
              },
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="mail" />
          </div>
          <p>Numero de telefono</p>
          <input
            className="form_item"
            type="text"
            {...register("phone", {
              required: true,
              pattern: { value: /[0-9]/, message: "Solo puedes ingresar Numeros" },
              minLength: { value: 8, message: "No puede ser menor a 8 digitos" },
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="phone" />
          </div>

          <p>Usuario</p>
          <input
            className="form_item"
            type="text"
            {...register("user", {
              required: true,
              pattern: { value: /[0-9A-Za-z]/, message: "No puedes ingresar caracteres especiales" },
              minLength: { value: 5, message: "No puede ser menor a 5 digitos" },
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="user" />
          </div>

          <p>Contraseña</p>
          <input
            className="form_item"
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value: /[A-Za-z0-9@#$%&*+]/,
                message: "Debe contener al menos un caracter especial",
              },
              minLength: { value: 7, message: "No puede ser menor a 8 digitos" },
            })}
          />
          <div className="errorMsg">
            <ErrorMessage errors={errors} name="password" />
          </div>
          <div>
            <button className="form-ingreso-boton" type="submit">
              Aceptar
            </button>
            <Link to="/">
              <button className="form-ingreso-boton">Cancelar</button>
            </Link>
          </div>
        </form>
        <div>{loading ? <div className="spinner-grow text-danger loadingPosition" role="status"></div> : <img className="formImg" src={image} alt="ERROR" />}</div>
      </div>
    </>
  );
}

export default SignUp;
