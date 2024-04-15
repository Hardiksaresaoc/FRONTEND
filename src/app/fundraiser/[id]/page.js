import Header from "@/component/header";

export default function page({ params }) {
  const fundraiserID = params.id;
  const [fundraiser, setFundraiser] = useState();
  const fundraiserData = () => {
    try {
    } catch (error) {}
  };

  return <>{fundraiserID}</>;
}
