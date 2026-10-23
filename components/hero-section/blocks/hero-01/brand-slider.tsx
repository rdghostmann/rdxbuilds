"use client";
import type { ComponentType } from "react";
import { Marquee } from "@/components/hero-section/animations/marquee";
import { motion } from "framer-motion";

export interface BrandList {
  name: string;
  Icon: ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
                <p className="text-sm font-normal sm:px-2 px-10 text-muted-foreground text-center">
                  Loved by 1000+ big and small brands around the worlds
                </p>
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
              </div>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="[--duration:20s] p-0">
                  {brandList.map(({ name, Icon }) => (
                    <div
                      key={name}
                      className="flex shrink-0 items-center gap-3 px-6"
                      aria-label={name}
                      title={name}
                    >
                      <Icon
                        size={28}
                        className="size-7"
                        aria-hidden="true"
                      />
                      <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                        {name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
