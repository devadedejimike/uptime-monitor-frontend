"use client";

import { useEffect, useState } from "react";
import { Globe, Plus, RefreshCcw } from "lucide-react";
import Modal from "@/app/components/modal";
import { api } from "@/app/lib/api";
import WebsiteCard from "../components/websiteCard";

type Website = {
  id: number;
  name: string;
  url: string;

  status?: "UP" | "DOWN";
  responseTime?: number;
  uptime?: number;
  lastCheck?: string;
};

export default function DashbordPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);

  const hasWebsites = websites.length > 0;

  const handleAddWebsite = (newWebsite: Website) => {
    setWebsites((prev) => [...prev, newWebsite]);
  };

  const deleteWebsite = async (id: number) => {
    if(!confirm("Are you sure you want to delete this website?"))return;
    try {
      await api.delete(`/website/${id}`);
      setWebsites((prev) => prev.filter(site => site.id !== id))
      
    } catch (error) {
      alert("Delete Failed")
    }
  }

  const fetchWebsites = async () => {
    try {
      setLoading(true);

      const data = await api.get("/website/");

      const websitesWithStats = await Promise.all(
        data.map(async (site: Website) => {
          try {
            const res = await api.get(`/website/${site.id}/stats`);

            return {
              ...site,
              status: res.stat?.lastCheck?.status || "DOWN",
              responseTime: res.stat?.avgResponseTime || 0,
              uptime: Number(res.stat?.upTimePercentage) || 0,
              lastCheck: res.stat?.lastCheck?.checked_at || null,
            };
          } catch (error) {
            return {
              ...site,
              status: "DOWN",
            };
          }
        })
      );

      setWebsites(websitesWithStats);
      } catch (error) {
        console.log("Error fetching websites");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchWebsites()
    }, [])

    

  return (
    <div className="w-full px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Websites</h2>
          <p className="text-sm text-brand-text-muted">{websites.length > 1 ? `${websites.length} websites is being monitored` : `${websites.length} website is being monitored`}</p>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-5">
          <button
            onClick={fetchWebsites}
            disabled={loading}
            className="hover:bg-brand-text-muted/30 p-2 rounded-lg transition disabled:opacity-50"
          >
            <RefreshCcw size={20} className={loading ? "animate-spin" : ""}/>
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg"
          >
            <Plus size={16} />
            Add Website
          </button>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="bg-white p-6 rounded-xl border text-center">
          <p>Loading websites...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !hasWebsites && (
        <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl border">

          <Globe size={40} className="text-gray-400 mb-4" />

          <h3 className="text-xl font-semibold">
            No websites yet
          </h3>

          <p className="text-gray-500 mt-2">
            Start monitoring your first website in seconds.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2 rounded-lg mt-6"
          >
            <Plus size={16} />
            Add Website
          </button>
        </div>
      )}

      {/* Websites List */}
      {!loading && hasWebsites && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site) => (
            <WebsiteCard key={site.id} site={site} onDelete={deleteWebsite}/>
          ))}
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <Modal
          AddWebsite={handleAddWebsite}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}