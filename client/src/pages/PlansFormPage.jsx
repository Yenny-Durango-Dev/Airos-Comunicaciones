import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import banner from "../img/planes.png";

const PlansFormPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const planSeleccionado = searchParams.get("plan") || "";

    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        correo: "",
        direccion: "",
        foto: null,
        plan: planSeleccionado,
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

        const mensaje = `Hola, quiero solicitar el plan: *${form.plan}*. Mis datos son:
        - Nombre: ${form.nombre}
        - Teléfono: ${form.telefono}
        - Correo: ${form.correo}
        - Dirección: ${form.direccion}`;
        const numeroEmpresa = "573215385497"; // Tu número real
        const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    };

    return (
        <div className="max-w-3xl mx-auto pt-20">
            <form onSubmit={handleSubmit} className="space-y-4 m-10 p-10 pt-10 shadow-md w-full max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#00bfdc]">Completa el formulario para solicitar tu plan</h2>

                {form.plan && (
                    <p className="text-center text-lg font-semibold text-[#019db5]">
                        Estás solicitando: <span className="font-bold">{form.plan}</span>
                    </p>
                )}

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-3 w-full"
                />

                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-3 w-full"
                />

                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-3 w-full"
                />

                <textarea
                    name="direccion"
                    placeholder="Dirección y descripción de la casa"
                    value={form.direccion}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="border border-gray-300 rounded-md p-3 w-full"
                />

                <button
                    type="submit"
                    className="w-full bg-[#00ddff] hover:bg-[#98E7F4] text-black py-3 rounded-md font-semibold transition cursor-pointer"
                >
                    Enviar solicitud por WhatsApp
                </button>
            </form>
        </div>
    );
};

export default PlansFormPage;