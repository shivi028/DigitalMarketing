import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatWeDo() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-md font-semibold tracking-wider mb-4 text-purple-500">
          WHAT WE DO
        </p>
        <h1 className="text-4xl md:text-5xl font-serif max-w-4xl mx-auto">
          The right tools you need to use for your startup
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Individual Card */}
        <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-lora">
              HiredEasy for individuals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Take your business to the next level as an individual and use all the tools you need
              from invoicing, estimating, and tracking.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6">
              <Button
                variant="outline"
                className="w-fit text-color-bluePrimary border-color-bluePrimary shadow-sm rounded-2xl shadow-color-bluePrimary hover:bg-color-bluePrimary hover:text-white transition-colors"
              >
                For individuals →
              </Button>
              <Image
                src="/Image/indivisual.png"
                alt="Individual working at desk illustration"
                width={300}
                height={280}
                className="mx-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* Teams Card */}
        <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-lora">
              HiredEasy for teams
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Manage your team efficiently with all the essential tools for collaboration, tracking,
              and invoicing.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6">
              <Button
                variant="outline"
                className="w-fit text-color-bluePrimary border-color-bluePrimary shadow-sm rounded-2xl shadow-color-bluePrimary hover:bg-color-bluePrimary hover:text-white transition-colors"
              >
                For teams →
              </Button>
              <Image
                src="/Image/team.png"
                alt="Team meeting illustration"
                width={300}
                height={280}
                className="mx-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
