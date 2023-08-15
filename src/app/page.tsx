'use client';

import { useAppDispatch, useAppSelector } from "@/redux/store"
import { addTitle, addBody } from "@/redux/features/postSlice"

import Hero from "./components/Hero"
import Services from "./components/Services"
import InformationBar from "./components/InformationBar";
import MakeAppointmentBtn from "./components/MakeAppointmentBtn";
import Brands from "./components/Brands";
import Banner from "./components/Banner";
import Experts from "./components/Experts";

export default function Home() {
  // const dispatch = useAppDispatch()
  // const post = useAppSelector((state) => state.post)

  return (
    <>
      <Hero />
      <MakeAppointmentBtn />
      <InformationBar />
      <Services />
      <Experts />
      <Banner />
      <Brands />

    </>

    // <div>
    //   <div className="flex flex-col mb-4">
    //     <div className="flex flex-col">
    //       <label htmlFor="title">Title</label>
    //       <input id='title' type="text" onChange={(e) => dispatch(addTitle(e.target.value))} />
    //     </div>
    //     <div className="flex flex-col">
    //       <label htmlFor="body">Body</label>
    //       <input id='body' type="text" onChange={(e) => dispatch(addBody(e.target.value))} />
    //     </div>
    //   </div>
    //   <p className="text-xl">{post.title}</p>
    //   <p className="text-xl">{post.body}</p>

    // </div>

  )
}


