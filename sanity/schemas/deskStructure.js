import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Website config')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog config')
        .child(S.document().schemaType('blogConfig').documentId('blogConfig')),
      S.listItem()
        .title('Website main menu')
        .child(S.document().schemaType('menuData').documentId('menuData')),
      S.listItem()
        .title('Strona główna')
        .child(S.document().schemaType('pageHome').documentId('pageHome')),
      S.listItem()
        .title('Strona "O nas"')
        .child(S.document().schemaType('pageONas').documentId('pageONas')),
      S.listItem()
        .title('Strona "Kontakt"')
        .child(
          S.document().schemaType('pageKontakt').documentId('pageKontakt')
        ),
      S.listItem()
        .title('Site: "Privacy Policy"')
        .child(S.document().schemaType('pagePolicy').documentId('pagePolicy')),
      S.listItem()
        .title('Referencje')
        .child(
          S.document().schemaType('testimonials').documentId('testimonials')
        ),
      S.listItem()
        .title('Galeria')
        .child(S.document().schemaType('gallery').documentId('gallery')),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'blogConfig',
            'allProjectsData',
            'pageHome',
            'pageBlog',
            'pageONas',
            'pagePolicy',
            'pageKontakt',
            'gallery',
            'testimonials',
            'menuData',
          ].includes(item.getId())
      ),
    ]);
