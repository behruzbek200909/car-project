import React from 'react'
import { Header } from '../../components/header'
import { Galaxy } from '../../components/galaxy'
import { Cars } from "../../pages/cars"
import { Carinfo } from '../carinfo'


export const Home = () => {
  return (
    <>
      <Header />
      <Galaxy />
      <Cars />
      <Carinfo />
    </>
  );
}
