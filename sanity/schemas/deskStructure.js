import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Konfiguracja strony')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Ustawienia strony')
        .child(
          S.document().schemaType('siteTechConfig').documentId('siteTechConfig')
        ),
      S.listItem()
        .title('Menu strony')
        .child(S.document().schemaType('menuData').documentId('menuData')),
      S.listItem()
        .title('Menu usług stowarzyszenia')
        .child(
          S.document()
            .schemaType('allProjectsData')
            .documentId('allProjectsData')
        ),
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
        .title('Strona "Polityka"')
        .child(
          S.document().schemaType('pagePolityka').documentId('pagePolityka')
        ),
      S.listItem()
        .title('Referencje')
        .child(
          S.document().schemaType('testimonials').documentId('testimonials')
        ),
      S.listItem()
        .title('Gminy')
        .child(
          S.document()
            .schemaType('cooperatingCities')
            .documentId('cooperatingCities')
        ),
      S.listItem()
        .title('Galeria')
        .child(S.document().schemaType('gallery').documentId('gallery')),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'siteTechConfig',
            'allProjectsData',
            'pageHome',
            'pageBlog',
            'pageONas',
            'pageKontakt',
            'gallery',
            'testimonials',
            'menuData',
          ].includes(item.getId())
      ),
    ]);
