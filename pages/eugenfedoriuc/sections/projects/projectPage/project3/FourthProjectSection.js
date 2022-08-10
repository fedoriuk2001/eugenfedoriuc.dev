// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function FourthProjectSection() {
  return (
    <div>
      <p>
        One More Cloud were looking to make significant improvements to their
        product website but they had a number of challenges to overcome.
      </p>

      <p>
        Bonsai is a managed elasticsearch platform which looks after your search
        tools and makes sure they&#39;re always running and performing the best
        for you. Their team is built up of mostly backend developers and
        marketers and they have a very relaxed company culture, which gives me
        the flexibility to work in a way which will be most beneficial to them.
      </p>

      <h2>Step 1: Completing their new marketing website</h2>

      <p>
        When I began working with Bonsai, they were in a tough situation. They
        were working on a new marketing website which they desperately needed to
        make their brand feel fresh, but the site had only been half completed
        and they needed somebody who could pick up the project and finish it
        off.
      </p>

      <p>
        The website had been built using Jekyll, a headless platform that
        I&#39;d not worked with before but was very familiar to a combination of
        other tools I&#39;d used previously. With my experience using many
        different development platforms across my career
        <a href="https://www.notion.so/Skills-7c10c6cc2cd140c5955bfcb509cfa8f5">
          including headless websites
        </a>
        it was no problem for me to take over and help them finish creating
        their new marketing site.
      </p>

      <h2>Step 2: Creating a better experience for the team</h2>

      <p>
        The next step was to make improvements to the site. Even though the
        marketing site had just been recreated, the new build only solved
        problems for the websites users but was still causing a ton of issues
        for the team. That wasn&#39;t good enough.
      </p>

      <p>
        The problem was the Jekyll/Parcel combination which resulted in 2 build
        processes and two different public folders, a very awkward experience
        for the team. This combination also caused other weird issues like not
        being able to check the 404 page.
      </p>

      <p>
        The next issue was poor maintainability. The site hadn&#39;t been
        created in an optimal way making changes time consuming and expensive.
        Most of the site needed to be adjusted so that it was easy to edit, and
        more beneficial for a team short on time.
      </p>

      <p>
        Together, we decided to convert the site to NextJS while using the
        current design. React was a favourite library of the team, and NextJS
        provides a ton of great benefits like flexibility, static pages and a
        load of optimisations built in.
      </p>

      <p>
        Rebuilding the site took a few weeks, but the benefits gained were
        tremendous, returning control of changes to the team and making it much
        easier for them to understand how their own website works. There were
        also some performance gains inherited from using improved tools which
        was a nice side effect.
      </p>

      <p>
        I also built in Documentation and basic visual tests in the form of
        Storybook, which makes it much easier for the team to understand how the
        website fits together which encourages best practice. It also reduces
        bottlenecks as design and development can refer back to the
        documentation to remind themselves how everything works, rather than a
        single developer.
      </p>

      <h2>Future Changes</h2>

      <p>
        Bonsai are always looking to improve their software and their website is
        no exception, and as a result we&#39;ve already discussed changes which
        would further optimise their website improving its reliability and
        making it easier to work with.
      </p>

      <ul>
        <li>
          We want to create more landing pages to help focus on specific
          sectors, help with SEO and improve conversions, without creating too
          much additional work. Ideally these landing pages would be able to be
          created without any development oversight.
        </li>
        <li>
          To improve their brand consistency between their company and their
          products, and to help reduce the complexity (and therefore time to
          release), we want to standardise the components across all their
          websites by creating a component library that is specific to their
          needs. Changes made in the component library would then update all 3
          of their websites automatically.
        </li>
        <li>
          To help improve the reliability of their website we want to add more
          tests to ensure that we never miss issues when things either look
          wrong or work incorrectly. This is especially important for them as a
          team of developers, who can&#39;t afford to have mistakes in any of
          their software, including their website.
        </li>
      </ul>
    </div>
  );
}
