/**
 * @file Contains global data for configuring the site
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global site data module
 * @module _data/site
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
export default {
  // The root for the site domain (without a trailing slash)
  baseUrl: 'https://rdv-speakers.fr/les-briques-du-web',
  pathPrefix: '/les-briques-du-web',
  // Uses this locale when one is not set in content/content.11tydata.js
  defaultLocale: 'fr',
  // Localized strings and other options for Spanish (es)
  // To add a language, copy this object, then change the values
  logo: {
    url: 'img/logos/logo.png'
  },
  fr: {
    title: 'Les Briques du Web',
    // French as used in France
    locale: 'fr',
    // The subtitle, slogan, or catchphrase for your site,
    // used in _includes/shortcodes/site-header
    tagline: "Emission bimensuelle autour du développement web",
    when: "Toutes les deux semaines, le Mardi à 12h15",
    // Punctuation between a title and subtitle,
    // used in _includes/shortcodes/title-tag
    separator: ' - ',
    // The link text for skip-to-content lins, used by screen readers
    skipToContent: 'Aller au contenu',
    // The link text to invite users to edit a page in the project Git repository
    // Link path stored in package.json
    editThisPage: '📝 Éditer la page',
    // The paged navigation for larger archives of content
    // used in _includes/shortcodes/pagination-nav
    pagination: {
      // The aria-label for a pagination navigation
      navLabel: 'Pagination',
      // The aria-label for pages within a pagination navigation
      pageLabel: 'Page',
      // The link text for the first page within a pagination navigation
      first: '1',
      // The aria-label for the first page within a pagination navigation
      firstLabel: '1',
      // The link text for the previous page within a pagination navigation
      previous: 'Précédente',
      // The link text for the next page within a pagination navigation
      next: 'Suivante',
      // The link text for the last page within a pagination navigation
      last: 'Dernière',
      // The aria-label for the last page within a pagination navigation
      lastLabel: 'Dernière page'
    },
    // Options for your archive of episodes,
    // used in _includes/layout/archive.11ty.js
    episodesArchive: {
      // Heading for your most recent posts, used on home page
      headline: 'Derniers épisodes',
      // Invite the user to visit your archive of posts, used on home page
      prompt: '… visiter les archives 👀',
      // The landing page for your archive of posts
      url: 'episodes'
    },
    team: {
      url: 'team',
    },
    guests: {
      url: 'guests',
    },
    /*
     * Options for displaying dates in this locale
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString `toLocaleDateString()` on MDN}
     */
    dateOptions: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    },
    // Options for navigation elements
    nav: {
      // The `aria-label` to apply to the primary navigation
      primary: 'primary navigation'
    },
  },
}
