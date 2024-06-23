import PlaceholderImage from "@/components/placeholder-image";
import React from "react";
import ProjectHero from "@/components/project-hero";
import ContentBlock from "@/components/content-block";
import {
  ProjectMetadata,
  ProjectMetadataHeader,
  ProjectDescription,
} from "@/components/project-info";
import VerticalSpace from "@/components/vertical-space";
import {
  Callout,
  CalloutTitle,
  CalloutDescription,
} from "@/components/callout";
import { ImageCaption } from "@/components/image-caption";
import OverlineText from "@/components/overline-text";
import { ProjectFeature } from "@/components/project-feature";
import {
  Paragraph,
  ParagraphOverlineHeader,
  ParagraphContent,
  ParagraphHeader,
} from "@/components/paragraph";
import { FullScreenImage } from "@/components/full-screen-image";
import { ProjectIcon } from "@/components/project-icon";
import { Tag } from "@/components/tag";
import { Dot } from "@/components/dot";
import { List, ListHeader, ListItem } from "@/components/list";
import {
  BulletItem,
  BulletNumber,
  BulletPoints,
} from "@/components/bullet-points";

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
        <ProjectMetadata>
          <ProjectIcon />
          <ProjectMetadataHeader>Project Title</ProjectMetadataHeader>
          <Tag>
            <span>Company</span>
            <Dot />
            <span>2020</span>
          </Tag>
          <div className={"mt-6 flex flex-col gap-12 lg:flex-row"}>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              in metus vulputate eu scelerisque felis imperdiet. Congue nisi
              vitae suscipit tellus mauris.
            </ProjectDescription>
            <div className={"flex w-full flex-col gap-8 xs:flex-row"}>
              <div className="flex w-full flex-col gap-8">
                <List>
                  <ListHeader>ROLE</ListHeader>
                  <ListItem>Fullstack developer</ListItem>
                </List>
                {/* RESPONSIBILITIES */}
                <List>
                  <ListHeader>RESPONSIBILITIES</ListHeader>
                  <ListItem>System Design</ListItem>
                  <ListItem>User Interface Design</ListItem>
                </List>
              </div>
              {/* Team */}
              <List>
                <ListHeader>TEAM</ListHeader>
                <ListItem>Marco Rossi, Product Manager</ListItem>
                <ListItem>Sara Roy, Engineer</ListItem>
                <ListItem>Albert Doe, Research</ListItem>
                <ListItem>Sam Sulek, Analytics</ListItem>
              </List>
            </div>
          </div>
        </ProjectMetadata>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock variant="2xl">
        <Callout>
          <CalloutTitle>OUR VISION</CalloutTitle>
          <CalloutDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing elit pellentesque habitant morbi tristique senectus. At
            erat pellentesque adipiscing commodo elit. A diam sollicitudin
            tempor id eu nisl nunc mi ipsum.
          </CalloutDescription>
        </Callout>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing elit pellentesque habitant morbi tristique senectus. At
            erat pellentesque adipiscing commodo elit. A diam sollicitudin
            tempor id eu nisl nunc mi ipsum.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock
        className="flex flex-col items-start gap-4 xs:flex-row"
        variant="3xl"
      >
        <ImageCaption
          caption={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt"
          }
        />
        <ImageCaption caption={"Lorem ipsum dolor sit amet"} />
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock variant="2xl">
        <Paragraph>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock className="flex flex-col gap-8 md:flex-row" variant="5xl">
        <div className="w-full">
          <PlaceholderImage width={300} height={300} className="w-full" />
        </div>
        <BulletPoints>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
          <BulletItem>
            <BulletNumber>1</BulletNumber>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </BulletItem>
        </BulletPoints>
      </ContentBlock>
      <VerticalSpace size={"lg"} />
      <ContentBlock variant="2xl">
        <div className="p-0 sm:px-8">
          <OverlineText>RESEARCH</OverlineText>
          <VerticalSpace size={"sm"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam.
          </p>
          <VerticalSpace size={"sm"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam. Non sodales neque sodales ut
            etiam sit amet nisl purus. Sed faucibus turpis in eu. Morbi leo urna
            molestie at elementum eu facilisis sed.
          </p>
        </div>
        <VerticalSpace size={"md"} />
        <Callout>
          <CalloutTitle>OUR VISION</CalloutTitle>
          <CalloutDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam.
          </CalloutDescription>
        </Callout>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <ContentBlock>
        <ProjectFeature>
          <Paragraph>
            <ParagraphHeader>Lorem ipsum dolor sit amet</ParagraphHeader>
            <ParagraphContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl purus in mollis. Lobortis
              scelerisque fermentum dui faucibus in ornare quam. Non sodales
              neque sodales ut etiam sit amet nisl purus. Sed faucibus turpis in
              eu. Morbi leo urna molestie at elementum eu facilisis sed.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <ImageCaption />
          </div>
        </ProjectFeature>
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature reverse>
          <Paragraph>
            <ParagraphHeader>Lorem ipsum dolor sit amet</ParagraphHeader>
            <ParagraphContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl purus in mollis. Lobortis
              scelerisque fermentum dui faucibus in ornare quam. Non sodales
              neque sodales ut etiam sit amet nisl purus. Sed faucibus turpis in
              eu. Morbi leo urna molestie at elementum eu facilisis sed.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <ImageCaption />
          </div>
        </ProjectFeature>
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature>
          <Paragraph>
            <ParagraphHeader>Lorem ipsum dolor sit amet</ParagraphHeader>
            <ParagraphContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl purus in mollis. Lobortis
              scelerisque fermentum dui faucibus in ornare quam. Non sodales
              neque sodales ut etiam sit amet nisl purus. Sed faucibus turpis in
              eu. Morbi leo urna molestie at elementum eu facilisis sed.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <ImageCaption />
          </div>
        </ProjectFeature>
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ProjectFeature reverse>
          <Paragraph>
            <ParagraphHeader>Lorem ipsum dolor sit amet</ParagraphHeader>
            <ParagraphContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl purus in mollis. Lobortis
              scelerisque fermentum dui faucibus in ornare quam. Non sodales
              neque sodales ut etiam sit amet nisl purus. Sed faucibus turpis in
              eu. Morbi leo urna molestie at elementum eu facilisis sed.
            </ParagraphContent>
          </Paragraph>
          <div className="h-full w-full">
            <ImageCaption />
          </div>
        </ProjectFeature>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphOverlineHeader>EXPLORATION</ParagraphOverlineHeader>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam. Non sodales neque sodales ut
            etiam sit amet nisl purus. Sed faucibus turpis in eu. Morbi leo urna
            molestie at elementum eu facilisis sed.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
      <FullScreenImage />
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphOverlineHeader>IMPLEMENTATION</ParagraphOverlineHeader>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam. Non sodales neque sodales ut
            etiam sit amet nisl purus. Sed faucibus turpis in eu. Morbi leo urna
            molestie at elementum eu facilisis sed.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam. Non sodales neque sodales ut
            etiam sit amet nisl purus. Sed faucibus turpis in eu. Morbi leo urna
            molestie at elementum eu facilisis sed.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis.
          </ParagraphContent>
        </Paragraph>
      </ContentBlock>
      <VerticalSpace size={"xl"} />
      <FullScreenImage />
      <VerticalSpace size={"xl"}></VerticalSpace>
      <ContentBlock variant={"2xl"}>
        <Paragraph indent>
          <ParagraphOverlineHeader>RESULTS</ParagraphOverlineHeader>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam. Non sodales neque sodales ut
            etiam sit amet nisl purus. Sed faucibus turpis in eu. Morbi leo urna
            molestie at elementum eu facilisis sed.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
        <Paragraph indent>
          <ParagraphOverlineHeader>SUMMARY</ParagraphOverlineHeader>
          <ParagraphContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales
            ut etiam sit amet nisl purus in mollis. Lobortis scelerisque
            fermentum dui faucibus in ornare quam. Non sodales neque sodales ut
            etiam sit amet nisl purus. Sed faucibus turpis in eu. Morbi leo urna
            molestie at elementum eu facilisis sed. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus
            in mollis. Lobortis scelerisque fermentum dui faucibus in ornare
            quam. Non sodales neque sodales ut etiam sit amet nisl purus. Sed
            faucibus turpis in eu. Morbi leo urna molestie at elementum eu
            facilisis sed.
          </ParagraphContent>
        </Paragraph>
        <VerticalSpace />
      </ContentBlock>
      <VerticalSpace size={"xl"}></VerticalSpace>
    </div>
  );
}
