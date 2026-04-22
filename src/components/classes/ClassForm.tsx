"use client";

import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { createClass } from "@/lib/classes/service";

export function ClassForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const dateStr = formData.get("date") as string;
    const timeStr = formData.get("time") as string;
    const durationStr = formData.get("duration") as string;
    const meetingLink = formData.get("meetingLink") as string;
    const recordingLink = formData.get("recordingLink") as string;

    try {
      // Combine date and time to create a Date object
      const dateTimeStr = `${dateStr}T${timeStr}`;
      const dateObj = new Date(dateTimeStr);

      if (isNaN(dateObj.getTime())) {
        throw new Error("Fecha u hora inválida.");
      }

      await createClass({
        title,
        description,
        date: Timestamp.fromDate(dateObj),
        duration: parseInt(durationStr, 10),
        meetingLink,
        recordingLink: recordingLink || undefined,
      });

      setSuccess(true);
      e.currentTarget.reset(); // Clear the form
    } catch (err: any) {
      console.error("Error al crear clase:", err);
      setError(err.message || "Ocurrió un error al crear la clase.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Crear Nueva Clase</h2>
      
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      {success && <div className="text-green-500 text-sm mb-4">Clase creada exitosamente.</div>}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
        <input type="text" id="title" name="title" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea id="description" name="description" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
          <input type="date" id="date" name="date" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div className="flex-1">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
          <input type="time" id="time" name="time" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duración (minutos)</label>
        <input type="number" id="duration" name="duration" required min="1" defaultValue="60" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>

      <div>
        <label htmlFor="meetingLink" className="block text-sm font-medium text-gray-700">Enlace de la reunión (Zoom/Meet)</label>
        <input type="url" id="meetingLink" name="meetingLink" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>

      <div>
        <label htmlFor="recordingLink" className="block text-sm font-medium text-gray-700">Enlace de la grabación (Opcional)</label>
        <input type="url" id="recordingLink" name="recordingLink" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Creando..." : "Crear Clase"}
      </button>
    </form>
  );
}
