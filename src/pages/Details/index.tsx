import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../shared/data/products.json";
const Details = () => {
  const { slug } = useParams();
  const [details, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  return <div>
    
    <h2>{details.name}</h2>
    {details.description}
  </div>;
};

export default Details;
