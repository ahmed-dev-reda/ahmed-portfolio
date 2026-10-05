"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainStage from "@/components/MainStage";
import Sidebar from "@/components/Sidebar";
import type { VCardTab } from "@/components/TabNav";
import AboutView from "@/views/AboutView";
import PlaceholderView from "@/views/PlaceholderView";
import PortfolioView from "@/views/PortfolioView";
import ResumeView from "@/views/ResumeView";

export default function Home() {
  const [activeTab, setActiveTab] = useState<VCardTab>("Portfolio");

  return (
    <div className="min-h-full bg-surface font-body text-on-surface">
      <Header />
      <main className="mx-auto w-full max-w-[1280px] px-6 pb-4 pt-24 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </div>
          <div className="lg:col-span-8">
            <MainStage>
              <div key={activeTab} className="vcard-enter">
                {activeTab === "Portfolio" && (
                  <PortfolioView activeTab={activeTab} onTabChange={setActiveTab} />
                )}
                {activeTab === "Resume" && (
                  <ResumeView activeTab={activeTab} onTabChange={setActiveTab} />
                )}
                {activeTab === "About" && (
                  <AboutView activeTab={activeTab} onTabChange={setActiveTab} />
                )}
                {activeTab === "Blog" && (
                  <PlaceholderView
                    tab={activeTab}
                    badge="Journal"
                    title="Blog"
                    copy="Long-form notes on craft, systems and creative direction are being typeset for the archive."
                    onTabChange={setActiveTab}
                  />
                )}
                {activeTab === "Contact" && (
                  <PlaceholderView
                    tab={activeTab}
                    badge="Correspondence"
                    title="Contact"
                    copy="Briefings open for Q3/Q4. The concierge contact desk opens shortly — reach out via the header meanwhile."
                    onTabChange={setActiveTab}
                  />
                )}
              </div>
            </MainStage>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
