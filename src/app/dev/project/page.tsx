import Image from "next/image";
import React from "react";
import PlaceholderImage from "@/components/placeholder-image";
import ProjectInfo from "@/components/project-info";
import ProjectCover from "@/components/project-cover";

// Callout
// TextParagraph
// Small Caps Header
// Caption
// ProblemWithNumber
// VideoPlayer
// FeatureParagraph

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProjectCover
        img={{
          src: "/static/the-card-job/project-hero.png",
          alt: "project-hero",
          width: 1920,
          height: 1080,
        }}
      />
      <div className="-mt-44 w-full px-6 sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
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
        />
        <div className="h-svh">OTHER STUFF</div>
      </div>
    </div>
  );
}

function ProjectInfoDevBKP() {
  return (
    <div className="flex flex-col bg-neutral-50 p-6">
      <div>
        <Image
          className="h-6 w-6 sm:h-8 sm:w-8"
          src={"/static/images/suggested-jobs/project-icon.png"}
          alt={"project-icon"}
          width={32}
          height={32}
        ></Image>
        <h1 className="mb-4 mt-4 text-4xl font-bold">The Job Card</h1>

        {/*Two columns section*/}
        <div className="flex items-center gap-x-3 text-lg font-medium text-paragraph">
          <span>Zip Recruiter</span>
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
          <span>2020</span>
        </div>

        {/*Short Description*/}
        <p className="mt-4">
          For job seekers, the job card is a key element in the ZipRecruiter
          interface, but functionally, it presented several issues; it was
          difficult to read, reuse, and test. I led the effort to improve the
          job card from usability and system perspectives.
        </p>

        {/*Team, Role and Responsibilities*/}
        <div className="my-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-bold tracking-widest text-primary/90">
              ROLE
            </h2>
            <div>Lead Production Designer</div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <h2 className="text-sm font-bold tracking-widest text-primary/90">
              RESPONSABILITIES
            </h2>
            <div>System Design</div>
            <div>User Interface Design</div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <h2 className="text-sm font-bold tracking-widest text-primary/90">
              TEAM
            </h2>
            <div>Nishok Chetty, Product Manager</div>
            <div>Gerald Burns, Engineer</div>
            <div>Ben Geller, Research</div>
            <div>Mrinalini Garg, Analytics</div>
          </div>
        </div>

        {/*The problem*/}
        <div className="rounded-2xl bg-white px-6 py-4">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-primary/90">
            PROBLEM
          </h2>
          <p>
            The job card had glaring usability issues and needed to be rebuilt
            for each new placement, an inefficiency we hoped to correct. Could
            we redesign the job card to not only improve usability, but also
            promote consistency and enable powerful testing?
          </p>
        </div>

        <p className="mt-8">
          Some of our highest traffic pages, like Suggested Jobs and Search
          Results, displayed lists of hundreds of job cards. The cards gave the
          user a compact preview of a job and some even allowed users to apply
          directly with one tap.
        </p>

        <p className="mt-8">
          Our database is made up of millions of jobs from hundreds of different
          sources, each returning different data than the last. While perfectly
          formatted jobs exist, a more characteristic job was one with a long
          title and missing information like a logo or perks.
        </p>

        {/*Two columns section, image captions*/}
        <div className="my-20 flex flex-col gap-y-8">
          <div className="flex flex-col justify-center">
            <PlaceholderImage
              width={300}
              height={300}
              className="w-full"
              alt={"Caption"}
            />
            <div className="p-4 text-center text-sm text-paragraph">
              While this doesnt look terrible, its uncommon for a job to have
              clean and complete data.
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <PlaceholderImage
              width={300}
              height={300}
              className="w-full"
              alt={"Caption"}
            />
            <div className="p-4 text-center text-sm text-paragraph">
              A more realistic job.
            </div>
          </div>
        </div>

        <p>
          We had spent years tolerating the suboptimal design and were ready for
          a change. There was a laundry list of usability and visual issues that
          needed to be addressed;
        </p>

        <div className="py-12">
          <PlaceholderImage
            width={300}
            height={300}
            className="w-full"
            alt={"Caption"}
          />
        </div>

        {/*Bullet points*/}
        <div className="flex flex-col gap-y-8">
          <div className="flex gap-x-4">
            <div
              className={
                "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
              }
            >
              <span>1</span>
            </div>
            <p>
              Long job titles were truncated after 34 characters, a low limit
              considering the amount of employers that stuff their job titles
              with superfluous keywords.
            </p>
          </div>
          <div className="flex gap-x-4">
            <div
              className={
                "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
              }
            >
              <span>2</span>
            </div>
            <p>
              Because company names and locations shared the same line, long
              company names often truncated cities and states, key factors for
              determining if a job is a good fit.
            </p>
          </div>
          <div className="flex gap-x-4">
            <div
              className={
                "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
              }
            >
              <span>1</span>
            </div>
            <p>
              Long job titles were truncated after 34 characters, a low limit
              considering the amount of employers that stuff their job titles
              with superfluous keywords.
            </p>
          </div>
          <div className="flex gap-x-4">
            <div
              className={
                "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
              }
            >
              <span>1</span>
            </div>
            <p>
              Long job titles were truncated after 34 characters, a low limit
              considering the amount of employers that stuff their job titles
              with superfluous keywords.
            </p>
          </div>
          <div className="flex gap-x-4">
            <div
              className={
                "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
              }
            >
              <span>1</span>
            </div>
            <p>
              Long job titles were truncated after 34 characters, a low limit
              considering the amount of employers that stuff their job titles
              with superfluous keywords.
            </p>
          </div>
          <div className="flex gap-x-4">
            <div
              className={
                "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
              }
            >
              <span>1</span>
            </div>
            <p>
              Long job titles were truncated after 34 characters, a low limit
              considering the amount of employers that stuff their job titles
              with superfluous keywords.
            </p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-primary/90">
            RESEARCH
          </h2>
          <p>
            Several of the issues stated above were based on my intuition and
            understanding of best practices, but others came directly from our
            research. Job seekers who reported jobs cited a lack of information
            as a top reason.
          </p>
          <div className="h-8"></div>
          <p>
            After digging in with user interviews, Ben, our research lead,
            learned that job seekers were frustrated by cut off job titles and
            locations. They loved our 1-Tap Apply feature, but felt some jobs
            didnt have enough substance for them to confidently use it. This was
            especially true for job seekers in trucking and healthcare, as
            hiring managers in those industries tended to stuff job titles with
            keywords.
          </p>
          <div className="h-8"></div>
          <div className="rounded-2xl bg-white px-6 py-4">
            <h2 className="mb-3 text-sm font-bold tracking-widest text-primary/90">
              OUR VISION
            </h2>
            <p>
              We aimed to improve the job cards usability upfront and systemize
              the design for added testing capabilities. We also hoped to use
              the project as a starting point for improving our process of
              implementing reusable components across our product ecosystem.
            </p>
          </div>
        </div>

        <div className="py-12">
          <PlaceholderImage
            width={300}
            height={300}
            className="w-full"
            alt={"Caption"}
          />
        </div>
      </div>
    </div>
  );
}
