"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="mx-100 my-20 p-20 bg-[#303030] ">
      <img src={data.image} alt={data.title} className="w-full h-203 w-full object-cover rounded-lg mb-4" />
     <div className="flex items-end justify-between">
        <div className="">
                 <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p>{data.description}</p>
      <p><strong>Artist:</strong> {data.artist.name}</p>
      <p><strong>Category:</strong> {data.category}</p>
      <p><strong>Likes:</strong> {data.likes}</p>  
        </div>
      <Link className="btn btn-primary " href='/blogs'>Go Back</Link>
     </div>
  
    </div>
  );
}
