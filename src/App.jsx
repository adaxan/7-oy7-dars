import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const priceRef = useRef();
  const memoryRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPhone = {
      id: Date.now(),
      name: nameRef.current.value,
      price: priceRef.current.value,
      memory: memoryRef.current.value,
    };

    dispatch({ type: "ADD_CART", payload: newPhone });

    nameRef.current.value = "";
    priceRef.current.value = "";
    memoryRef.current.value = "";
  };

  function handleRemove(id) {
    dispatch({type: "REMOVE_CART", payload: id})
  }

  function handleClear(event) {
    event.preventDefault()

    dispatch({type: "CLEAR_CART"})
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <nav className="flex justify-around items-center p-4 bg-white shadow-md w-full">
        <div className="text-2xl font-bold text-blue-600">Home</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Free Trial</button>
      </nav>
      
      <section className="text-center py-4">
        <h2 className="text-gray-400 font-semibold">Contact Us</h2>
        <h1 className="text-4xl font-bold">
          Say <span className="text-blue-600">Hello!</span> We’re always here to help.
        </h1>
        <p className="text-gray-500 mt-4">
          Interested in learning more about SmartMoving? Give us a call or send an email and one of our team members will be happy to assist you.
        </p>
      </section>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Telefon Qo'shish</h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="name">Telefon Nomi</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            placeholder="Telefon nomini kiriting"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="price">Telefon Narxi</label>
          <input
            type="number"
            id="price"
            ref={priceRef}
            placeholder="Telefon narxini kiriting"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="memory">Telefon Xotirasi (GB)</label>
          <input
            type="number"
            id="memory"
            ref={memoryRef}
            placeholder="Telefon xotirasini kiriting"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Qo'shish
        </button>
        <button
          onClick={handleClear}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold mt-2"
        >
          Tozalash
        </button>
      </form>
      <div className="wrapper mt-6 grid grid-cols-1 gap-4 w-full max-w-lg">
        {cart.length > 0 && cart.map((value) => (
          <div key={value.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">{value.name}</h3>
            <p className="text-gray-600">Narxi: {value.price}$</p>
            <p className="text-gray-600">Xotira: {value.memory} GB</p>
            <button className="bg-red-600 rounded-md p-1 mt-1 text-white cursor-pointer" onClick={() => {handleRemove(value.id)}}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
