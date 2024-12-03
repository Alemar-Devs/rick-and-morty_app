'use client';

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function CardSkeleton() {
  return (
    <Card className="relative w-[280px] rounded-lg overflow-hidden animate-pulse">
      <CardContent className="p-0">
        <AspectRatio ratio={2/3}>
          <div className="relative w-full h-full bg-muted/50">
            {/* Efecto de gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shine" />
            
            {/* Contenido simulado */}
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <div className="h-4 bg-muted/60 rounded w-3/4" />
              <div className="h-3 bg-muted/40 rounded w-1/2" />
            </div>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
