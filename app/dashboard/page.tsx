"use client";

import { useState } from "react";
import { Globe, Plus } from "lucide-react";
import { api } from "../lib/api";

export default function DashboardPage() { 
  const [websites, setWebsites] = useState([]);
  
  const hasWebsites = websites.length > 0;

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      {/* Empty State */}
      {!hasWebsites && (
        <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl border">

          <Globe size={40} className="text-gray-400 mb-4"/>

          <h3 className="text-xl font-semibold">
            No websites yet
          </h3>

          <p className="text-gray-500 mt-2">
            Start monitoring your first website in seconds.
          </p>

          <button className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2 rounded-lg mt-6">
            <Plus size={16}/>
            Add Website
          </button>

        </div>
      )}

      {/* Websites List */}
      {hasWebsites && (
        <div>

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-xl font-semibold">
              Your Websites
            </h3>

            <button className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg">
              <Plus size={16}/>
              Add Website
            </button>

          </div>

          <div className="bg-white rounded-xl border p-6">

            <p>Websites will appear here.</p>

          </div>

        </div>
      )}

    </div>
  );
}