"use client";

import { useEffect, useState } from "react";
import { Globe, Plus } from "lucide-react";
import Modal from "@/app/components/modal";
import { api } from "@/app/lib/api";
import Badge from "@/app/components/badge";

type Website = {
  id: number;
  name: string;
  url: string;

  status?: "UP" | "DOWN";
  responseTime?: number;
  uptime?: number;
  lastCheck?: string;
};

export default function WebsitesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);

  const hasWebsites = websites.length > 0;

  const handleAddWebsite = (newWebsite: Website) => {
    setWebsites((prev) => [...prev, newWebsite]);
  };

  useEffect(() => {
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

    fetchWebsites();
  }, []);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Websites</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg"
        >
          <Plus size={16} />
          Add Website
        </button>
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
        <div className="bg-white rounded-xl border divide-y">

          {websites.map((site) => (
            <div
              key={site.id}
              className="p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              {/* Left */}
              <div>
                <h3 className="font-semibold text-lg">
                  {site.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {site.url}
                </p>
              </div>

              {/* Middle - Stats */}
              <div className="flex items-center gap-8 text-sm">

                <div>
                  <p className="text-gray-500">Uptime</p>
                  <p className="font-medium">
                    {site.uptime ? `${site.uptime}%` : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Response</p>
                  <p className="font-medium">
                    {site.responseTime
                      ? `${Math.round(site.responseTime)} ms`
                      : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Last Check</p>
                  <p className="font-medium">
                    {site.lastCheck
                      ? new Date(site.lastCheck).toLocaleString()
                      : "N/A"}
                  </p>
                </div>

              </div>

              {/* Right - Status */}
              <div>
                <Badge status={site.status} />
              </div>
            </div>
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