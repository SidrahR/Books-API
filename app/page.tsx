import Link from "next/link";
async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const books = await getData();
  return (
    <div className="max-w-screen-lg mx-auto text-center mt-5 mb-10">
      <h1 className="text-2xl md:text-4xl mx-5 ">Welcome to The Book Store</h1>
      <p className="md:text-xl my-5 mx-5">
        Explore our vast collection of books and find your next favorite read.
        Fiction and non-fiction books available!
      </p>
      <div className="mb-10 mx-5 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10">
        {books.map((book: any) => (
          <div key={book.id} className="border-4 p-5">
            <div className="font-semibold ">{book.name}</div>
            <div className="capitalize">Type: {book.type} </div>
            <div>Available: {book.available ? "Yes" : "No"} </div>
          </div>
        ))}
      </div>

      <Link
        href="/orders"
        className="relative rounded-lg px-10 py-3 bg-slate-200"
      >
        View Orders
      </Link>
    </div>
  );
}
