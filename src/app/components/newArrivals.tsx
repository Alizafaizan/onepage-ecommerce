import Image from "next/image";


const products = [
    {
      id: 1,
      name: "ARRIVAL 1",
      price: 29.99,
      image: "/L.png",
    },
    {
      id: 2,
      name: "ARRIVAL 2",
      price: 49.99,
      image: "/11.png",
    },
    {
      id: 3,
      name: "ARRIVAL 3",
      price: 19.99,
      image: "/9.png",
    },
    {
      id: 4,
      name: "ARRIVAL 4",
      price: 29.99,
      image: "/8.png",
    },
    {
      id: 5,
      name: "ARRIVAL 5",
      price: 49.99,
      image: "/4.png",
    },
    {
      id: 6,
      name: "ARRIVAL 6",
      price: 19.99,
      image: "/7.png",
    },
  ];

export default function NewArrivals(){
    return(
        <div className="bg-gray-700 min-h-screen py-10">
      

      <main className="container mx-auto mt-4">
        <h2 className="text-4xl font-semibold mb-6 text-center text-white ">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-lg">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
              <button className="mt-4 bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
      
    </div>
    )
}