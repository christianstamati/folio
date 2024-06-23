import PlaceholderImage from "@/components/placeholder-image";
import React from "react";
import ProjectHero from "@/components/project-hero";
import ContentBlock from "@/components/content-block";
import { ProjectInfo } from "@/components/project-info";
import VerticalSpace from "@/components/vertical-space";
import {
  Callout,
  CalloutTitle,
  CalloutDescription,
} from "@/components/callout";
import ImageCaption from "@/components/image-caption";
import BulletNumber from "@/components/bullet-number";
import OverlineText from "@/components/overline-text";
import ProjectFeature from "@/components/project-feature";
import {
  Paragraph,
  ParagraphHeader,
  ParagraphContent,
} from "@/components/paragraph";
import FullScreenImage from "@/components/full-screen-image";

export default function CaseStudyTemplatePage() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <ProjectHero
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
            title: "The Job Card",
            company: "Zip Recruiter",
            year: "2020",
            shortDescription:
              "For job seekers, the job card is a key element in the ZipRecruiter\n" +
              "          interface, but functionally, it presented several issues; it was\n" +
              "          difficult to read, reuse, and test. I led the effort to improve the\n" +
              "          job card from usability and system perspectives.",
            role: "Lead Production Designer",
            responsibilities: ["System Design", "User Interface Design"],
            team: [
              "Nishok Chetty, Product Manager",
              "Gerald Burns, Engineer",
              "Ben Geller, Research",
              "Mrinalini Garg, Analytics",
            ],
          }}
        ></ProjectInfo>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock variant="2xl">
        <Callout>
          <CalloutTitle>OUR VISION</CalloutTitle>
          <CalloutDescription>
            The job card had glaring usability issues and needed to be rebuilt
            for each new placement, an inefficiency we hoped to correct. Could
            we redesign the job card to not only improve usability, but also
            promote consistency and enable powerful testing?
          </CalloutDescription>
        </Callout>
        <VerticalSpace />
        <p className="p-0 sm:px-8">
          Some of our highest traffic pages, like Suggested Jobs and Search
          Results, displayed lists of hundreds of job cards. The cards gave the
          user a compact preview of a job and some even allowed users to apply
          directly with one tap.
        </p>
        <VerticalSpace />
        <p className="p-0 sm:px-8">
          Our database is made up of millions of jobs from hundreds of different
          sources, each returning different data than the last. While perfectly
          formatted jobs exist, a more characteristic job was one with a long
          title and missing information like a logo or perks.
        </p>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock
        className="flex flex-col items-start gap-4 xs:flex-row"
        variant="3xl"
      >
        <ImageCaption
          caption={
            "While this doesnt look terrible, its uncommon for a job to have\n" +
            " clean and complete data."
          }
        />
        <ImageCaption caption={"A more realistic job"} />
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock variant="2xl">
        <p className="p-0 sm:px-8">
          We had spent years tolerating the suboptimal design and were ready for
          a change. There was a laundry list of usability and visual issues that
          needed to be addressed;
        </p>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock className="flex flex-col gap-8 md:flex-row" variant="5xl">
        <div className="w-full">
          <PlaceholderImage
            width={300}
            height={300}
            className="w-full"
            alt={"Caption"}
          />
        </div>

        {/*Bullet points*/}
        <div className="flex flex-col gap-y-8">
          <BulletNumber
            num={1}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
          <BulletNumber
            num={2}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
          <BulletNumber
            num={3}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
          <BulletNumber
            num={4}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
          <BulletNumber
            num={5}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
          <BulletNumber
            num={6}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
          <BulletNumber
            num={7}
            description={
              "Long job titles were truncated after 34 characters, a low limit\n" +
              " considering the amount of employers that stuff their job titles\n" +
              " with superfluous keywords."
            }
          />
        </div>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock variant="2xl">
        <div className="p-0 sm:px-8">
          <OverlineText>RESEARCH</OverlineText>
          <VerticalSpace size={"sm"} />
          <p>
            Several of the issues stated above were based on my intuition and
            understanding of best practices, but others came directly from our
            research. Job seekers who reported jobs cited a lack of information
            as a top reason.
          </p>
          <VerticalSpace size={"sm"} />
          <p>
            After digging in with user interviews, Ben, our research lead,
            learned that job seekers were frustrated by cut off job titles and
            locations. They loved our 1-Tap Apply feature, but felt some jobs
            didnt have enough substance for them to confidently use it. This was
            especially true for job seekers in trucking and healthcare, as
            hiring managers in those industries tended to stuff job titles with
            keywords.
          </p>
        </div>
        <VerticalSpace size={"md"} />
        <Callout>
          <CalloutTitle>OUR VISION</CalloutTitle>
          <CalloutDescription>
            We aimed to improve the job cards usability upfront and systemize
            the design for added testing capabilities. We also hoped to use the
            project as a starting point for improving our process of
            implementing reusable components across our product ecosystem.
          </CalloutDescription>
        </Callout>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock>
        <ProjectFeature
          title={"Vertically Spaced & Dynamic Elements"}
          content={
            "Because our job data can be very inconsistent, I designed the job\n" +
            "            card as it’s own mini system, giving internal elements their own\n" +
            "            full-width vertical space. This allowed each element to dynamically\n" +
            "            grow or hide depending on its contents and the data available to us.\n" +
            "            It also gave us the flexibility to easily add, reorder, or remove\n" +
            "            internal elements in future tests."
          }
        />
        <VerticalSpace size={"xl"}></VerticalSpace>

        <ProjectFeature
          reverse
          title={"Improved Readability"}
          content={
            "The flexible system allowed us to show full job titles and company\n" +
            "            names by wrapping longer strings. I aligned every element to the\n" +
            "            left for faster scanning and set a clear typographic hierarchy by\n" +
            "            tweaking font sizes and weights for added emphasis on the job’s most\n" +
            "            important details."
          }
        />
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature
          title={"Job Card Action Menu"}
          content={
            "Performing actions from the job card had previously been\n" +
            "            inconsistent. Some cards allowed users to save and report jobs,\n" +
            "            while others only allowed for the dismissal of jobs. I tucked all\n" +
            "            actions into an expandable menu, giving users access to the same\n" +
            "            actions from every placement. Further, this solution was fluid\n" +
            "            enough to accommodate new actions later on if we needed them."
          }
        />
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature
          reverse
          title={"Accessibility"}
          content={
            "        We updated our grey text values to comply with the WCAG color contrast\n" +
            "        guidelines. This prompted a wider color audit and later, a dramatic\n" +
            "        change to our color palette, including our primary brand green."
          }
        />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphHeader>EXPLORATION</ParagraphHeader>
          <ParagraphContent>
            I started explorations by critically thinking about the types of
            information that are important to our users, but was met with
            resistance because of time and engineering constraints. I pivoted to
            restructuring the information that was already there in a way that
            would enable us to easily test contents later.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <FullScreenImage />
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphHeader>IMPLEMENTATION</ParagraphHeader>
          <ParagraphContent>
            Working with front-end to implement the new job card exposed holes
            in our outdated design system process. Because of our product
            organization’s habit of moving quickly and A/B testing everything,
            many front-end engineers avoided spending the time to create and
            document a component before it actually proved successful. This was
            reasonable, but added to ZipRecruiter’s technical debt. Once a test
            variant won, we resolved to it quickly and moved on.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphContent>
            I organized meetings with front-end and design stakeholders to
            figure out how we could combat this issue. We decided to build in
            time to componentize winning variants and formed a team to take a
            more wholistic approach to improving our design system workflow. I
            could speak more to how we’re approaching our design system, but
            I’ll save that for another time.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphContent>
            With a temporary solution in place, I documented the new job card
            system and helped stress test the component before finally testing
            it with job seekers.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <FullScreenImage />
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphHeader>RESULTS</ParagraphHeader>
          <ParagraphContent>
            We tested the new card design on the Suggested Jobs page first and
            planned to roll it out to other placements with a win. The A/B test
            revealed that the new card design significantly outperformed the old
            with a 10% lift in clicks and a 6% lift in applications, a
            substantial win for what was on the surface, a simple visual UI
            update. Based on the agreement we made with front-end, the card was
            componentized and extended to its different placements. It performed
            similarly in its other placements and even better on iOS and
            Android, lifting applications by 7% and 8%, respectively.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphHeader>SUMMARY</ParagraphHeader>
          <ParagraphContent>
            The job card redesign improved our job seekers’ overall experience
            by making jobs easier to consume—first on Suggested Jobs and later
            across our entire product suite. Personally, this project gave me
            some valuable insights: By systemizing the job card design, I was
            able to create capabilities for our product management team that
            would outweigh the initial benefits of simply improving the visual
            design and hierarchy of the card. It’s important to be able to adapt
            to new constraints and moving targets. Building products is rarely
            cut and dry. As teams work alongside each other, things can change
            and that’s okay. Changing my angle from what to include to how to
            include steered the job card to where it is today. Communicating
            well and involving the right stakeholders early on can pay huge
            dividends. In the process of redesigning the job card, I saw an
            opportunity to improve the way we utilize design systems. Through
            good communication, I was able to get buy-in and kick off what would
            be the start of a more mature design system process.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
    </div>
  );
}
