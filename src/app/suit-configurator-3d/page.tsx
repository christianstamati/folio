import PlaceholderImage from "@/components/placeholder-image";
import React from "react";
import ProjectCover from "@/components/project-cover";
import ContentBlock from "@/components/content-block";
import ProjectInfo from "@/components/project-info";
import VerticalSpace from "@/components/vertical-space";
import Callout from "@/components/callout";
import ImageCaption from "@/components/image-caption";
import BulletNumber from "@/components/bullet-number";
import OverlineText from "@/components/overline-text";
import ProjectFeature from "@/components/project-feature";
import Paragraph from "@/components/paragraph";
import FullScreenImage from "@/components/full-screen-image";

export default function Project() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <ProjectCover
        img={{
          src: "/static/the-card-job/project-hero.png",
          alt: "project-hero",
          width: 1920,
          height: 1080,
        }}
      />
      <ContentBlock className={"-mt-44"}>
        <ProjectInfo
          info={{
            icon: {
              src: "/static/the-card-job/project-icon.png",
              alt: "cool-project-alt",
            },
            title: "Configurator 3D",
            company: "We Wear",
            year: "2022",
            shortDescription:
              "The moment has arrived to evaluate, choose, and discover the perfect suit for your wedding day. To keep pace with the ever-evolving digital world, Modesto Bertotto has partnered with WeWear to create a tool that helps clients find the perfect wedding suit effortlessly.",
            role: "Fullstack Developer",
            responsibilities: ["Unreal Engine", "UI/UX Design", "Prototyping"],
            team: [
              "Fabio Albizzati, CEO",
              "Andrea Scaggiante, Manager",
              "Riccardo Allievi, 3D Artist",
              "Giovanni Bucci, Data Scientist",
              "Vasco Inzoli, Pattern Maker",
            ],
          }}
        />
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock variant="2xl">
        <Callout
          title={"PROBLEM"}
          description={
            "Choosing the perfect wedding suit presents several challenges, including the need to match the fabric and style to the wedding season and venue, navigating the overwhelming array of fabric options with varying textures, weights, and appearances, and dealing with the limited availability of fabrics in physical stores due to space constraints."
          }
        />
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
        <Callout
          title={"OUR VISION"}
          description={
            "To position Modesto Bertotto as an innovator in the wedding suit industry, we needed a cross-platform solution that provides clients with expert guidance and the tools to create their own wedding suits. This solution must also offer a high-quality, realistic representation of the fabrics to ensure confidence in their choices"
          }
        />
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock>
        <ProjectFeature
          title={"Variant Manager"}
          content={
            "We created an Unreal Engine project where all the meshes and materials, crafted by Riccardo and Vasco, are meticulously set up. By integrating these assets into the Variant Manager, we enable seamless interaction between the client and the application. This setup allows for multiple mesh and fabric variants, offering endless possibilities for customization."
          }
        />
        <VerticalSpace size={"xl"}></VerticalSpace>

        <ProjectFeature
          reverse
          title={"Export Configuration"}
          content={
            "A button that triggers the Unreal Engine application to generate an image of the current render. This image is then passed to the Next.js frontend, which displays it to the user. Additionally, we provided a button that converts the displayed HTML into a PNG image. This allows users to easily export their configurations, take them to the store, and order their custom wedding outfits with confidence."
          }
        />
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature
          title={"Outfit Suggestion"}
          content={
            "We implemented a wizard that prompts users with simple, foundational questions. Based on their responses, we provide personalized outfit recommendations for them to begin customizing. Additionally, this approach allows us to optimize the user experience by initiating the Unreal Engine virtual machine in the background while they answer questions. This ensures a seamless and efficient experience for users as they proceed with customizing their ideal wedding outfit."
          }
        />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph
          indent
          title="EXPLORATION"
          content={
            "As we saw Unreal Engine already offers tools for handling multiple configurations. Instead of reinventing the wheel, we utilized Unreal Engine's built-in Variant Manager. This tool allows for creating variants and assigning properties to in-scene actors. Selecting a particular variant changes the state of the actor in the scene, simplifying the configuration process."
          }
        />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <FullScreenImage />
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph
          indent
          title="IMPLEMENTATION"
          content={
            " Working with front-end to implement the new job card exposed holes in\n" +
            "        our outdated design system process. Because of our product\n" +
            "        organization’s habit of moving quickly and A/B testing everything, many\n" +
            "        front-end engineers avoided spending the time to create and document a\n" +
            "        component before it actually proved successful. This was reasonable, but\n" +
            "        added to ZipRecruiter’s technical debt. Once a test variant won, we\n" +
            "        resolved to it quickly and moved on."
          }
        />
        <VerticalSpace />
        <Paragraph
          indent
          content={
            "        I organized meetings with front-end and design stakeholders to figure\n" +
            "        out how we could combat this issue. We decided to build in time to\n" +
            "        componentize winning variants and formed a team to take a more wholistic\n" +
            "        approach to improving our design system workflow. I could speak more to\n" +
            "        how we’re approaching our design system, but I’ll save that for another\n" +
            "        time."
          }
        />
        <VerticalSpace />
        <Paragraph
          indent
          content={
            "        With a temporary solution in place, I documented the new job card system\n" +
            "        and helped stress test the component before finally testing it with job\n" +
            "        seekers."
          }
        />
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <FullScreenImage />
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph
          indent
          title="RESULTS"
          content={
            "          We tested the new card design on the Suggested Jobs page first and\n" +
            "          planned to roll it out to other placements with a win. The A/B test\n" +
            "          revealed that the new card design significantly outperformed the old\n" +
            "          with a 10% lift in clicks and a 6% lift in applications, a substantial\n" +
            "          win for what was on the surface, a simple visual UI update. Based on\n" +
            "          the agreement we made with front-end, the card was componentized and\n" +
            "          extended to its different placements. It performed similarly in its\n" +
            "          other placements and even better on iOS and Android, lifting\n" +
            "          applications by 7% and 8%, respectively."
          }
        />

        <VerticalSpace />
        <Paragraph
          indent
          title="SUMMARY"
          content={
            "The job card redesign improved our job seekers’ overall experience by making jobs easier to consume—first on Suggested Jobs and later across our entire product suite. Personally, this project gave me some valuable insights:\n" +
            "\n" +
            "By systemizing the job card design, I was able to create capabilities for our product management team that would outweigh the initial benefits of simply improving the visual design and hierarchy of the card.\n" +
            "\n" +
            "It’s important to be able to adapt to new constraints and moving targets. Building products is rarely cut and dry. As teams work alongside each other, things can change and that’s okay. Changing my angle from what to include to how to include steered the job card to where it is today. \n" +
            "\n" +
            "Communicating well and involving the right stakeholders early on can pay huge dividends. In the process of redesigning the job card, I saw an opportunity to improve the way we utilize design systems. Through good communication, I was able to get buy-in and kick off what would be the start of a more mature design system process. "
          }
        />
        <VerticalSpace />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
    </div>
  );
}
