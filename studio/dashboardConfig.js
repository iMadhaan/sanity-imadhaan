export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60182b6510558809126bec3e',
                  title: 'Sanity Studio',
                  name: 'sanity-imadhaan-studio',
                  apiId: 'b169f045-0ca2-41ce-b974-70503b50c2d7'
                },
                {
                  buildHookId: '60182b65c708b20aadce852d',
                  title: 'Blog Website',
                  name: 'sanity-imadhaan',
                  apiId: '64405a68-cba2-49dd-9ef1-ec65a3d22b80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iMadhaan/sanity-imadhaan',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-imadhaan.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
