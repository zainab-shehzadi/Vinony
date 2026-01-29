"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import SectionHero from "@/components/common/section-hero/SectionHero";
import ModelGrid from "@/components/models/ModelGrid";
import ModelFilters from "@/components/models/ModelFilters";
import { MODELS } from "@/constants/model";
import type { ModelCategory, ModelCardData } from "@/types/model";
import Container from "@/lib/Container";

type FilterTab = ModelCategory | "all";

function matchesSearch(m: ModelCardData, q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return true;

  const hay = [
    m.title,
    m.provider,
    m.description,
    ...(m.tags ?? []).map((t) => t.label),
    m.category,
    `${m.credits} ${m.creditsUnit}`,
  ]
    .join(" ")
    .toLowerCase();

  return hay.includes(s);
}

export default function AIModelPage() {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState<FilterTab>("all");
  const [search, setSearch] = React.useState("");

  const filtered = React.useMemo(() => {
    return MODELS.filter((m) => {
      const tabOk = tab === "all" ? true : m.category === tab;
      const searchOk = matchesSearch(m, search);
      return tabOk && searchOk;
    });
  }, [tab, search]);

  return (
    <div className="w-full">
      <Container>
        <SectionHero
          variant="heroB"
          titleParts={[
            { type: "text", value: "Explore " },
            { type: "highlight", value: "AI" },
            { type: "text", value: " Models" },
          ]}
          subtitle="Browse and use 100+ AI models for chat, images, video, and task-based AI agents — all in one platform."
        />

        <div className="pt-10 md:pt-16 lg:pt-24">
          <ModelFilters value={tab} onChange={setTab} search={search} onSearchChange={setSearch} />

          <div className="pt-6 md:pt-10 lg:pt-12">
            <ModelGrid
              items={filtered}
              onTry={(slug) => {
                navigate(`/ai-models/${slug}`); 
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
