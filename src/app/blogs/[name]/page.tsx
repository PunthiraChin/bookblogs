// TODO display dynamic blog page
// localhost/[title]

// 1. ดึง url มา => ถอดชื่อหนังสือออกมาจาก url
// 2. call api ไปหา url โดยที่โยนชื่อหนังสือเข้าไป
// 3. get result from API and store in state
// 4. Render content

"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [title, setTitle] = useState<string | null>("");
  const [author, setAuthor] = useState<string | null>("");
  const params = useParams();
  // call API
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/books?name=${params.name}`);
        const response = await res.json();
        console.log("response", response);
        setTitle(response["ISBN:0451526538"].title);
        setAuthor(response["ISBN:0451526538"].publish_date);
      } catch (error) {
        console.log("error fetching", error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <div>This is the details of the book</div>
      <div>Title:{title}</div>
      <div>Author:{author}</div>
    </div>
  );
}
