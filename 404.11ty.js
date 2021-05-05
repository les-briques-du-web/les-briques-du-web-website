/**
 * @file Defines the chained template for the 404 page
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data ={
  locale: 'fr',
  title: '🎉 Félicitations ! Vous avez trouvé notre page 404!',
  layout: 'layouts/page',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
}

/**
 * The content of the 404 page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/quicktips/not-found/ 404 pages in 11ty}
 */
export function render(data) {
  return /* md */ `
  Nous avons le regret de vous informer que le contenu que vous cherchez n'est pas dans l'adresse que vous demandez... à moins que vous ne faisiez exprès de chercher cette page, bien entendu ! 

  ### Autres options

  * [😇 Vous plaindre à ${data.author.name.givenName} en Twitter](${data.author.social.accounts.find(account => account.name === 'Twitter').url})
  * [📥 Poster un issue sur Git](${data.pkg.bugs.url})
  * [🏡 Revenir à la page d'accueil](${data.pkg.bugs.url})
  `;
}
