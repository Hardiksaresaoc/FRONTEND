"use client";
import { useState } from "react";

export default function page({ params }) {
  const fundraiserID = params.id;
  const [fundraiser, setFundraiser] = useState();
  const fundraiserData = () => {
    try {
    } catch (error) {}
  };

  return <>{fundraiserID}</>;
}
