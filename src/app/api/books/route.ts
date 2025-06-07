// To do : all API endpoint to get the title and content of the blog

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // get query parameters
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  console.log("name inside API", name);
  const nameUrlMap: Record<string, string> = {
    a: "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data",
    b: "https://openlibrary.org/api/books?bibkeys=ISBN:9780140449136&format=json&jscmd=data",
  };
  try {
    if (!name) {
      return;
    }
    const response = await fetch(nameUrlMap[name]);
    if (!response.ok) {
      throw new Error("failed to request");
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("error from fetching", error);
  }
}
