"use client"

import Header from "../components/Header/Header";
import Image from "next/image";
import Footer from "../components/Footer/Footer";

import edsvectorleft from "../../../public/edsvectorleft.png";
import shirtgradienteffect from "../../../public/shirtgradienteffect.png";
import gradienteffectleft from "../../../public/gradienteffectleft.png";
import edsvectorright from "../../../public/edsvectorright.png";
import VoteFormComponent from "../components/VoteFormComponent/VoteFormComponent";
import VotePromoComponent from "../components/VotePromoComponent/VotePromoComponent";
import { useAppContext } from "../context/AppContext";
import SuccessVoteComponent from "../components/SuccessVoteComponent/SucessVoteComponent";

export default function Vote() {

  const { confirmedVote } = useAppContext();

  return (
    <div className="bg-[#1F3694] bg-center bg-cover min-h-screen w-screen bg-no-repeat flex flex-col justify-between overflow-x-hidden relative">
      <Header />
      <Image
        src={edsvectorleft}
        alt="shirtgradienteffect"
        className="absolute top-0 left-0"
      />
      <Image
        src={shirtgradienteffect}
        alt="shirtgradienteffect"
        className="absolute top-0 right-0 overflow-hidden h-screen w-screen object-cover"
      />
      <Image
        src={gradienteffectleft}
        alt="shirtgradienteffect"
        className="absolute left-0 bottom-0 overflow-hidden object-cover"
      />
      <Image
        src={edsvectorright}
        alt="shirtgradienteffect"
        className="absolute right-0 bottom-0"
      />
      <div className="flex items-center justify-evenly space-x-6">
        {confirmedVote ? (
          <SuccessVoteComponent />
        ) : (
          <VotePromoComponent />
        )}
        <VoteFormComponent />
      </div>
      <Footer />
    </div>
  );
}
