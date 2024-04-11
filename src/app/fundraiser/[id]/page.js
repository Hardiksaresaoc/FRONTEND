import Header from "@/component/header";

export default function page({ params }) {
  const fundraiserID = params.id;
  console.log(fundraiserID);
  
  return <>{fundraiserID}</>;
}
