"use client";
import useAuth from "@/context/auth";

export default function page({ params }) {
  // it will take params from url ad id and return accodginly
  const { user } = useAuth("FUNDRAISER"); // Example allowed roles

  return <>{user ? <>{params.id}</> : <></>}</>;
}
