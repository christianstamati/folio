import React from "react";
import ProjectHero from "@/components/project-hero";
import ContentBlock from "@/components/content-block";
import {
  ProjectDescription,
  ProjectMetadata,
  ProjectMetadataHeader,
} from "@/components/project-info";
import VerticalSpace from "@/components/vertical-space";
import {
  Callout,
  CalloutDescription,
  CalloutTitle,
} from "@/components/callout";
import OverlineText from "@/components/overline-text";
import { ProjectFeature } from "@/components/project-feature";
import {
  Paragraph,
  ParagraphContent,
  ParagraphHeader,
  ParagraphOverlineHeader,
} from "@/components/paragraph";
import { FullScreenImage } from "@/components/full-screen-image";
import { ProjectIcon } from "@/components/project-icon";
import { Tag } from "@/components/tag";
import { Dot } from "@/components/dot";
import { List, ListHeader, ListItem } from "@/components/list";
import { ImageCaption } from "@/components/image-caption";
import { Video } from "@/components/video";
import Image from "next/image";
import PlaceholderImage from "@/components/placeholder-image";

export default function SuitConfiguratorProject() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <ProjectHero
        img={{
          src: "/static/configurator-3d/project-hero.png",
          alt: "project-hero",
          width: 1920,
          height: 1080,
        }}
      />
      <ContentBlock className={"-mt-44"}>
        <ProjectMetadata>
          <ProjectIcon
            icon={{
              src: "/static/configurator-3d/project-icon.png",
              alt: "cool-project-alt",
            }}
          />
          <ProjectMetadataHeader>Configurator 3D</ProjectMetadataHeader>
          <Tag>
            <span>We Wear</span>
            <Dot />
            <span>2022</span>
          </Tag>
          <div className={"mt-6 flex flex-col gap-12 lg:flex-row"}>
            <ProjectDescription>
              The moment has arrived to evaluate, choose, and discover the
              perfect suit for your wedding day. To keep pace with the
              ever-evolving digital world, Modesto Bertotto has partnered with
              WeWear to create a tool that helps clients find the perfect
              wedding suit effortlessly.
            </ProjectDescription>
            <div className={"flex w-full flex-col gap-8 xs:flex-row"}>
              <div className="flex w-full flex-col gap-8">
                <List>
                  <ListHeader>ROLE</ListHeader>
                  <ListItem>Fullstack Developer</ListItem>
                </List>
                {/* RESPONSIBILITIES */}
                <List>
                  <ListHeader>RESPONSIBILITIES</ListHeader>
                  <ListItem>Unreal Engine</ListItem>
                  <ListItem>UI/UX Design</ListItem>
                  <ListItem>Prototyping</ListItem>
                </List>
              </div>
              {/* Team */}
              <List>
                <ListHeader>TEAM</ListHeader>
                <ListItem>Fabio Albizzati, CEO</ListItem>
                <ListItem>Andrea Scaggiante, Manager</ListItem>
                <ListItem>Riccardo Allievi, 3D Artist</ListItem>
                <ListItem>Giovanni Bucci, Data Scientist</ListItem>
                <ListItem>Vasco Inzoli, Pattern Maker</ListItem>
              </List>
            </div>
          </div>
        </ProjectMetadata>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock variant="2xl">
        <Callout>
          <CalloutTitle>PROBLEM</CalloutTitle>
          <CalloutDescription>
            Choosing the perfect wedding suit presents several challenges,
            including the need to match the fabric and style to the wedding
            season and venue, navigating the overwhelming array of fabric
            options with varying textures, weights, and appearances, and dealing
            with the limited availability of fabrics in physical stores due to
            space constraints.
          </CalloutDescription>
        </Callout>
        <VerticalSpace />
        <p className="p-0 sm:px-8">
          Addressing these challenges requires a comprehensive approach that
          combines personalized guidance, innovative technology, and a deep
          understanding of client needs and preferences.
        </p>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock variant="2xl">
        <div className="p-0 sm:px-8">
          <OverlineText>RESEARCH</OverlineText>
          <VerticalSpace size={"sm"} />
          <p>
            Most online configuration solutions utilize WebGL-based engines for
            showcasing meshes and materials. One popular library is three.js,
            known for its massive community support and open-source nature.
            WebGL libraries render directly on the user’s device, resulting in
            instant loading times. However, we sought a different approach to
            achieve higher quality: Cloud Streaming.
          </p>
          <VerticalSpace size={"sm"} />
          <p>
            By leveraging cloud streaming technology, we built a standalone
            Windows application that runs on powerful devices and serves the
            rendering to low-budget devices. While this approach introduces
            challenges such as longer loading times and dependence on internet
            connection speed, the superior quality of the final product
            justified the risks.
          </p>
        </div>
        <VerticalSpace size={"md"} />
        <Callout>
          <CalloutTitle>OUR VISION</CalloutTitle>
          <CalloutDescription>
            To position Modesto Bertotto as an innovator in the wedding suit
            industry, we needed a cross-platform solution that provides clients
            with expert guidance and the tools to create their own wedding
            suits. This solution must also offer a high-quality, realistic
            representation of the fabrics to ensure confidence in their choices
          </CalloutDescription>
        </Callout>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock>
        <ProjectFeature>
          <Paragraph>
            <ParagraphHeader>Variant Manager</ParagraphHeader>
            <ParagraphContent>
              We created an Unreal Engine project where all the meshes and
              materials, crafted by Riccardo and Vasco, are meticulously set up.
              By integrating these assets into the Variant Manager, we enable
              seamless interaction between the client and the application. This
              setup allows for multiple mesh and fabric variants, offering
              endless possibilities for customization.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <Video
              src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/variant-manager.mp4"
              height={1080}
              width={1080}
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        </ProjectFeature>
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature reverse>
          <Paragraph>
            <ParagraphHeader>Export Configuration</ParagraphHeader>
            <ParagraphContent>
              A button that triggers the Unreal Engine application to generate
              an image of the current render. This image is then passed to the
              Next.js frontend, which displays it to the user. Additionally, we
              provided a button that converts the displayed HTML into a PNG
              image. This allows users to easily export their configurations,
              take them to the store, and order their custom wedding outfits
              with confidence.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <Video
              src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/export-config.mp4"
              height={1080}
              width={1080}
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        </ProjectFeature>
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature>
          <Paragraph>
            <ParagraphHeader>Outfit Suggestion</ParagraphHeader>
            <ParagraphContent>
              We implemented a wizard that prompts users with simple,
              foundational questions. Based on their responses, we provide
              personalized outfit recommendations for them to begin customizing.
              Additionally, this approach allows us to optimize the user
              experience by initiating the Unreal Engine virtual machine in the
              background while they answer questions. This ensures a seamless
              and efficient experience for users as they proceed with
              customizing their ideal wedding outfit.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <Video
              src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/outfit-recommender.mp4"
              height={1080}
              width={1080}
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        </ProjectFeature>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph>
          <ParagraphOverlineHeader>IMPLEMENTATION</ParagraphOverlineHeader>
          <ParagraphContent>
            Instead of reinventing the wheel, we utilized Unreal Engine&apos;s
            built-in Variant Manager. This tool allows for creating variants and
            assigning properties to in-scene actors. Selecting a particular
            variant changes the state of the actor in the scene, simplifying the
            configuration process. Through extensive tests and research with the
            Variant Manager, we created a functional prototype in Unreal Engine.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock
        className="flex flex-col items-start gap-4 xs:flex-row"
        variant="3xl"
      >
        <div className="flex w-full flex-col">
          <Video
            src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/vm-tests.mp4"
            height={1080}
            width={1080}
            playsInline
            autoPlay
            muted
            loop
          />
          <div className="p-4 text-center text-sm text-paragraph">
            Variant manager first test
          </div>
        </div>
        <div className="flex w-full flex-col">
          <Video
            src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/ue-prototype.mp4"
            height={1080}
            width={1080}
            playsInline
            autoPlay
            muted
            loop
          />
          <div className="p-4 text-center text-sm text-paragraph">
            Unreal prototype
          </div>
        </div>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph>
          <ParagraphContent>
            We selected Next.js and Tailwind CSS for the frontend stack. Despite
            my background in game development (Unity and Unreal), I quickly
            adapted to web development. My goal was to create a basic frontend
            with a WebSocket client to communicate with the Unreal App. Here are
            some initial tests of WebSocket communication:
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace size={"lg"}></VerticalSpace>
        <div className="flex w-full flex-col">
          <Video
            src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/ws.mp4"
            height={1080}
            width={1080}
            playsInline
            autoPlay
            muted
            loop
          />
          <div className="p-4 text-center text-sm text-paragraph">
            Unreal prototype
          </div>
        </div>
        <VerticalSpace size={"lg"}></VerticalSpace>
        <Paragraph>
          <ParagraphContent>
            We opted to create all UI elements using web technologies for their
            simplicity and lightweight nature. Unreal Engine&apos;s primary
            focus is on 3D rendering. Here is a look at the first complete
            prototype:
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace size={"lg"}></VerticalSpace>
        <div className="flex w-full flex-col">
          <Video
            src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/first-app-prototype.mp4"
            height={1080}
            width={1080}
            playsInline
            autoPlay
            muted
            loop
          />
          <div className="p-4 text-center text-sm text-paragraph">
            Cloud streaming prototype
          </div>
        </div>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphOverlineHeader>RESULTS</ParagraphOverlineHeader>
          <ParagraphContent>
            After working closely with the team to bring the idea to life, we
            finally launched the solution on the brand website, and we are
            excited about the results. After weeks of monitoring, we achieved
            our most important goal: increasing website visitors. Despite the
            startup time of the solution being around 2 minutes, most users
            stayed on the platform and engaged with the experience. A small
            percentage did not wait for the experience to load, which is a
            technological constraint we plan to address in the future by
            improving startup times.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>

      <div className="flex w-full items-center justify-center bg-neutral-100 px-4 py-16">
        <div className="flex flex-col">
          <Video
            className="max-w-3xl"
            src="https://s3.eu-central-1.amazonaws.com/chri.dev/configurator-3d/360.mp4"
            height={1080}
            width={1080}
            playsInline
            autoPlay
            muted
            loop
          />
          <div className="p-4 text-center text-sm text-paragraph">
            Final release running on desktop
          </div>
        </div>
      </div>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphOverlineHeader>SUMMARY</ParagraphOverlineHeader>
          <ParagraphContent>
            In this project, I integrated Unreal Engine and Next.js with cloud
            streaming, which was an amazing learning opportunity where I
            acquired skills in Tailwind and Next.js, among others. However, if
            given another chance, I would approach several aspects differently:
            I would better distinguish between server and client components,
            avoiding unnecessary &quot;use client&quot; directives; improve page
            structure by moving some logic to the layout page for better
            organization; and utilize component libraries like shadcn for a more
            consistent look and feel. Despite these challenges, the project was
            immensely rewarding and helped me unlock a new, valuable skill set
            for the future.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
    </div>
  );
}
