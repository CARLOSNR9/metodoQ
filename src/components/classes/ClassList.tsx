"use client";

import { useEffect, useState } from "react";
import { getClasses } from "@/lib/classes/service";
import { Class } from "@/lib/classes/types";

export function ClassList() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchClasses() {
      try {
        // Fetch classes ordered by date ascending (oldest first)
        // Pass false for descending (newest first)
        const data = await getClasses(true); 
        setClasses(data);
      } catch (err: any) {
        console.error("Error fetching classes:", err);
        setError("Error al cargar las clases.");
      } finally {
        setLoading(false);
      }
    }

    fetchClasses();
  }, []);

  if (loading) return <div className="p-4">Cargando clases...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  if (classes.length === 0) {
    return <div className="p-4 text-gray-500">No hay clases programadas.</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Clases Programadas</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => {
          // Convert Firestore Timestamp to JS Date
          const classDate = cls.date.toDate();
          
          return (
            <div key={cls.id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
              <h3 className="font-bold text-lg">{cls.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {classDate.toLocaleDateString()} a las {classDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">{cls.description}</p>
              
              <div className="text-sm mb-4">
                <span className="font-semibold">Duración:</span> {cls.duration} min
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                {cls.meetingLink && (
                  <a 
                    href={cls.meetingLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-center bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium py-2 px-4 rounded transition-colors"
                  >
                    Unirse a la reunión
                  </a>
                )}
                {cls.recordingLink && (
                  <a 
                    href={cls.recordingLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-center bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium py-2 px-4 rounded transition-colors"
                  >
                    Ver Grabación
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
