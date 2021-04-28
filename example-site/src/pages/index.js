import React from 'react';
import { graphql } from 'gatsby';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage({ data }) {
    return (
        <>
            <Seo title="IndexPage" />
            <Page>
                <HeroSection
                    anchor="hero"
                    content={{
                        iconPrefixText: 'Hello',
                        iconFileName: 'waving-hand.png',
                        title: "I'm a Gatsby Theme",
                        subtitlePrefix: 'I make portfolios ',
                        subtitleHighlight: 'awesome',
                        subtitleSuffix: '.',
                        description: 'A modern portfolio with a minimalistic design.',
                        socialProfiles: ['LinkedIn', 'Medium', 'Github', 'Mail'],
                    }}
                />
                <ArticlesSection anchor="articles" heading="Latest Articles" sources={['Medium']} maxArticles={3} />
                <AboutSection
                    anchor="about"
                    heading="About Portfolio Minimal"
                    htmlDescription={data.aboutSection.edges[0].node.html}
                    imageFileName="charles-deluvio-DgoyKNgPiFQ-unsplash.jpg"
                />
                <InterestsSection anchor="interests" heading="Details" initiallyShown={5} />
                <ProjectsSection
                    anchor="projects"
                    heading="Built-in Features"
                    maxProjects={3}
                    button={{
                        label: 'Visit on GitHub',
                        url: 'https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal',
                    }}
                />
                <ContactSection
                    anchor="contact"
                    heading="Issues?"
                    description="If you have any problems with this theme, create an issue in the GitHub repository."
                    imageFileName="favicon.png"
                    name="Gatsby Theme Portfolio Minimal"
                    email="mail@example.com"
                    socialProfiles={['LinkedIn', 'Medium', 'Github', 'Mail']}
                />
            </Page>
        </>
    );
}

// This example uses Markdown as a source for the text content. But you can use any other source if you like,
// e.g. you could also write the text you would like to use directly as a prop to the component like
// htmlDescription="This can be another example of providing the text content without Markdown"
export const pageQuery = graphql`
    query AboutSection {
        aboutSection: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about.md/" } }) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;
