Check it out here: https://wordsy-akcb.vercel.app/

- A Gatsby application built to allow users to browse different words in foreign languages.
- Built in Gatsby, TypeScript and using Contentful as a CMS.
- Project includes a dark mode, SCSS modules and graphQL queries.

<img width="368" alt="Screenshot 2023-05-23 at 14 36 50" src="https://github.com/singapaul/wordsy/assets/89204135/0d4716f1-00f3-469b-a023-7fd0f5756f48">

To do:

2. Content jumping around on page
3. Add favicon!

Nice to haves

1. Add SEO/Head content
2. Refactor Gatsby Node.JS to look like workshop with destructuring.
3. Add a flag to each country
4. How many people are visiting the site?

Completed items

1. Make A-Z Page - DONE
2. Integrate CMS - add slugs - DONE
3. Initiate git - DONE
4. make a figma - DONE
5. Breakdown components and Integrate Styling - DONE
6. Integrate theming with a light/dark mode - Done
7. Make home page - DONE
8. Implement Link tags for site navigation - DONE
9. Clean up READMe file and add picture for profile - DONE
10. Make shuffle work - DONE
11. Fix hydration errors - DONE
12. Upload a JSON of more words - DONE
13. A-Z is now in order - DONE

Design link here:

https://www.figma.com/file/pqfegWNWr1JERewP43wJ4L/wordy?type=design&node-id=0-1&t=HR3BDEkGgj2DSVA0-0

notes:

    // e.g.  @todo the @ shows up red in Github which is why we do it.

- is a loop necessary? could you do a lookup instead? especially when dealing with data.

Troubleshooting:

- hydration errors can happen if you put a div in a p, or a body within a main tag - the browser does some parsing and will reorganise stuff to make it valid so things like div inside of p, it'll close the p tag before rendering the div tag I believe, etc
  https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/#problems-with-the-cache
