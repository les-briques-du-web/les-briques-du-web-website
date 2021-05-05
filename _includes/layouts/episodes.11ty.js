/**
 * @file Defines the chained template for episodes 
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
 export var data = {
  layout: 'layouts/base'
}

/**
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
export function render(data) {
  return `
    <article>
      <header class="article-header">
        <div class="episode">
          <div class="number"> 
            ${data.name}
          </div>
          <time>${this.pageDate(data)}</time>
        </div>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
      </header>
      <div>
        <img src="${data.site.baseUrl}img/${data.name}/card.png">
      </div>
    </article>
  `
}
