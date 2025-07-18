import React, { useState } from "react";
import banner from "../img/planes.png";

const PlansFormPage = () => {
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        correo: "",
        direccion: "",
        foto: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer lo que necesites con los datos, como enviarlos a una API
        console.log("Formulario enviado:", form);
        alert("¡Formulario enviado! Te contactaremos pronto.");
    };

    return (
        <div className="w-full">
            {/* Hero con fondo de imagen */}
            <div
                className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="bg-[#98e8f47a] backdrop-blur-md p-8 rounded-md text-black shadow-lg">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        SOLICITA TU PLAN
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Llena el formulario para que podamos contactarte y ofrecerte la mejor experiencia posible.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 m-10 p-10 shadow-md w-full">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#00bfdc]">Solicita tu plan</h2>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200 w-full"
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200 w-full"
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200 w-full"
                />
                <textarea
                    name="direccion"
                    placeholder="Dirección y descripción de la casa"
                    value={form.direccion}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200 w-full"
                />
                <input
                    type="file"
                    name="foto"
                    accept="image/*"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200 w-full"
                />
                <button
                    type="submit"
                    className="w-full bg-[#00ddff] hover:bg-[#98E7F4] text-black py-3 rounded-md font-semibold transition cursor-pointer"
                >
                    Enviar solicitud
                </button>
            </form>
        </div>
    );
};

export default PlansFormPage;
