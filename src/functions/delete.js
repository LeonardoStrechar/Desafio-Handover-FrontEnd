import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { read_cookie } from "sfcookies";
import axios from "axios";

export default function Delete(){

    const navigate = useNavigate();
    
    const authorization = read_cookie("authorization");
    axios.delete(`http://localhost:3001/products/${variavel}`, {
        headers: {
            authorization: `Bearer ${authorization}` 
        }
    })
    .then(() => {
        alert("Item apagado com sucesso");
        navigate("/menu");
    }).catch(() => {
        alert("Não foi possivel apagar!");
    });
}