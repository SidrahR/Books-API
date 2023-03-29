import Link from "next/link";

const token =
  "f6a8b71232c9f540ce5634a9d8a98caed4412afcb3bc57951f049ec98e3597d1";

async function getOrders() {
  const res = await fetch("https://simple-books-api.glitch.me/orders", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function postOrder() {
  const res = await fetch("https://simple-books-api.glitch.me/orders", {
    method: "POST",
    body: JSON.stringify({
      bookId: 7,
      customerName: "Zia",
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

const delete_orderId = "uQ7UnqNZPPd4Xk4jLAAQB";
async function deleteOrder() {
  await fetch(`https://simple-books-api.glitch.me/orders/${delete_orderId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

const update_orderId = "RrFRVLbvFwl1YmpLv8UtF";
async function updateOrder() {
  await fetch(`https://simple-books-api.glitch.me/orders/${update_orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      customerName: "Ahmed",
    }),
  });
}

export default async function Order() {
  const orders = await getOrders();
  // console.log(orders);
  // await postOrder();
  // await deleteOrder();
  // await updateOrder();
  return (
    <div className="max-w-screen-lg mx-auto text-center mt-5 mb-10">
      <h1 className="text-2xl md:text-4xl">Current Orders</h1>
      <div className="my-10 mx-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {orders.map((order: any) => (
          <ul key={order.id} className="border-4 p-5 space-y-2">
            <li>
              <span className="font-bold">Customer Name: </span>
              {order.customerName}
            </li>
            <li>
              <span className="font-bold">Book ID: </span>
              {order.bookId}
            </li>
            <li className="text-sm">
              <span className="text-base font-bold">Order ID: </span>
              {order.id}
            </li>
          </ul>
        ))}
      </div>
      <Link href="/" className="relative rounded-lg px-10 py-3 bg-slate-200">
        Back to Home
      </Link>
      {/* <button onClick={(e) => update()}>Update Order</button> */}
    </div>
  );
}
